/**
 * Image tooling for this repo (maintenance, not runtime).
 *
 * Usage:
 *   node scripts/images.js compress
 *   node scripts/images.js replace
 *   node scripts/images.js organize
 *   node scripts/images.js prune-unused [--dry-run]
 */
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const repoRoot = path.join(__dirname, "..");
const assetsDir = path.join(repoRoot, "src", "assets");
const compressedDir = path.join(repoRoot, "src", "assets-compressed");
const backupDir = path.join(repoRoot, "src", "assets-backup");
const organizedDir = path.join(repoRoot, "src", "assets-organized");

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
}

function walkFiles(dir, predicate, out = []) {
  if (!fs.existsSync(dir)) return out;
  const entries = fs.readdirSync(dir);
  for (const entry of entries) {
    const full = path.join(dir, entry);
    const st = fs.statSync(full);
    if (st.isDirectory()) {
      walkFiles(full, predicate, out);
    } else if (!predicate || predicate(full)) {
      out.push(full);
    }
  }
  return out;
}

function isCompressibleImage(p) {
  return /\.(png|jpg|jpeg|webp)$/i.test(p);
}

async function compressOne(inputPath, outputPath) {
  const ext = path.extname(inputPath).toLowerCase();
  let pipeline = sharp(inputPath);

  if (ext === ".png") pipeline = pipeline.png({ quality: 80, compressionLevel: 9 });
  else if (ext === ".jpg" || ext === ".jpeg") pipeline = pipeline.jpeg({ quality: 80, progressive: true });
  else if (ext === ".webp") pipeline = pipeline.webp({ quality: 80 });

  ensureDir(path.dirname(outputPath));
  await pipeline.toFile(outputPath);
}

async function compress() {
  if (!fs.existsSync(assetsDir)) {
    console.error(`assets folder not found: ${assetsDir}`);
    process.exitCode = 1;
    return;
  }

  ensureDir(compressedDir);
  const images = walkFiles(assetsDir, (p) => isCompressibleImage(p));
  console.log(`Found ${images.length} images to compress`);

  let ok = 0;
  let totalOriginal = 0;
  let totalCompressed = 0;

  for (const img of images) {
    const rel = path.relative(assetsDir, img);
    const out = path.join(compressedDir, rel);

    const originalSize = fs.statSync(img).size;
    totalOriginal += originalSize;

    try {
      await compressOne(img, out);
      const compressedSize = fs.statSync(out).size;
      totalCompressed += compressedSize;
      ok++;
      const savings = originalSize ? (((originalSize - compressedSize) / originalSize) * 100).toFixed(1) : "0.0";
      console.log(`✓ ${rel} (${(originalSize / 1024).toFixed(1)}KB → ${(compressedSize / 1024).toFixed(1)}KB, -${savings}%)`);
    } catch (e) {
      console.error(`✗ Failed: ${rel} (${e?.message || e})`);
    }
  }

  const totalSavings = totalOriginal
    ? (((totalOriginal - totalCompressed) / totalOriginal) * 100).toFixed(2)
    : "0.00";
  console.log(`\nDone. ${ok}/${images.length} processed`);
  console.log(`Original: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Compressed: ${(totalCompressed / 1024 / 1024).toFixed(2)} MB`);
  console.log(`Saved: ${totalSavings}%`);
  console.log(`Output: ${compressedDir}`);
}

function copyDirectory(src, dest) {
  ensureDir(dest);
  const items = fs.readdirSync(src);
  for (const item of items) {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    const st = fs.statSync(srcPath);
    if (st.isDirectory()) copyDirectory(srcPath, destPath);
    else fs.copyFileSync(srcPath, destPath);
  }
}

function replace() {
  if (!fs.existsSync(compressedDir)) {
    console.error(`Missing ${path.relative(repoRoot, compressedDir)}. Run "compress" first.`);
    process.exitCode = 1;
    return;
  }
  if (!fs.existsSync(assetsDir)) {
    console.error(`Missing ${path.relative(repoRoot, assetsDir)}.`);
    process.exitCode = 1;
    return;
  }

  if (!fs.existsSync(backupDir)) {
    console.log("Creating backup of original images...");
    copyDirectory(assetsDir, backupDir);
    console.log(`✓ Backup created: ${path.relative(repoRoot, backupDir)}`);
  }

  console.log("Replacing original images with compressed versions...");
  const items = walkFiles(compressedDir, (p) => isCompressibleImage(p));
  for (const compressedPath of items) {
    const rel = path.relative(compressedDir, compressedPath);
    const originalPath = path.join(assetsDir, rel);
    ensureDir(path.dirname(originalPath));
    fs.copyFileSync(compressedPath, originalPath);
    console.log(`✓ Replaced: ${rel}`);
  }

  console.log("Done.");
  console.log(`Backup: ${path.relative(repoRoot, backupDir)}`);
}

// Mapping used to build a clean asset directory structure.
const imageMapping = {
  // Hero Section
  "background_for hero.png": "hero/hero-background.png",
  "bank-central-of-libya-logo-png_seeklogo-563651.png": "logos/central-bank-libya.png",

  // Services Section
  "currency-exchange.png": "services/currency-exchange.png",
  "global-remittances.jpg": "services/global-remittances.jpg",
  "corporate-liquidity.png": "services/corporate-liquidity.png",
  "digital-ecosystem.png": "services/digital-ecosystem.png",
  "legalcomplaiance.png": "services/legal-compliance.png",
  "theplanet.png": "services/global-transfers.png",

  // Payment Methods
  "Sadad.almadar.png": "payment-methods/sadad-logo.png",
  "ly-pay-logo.png": "payment-methods/lypay-logo.png",
  "GetCustomerLogo.png": "payment-methods/getcustomer-logo.png",

  // Icons - Features
  "agreement.png": "icons/agreement-icon.png",
  "analytics.png": "icons/analytics-icon.png",
  "bank.png": "icons/bank-icon.png",
  "icon_bolt-removebg-preview.png": "icons/speed-icon.png",
  "icon_lock-removebg-preview.png": "icons/security-icon.png",
  "icon_shield-removebg-preview.png": "icons/guarantee-icon.png",

  // Vision & Mission
  "support.png": "vision-mission/digital-support.png",
  "ourvision.png": "vision-mission/our-vision.png",

  // Branding
  "the_logo.png": "branding/company-logo.png",
  "ly.svg": "branding/libya-flag.svg",

  // Animations
  "building.gif": "animations/building-animation.gif",
  "calendar.gif": "animations/calendar-animation.gif",
  "emerging-industries.gif": "animations/emerging-industries.gif",
  "Gemini_Generated.png": "animations/ai-generated-graphic.png",

  // General Assets
  "image.png": "general/compliance-graphic.png",
  "compliance.png": "general/compliance-badge.png",
};

function findImageByExactName(rootDir, fileName) {
  const matches = walkFiles(rootDir, (p) => path.basename(p) === fileName);
  return matches[0] || null;
}

function toImportVarName(newPath) {
  const base = path.basename(newPath, path.extname(newPath));
  return base
    .replace(/[^a-zA-Z0-9_-]/g, "")
    .replace(/-([a-zA-Z0-9])/g, (_, c) => c.toUpperCase())
    .replace(/^([A-Z])/, (c) => c.toLowerCase());
}

function organize() {
  if (!fs.existsSync(assetsDir)) {
    console.error(`assets folder not found: ${assetsDir}`);
    process.exitCode = 1;
    return;
  }

  ensureDir(organizedDir);
  console.log(`Organizing images into: ${path.relative(repoRoot, organizedDir)}`);

  let copied = 0;
  let totalSize = 0;

  for (const [oldName, newRelPath] of Object.entries(imageMapping)) {
    const found = findImageByExactName(assetsDir, oldName);
    if (!found) {
      console.log(`⚠ Not found: ${oldName}`);
      continue;
    }

    const dest = path.join(organizedDir, newRelPath);
    ensureDir(path.dirname(dest));
    fs.copyFileSync(found, dest);
    const size = fs.statSync(dest).size;
    copied++;
    totalSize += size;
    console.log(`✓ ${oldName} → ${newRelPath} (${(size / 1024).toFixed(1)}KB)`);
  }

  console.log(`\nDone. Copied: ${copied}`);
  console.log(`Total size: ${(totalSize / 1024 / 1024).toFixed(2)} MB`);

  console.log(`\nUpdated import statements (for components):`);
  for (const newRelPath of Object.values(imageMapping)) {
    const varName = toImportVarName(newRelPath);
    console.log(`import ${varName} from './assets/${newRelPath}';`);
  }
}

function getAllCodeFiles() {
  const srcDir = path.join(repoRoot, "src");
  const publicDir = path.join(repoRoot, "public");
  const isCode = (p) => /\.(js|jsx|css|html)$/i.test(p);
  return [...walkFiles(srcDir, isCode), ...walkFiles(publicDir, isCode)];
}

function getAllAssetImages() {
  const isImg = (p) => /\.(png|jpg|jpeg|gif|svg|webp)$/i.test(p);
  return walkFiles(assetsDir, isImg);
}

function pruneUnused({ dryRun }) {
  if (!fs.existsSync(assetsDir)) {
    console.error(`assets folder not found: ${assetsDir}`);
    process.exitCode = 1;
    return;
  }

  const codeFiles = getAllCodeFiles();
  const images = getAllAssetImages();

  let allCode = "";
  for (const file of codeFiles) {
    try {
      allCode += fs.readFileSync(file, "utf8") + "\n";
    } catch {
      // ignore unreadable files
    }
  }

  const unused = [];
  for (const imagePath of images) {
    const fileName = path.basename(imagePath);
    const nameNoExt = path.basename(imagePath, path.extname(imagePath));
    const normalized = imagePath.replace(/\\/g, "/");

    const used =
      allCode.includes(fileName) ||
      allCode.includes(nameNoExt) ||
      allCode.includes(normalized);

    if (!used) unused.push(imagePath);
  }

  console.log(`Total images: ${images.length}`);
  console.log(`Unused images: ${unused.length}`);

  if (!unused.length) return;

  for (const p of unused) {
    console.log(`- ${path.relative(repoRoot, p)}`);
  }

  if (dryRun) {
    console.log("\nDry run: nothing deleted.");
    return;
  }

  let deleted = 0;
  for (const p of unused) {
    try {
      fs.unlinkSync(p);
      deleted++;
    } catch (e) {
      console.error(`Failed to delete ${path.relative(repoRoot, p)}: ${e?.message || e}`);
    }
  }
  console.log(`\nDeleted ${deleted} unused images.`);
}

async function favicon() {
  const src = path.join(repoRoot, "src", "assets", "logos", "ras.png");
  const publicDir = path.join(repoRoot, "public");
  if (!fs.existsSync(src)) {
    console.error(`Logo not found: ${src}`);
    process.exitCode = 1;
    return;
  }
  ensureDir(publicDir);
  const sizes = [16, 32, 48];
  const transparent = { r: 0, g: 0, b: 0, alpha: 0 };
  for (const size of sizes) {
    const out = path.join(publicDir, `favicon-${size}x${size}.png`);
    await sharp(src)
      .resize(size, size, {
        fit: "contain",
        position: "center",
        background: transparent,
      })
      .png({ compressionLevel: 9 })
      .toFile(out);
    console.log(`Wrote ${path.relative(repoRoot, out)}`);
  }
  console.log("Favicon sizes generated (aspect ratio preserved, no crop).");
}

function printHelp() {
  console.log(`Usage:
  node scripts/images.js compress
  node scripts/images.js replace
  node scripts/images.js organize
  node scripts/images.js prune-unused [--dry-run]
  node scripts/images.js favicon
`);
}

async function main() {
  const [, , cmd, ...rest] = process.argv;
  const dryRun = rest.includes("--dry-run");

  if (!cmd || cmd === "help" || cmd === "--help" || cmd === "-h") {
    printHelp();
    return;
  }

  if (cmd === "compress") return await compress();
  if (cmd === "replace") return replace();
  if (cmd === "organize") return organize();
  if (cmd === "prune-unused") return pruneUnused({ dryRun });
  if (cmd === "favicon") return await favicon();

  console.error(`Unknown command: ${cmd}\n`);
  printHelp();
  process.exitCode = 1;
}

main().catch((e) => {
  console.error(e);
  process.exitCode = 1;
});

