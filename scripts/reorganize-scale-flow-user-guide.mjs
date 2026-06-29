#!/usr/bin/env node
/**
 * Reorganize scale-flow user-guide to match ScaleFlow UI sidebar groups,
 * fix cross-links, and normalize sidebar_position per category.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const DOC_LOCATIONS = {
  "account-registration": "getting-started/account-registration",
  "inbox-usage": "operations/inbox-usage",
  "contact-management": "operations/contact-management",
  "ticket-usage": "operations/ticket-usage",
  "flow-usage": "operations/flow-usage",
  "analytics-usage": "operations/analytics-usage",
  "answering-customers": "operations/answering-customers",
  "ai-agent-usage": "scaleflow-ai/ai-agent-usage",
  "knowledge-usage": "scaleflow-ai/knowledge-usage",
  "model-usage": "scaleflow-ai/model-usage",
  "ai-assistant": "scaleflow-ai/ai-assistant",
  "channel-integration": "channels/channel-integration",
  "integration-usage": "integrations/integration-usage",
  "google-drive-integration": "integrations/google-drive-integration",
  "google-sheets-integration": "integrations/google-sheets-integration",
  "make-integration": "integrations/make-integration",
  "shopify-integration": "integrations/shopify-integration",
  "connecting-your-freshdesk-account":
    "integrations/connecting-your-freshdesk-account",
  "user-management": "organization/user-management",
  "team-management": "organization/team-management",
  "roles-permissions": "organization/roles-permissions",
  "tenant-management": "organization/tenant-management",
  "profile-usage": "organization/profile-usage",
  "setting-up-chat-widget": "channels/chat-widget/setting-up-chat-widget",
  "connecting-your-zalo-oa-account":
    "channels/zalo/connecting-your-zalo-oa-account",
  "connecting-your-zalo-me-account":
    "channels/zalo-me/connecting-your-zalo-me-account",
  "connecting-your-messenger-account":
    "channels/messenger/connecting-your-messenger-account",
  "connecting-your-whatsapp-business-api-account":
    "channels/whatsapp/connecting-your-whatsapp-business-api-account",
  "connecting-your-line-business-account":
    "channels/line/connecting-your-line-business-account",
  "connecting-your-telegram-bot":
    "channels/telegram/connecting-your-telegram-bot",
};

const CHANNEL_SUBFOLDERS = {
  zalo: "channels/zalo",
  "zalo-me": "channels/zalo-me",
  messenger: "channels/messenger",
  whatsapp: "channels/whatsapp",
  line: "channels/line",
  telegram: "channels/telegram",
  "chat-widget": "channels/chat-widget",
};

const SIDEBAR_POSITIONS = {
  "getting-started/account-registration": 1,
  "operations/inbox-usage": 1,
  "operations/contact-management": 2,
  "operations/ticket-usage": 3,
  "operations/flow-usage": 4,
  "operations/analytics-usage": 5,
  "operations/answering-customers": 6,
  "scaleflow-ai/ai-agent-usage": 1,
  "scaleflow-ai/knowledge-usage": 2,
  "scaleflow-ai/model-usage": 3,
  "scaleflow-ai/ai-assistant": 4,
  "channels/channel-integration": 1,
  "integrations/integration-usage": 1,
  "integrations/connecting-your-freshdesk-account": 2,
  "integrations/google-drive-integration": 3,
  "integrations/google-sheets-integration": 4,
  "integrations/make-integration": 5,
  "integrations/shopify-integration": 6,
  "organization/profile-usage": 1,
  "organization/user-management": 2,
  "organization/team-management": 3,
  "organization/roles-permissions": 4,
  "organization/tenant-management": 5,
  "channels/chat-widget/setting-up-chat-widget": 1,
  "channels/zalo/connecting-your-zalo-oa-account": 1,
  "channels/zalo-me/connecting-your-zalo-me-account": 1,
  "channels/messenger/connecting-your-messenger-account": 1,
  "channels/whatsapp/connecting-your-whatsapp-business-api-account": 1,
  "channels/line/connecting-your-line-business-account": 1,
  "channels/telegram/connecting-your-telegram-bot": 1,
};

const CATEGORY_FILES = {
  "getting-started/_category_.json": {
    label: "Getting Started",
    position: 1,
    collapsed: false,
    collapsible: true,
  },
  "operations/_category_.json": {
    label: "Main features",
    position: 2,
    collapsed: false,
    collapsible: true,
  },
  "scaleflow-ai/_category_.json": {
    label: "ScaleFlow AI",
    position: 3,
    collapsed: false,
    collapsible: true,
  },
  "channels/_category_.json": {
    label: "Channels",
    position: 4,
    collapsed: false,
    collapsible: true,
  },
  "integrations/_category_.json": {
    label: "Integrations",
    position: 5,
    collapsed: false,
    collapsible: true,
  },
  "organization/_category_.json": {
    label: "Organization",
    position: 6,
    collapsed: false,
    collapsible: true,
  },
  "channels/zalo/_category_.json": {
    label: "Zalo OA",
    position: 2,
    collapsed: true,
    collapsible: true,
  },
  "channels/zalo-me/_category_.json": {
    label: "Zalo Me",
    position: 3,
    collapsed: true,
    collapsible: true,
  },
  "channels/messenger/_category_.json": {
    label: "Messenger",
    position: 4,
    collapsed: true,
    collapsible: true,
  },
  "channels/whatsapp/_category_.json": {
    label: "WhatsApp",
    position: 5,
    collapsed: true,
    collapsible: true,
  },
  "channels/line/_category_.json": {
    label: "LINE Business",
    position: 6,
    collapsed: true,
    collapsible: true,
  },
  "channels/telegram/_category_.json": {
    label: "Telegram",
    position: 7,
    collapsed: true,
    collapsible: true,
  },
  "channels/chat-widget/_category_.json": {
    label: "Chat Widget",
    position: 8,
    collapsed: true,
    collapsible: true,
  },
};

function ensureDir(dir) {
  fs.mkdirSync(dir, { recursive: true });
}

function moveIfExists(from, to) {
  if (!fs.existsSync(from)) return false;
  ensureDir(path.dirname(to));
  if (fs.existsSync(to)) fs.unlinkSync(from);
  else fs.renameSync(from, to);
  return true;
}

function resolveDocTarget(linkPath) {
  const normalized = linkPath.replace(/^\.\//, "").replace(/\/$/, "");
  if (DOC_LOCATIONS[normalized]) return DOC_LOCATIONS[normalized];
  const base = path.basename(normalized, ".md");
  if (DOC_LOCATIONS[base]) return DOC_LOCATIONS[base];
  if (CHANNEL_SUBFOLDERS[normalized.split("/")[0]]) {
    const [folder, ...rest] = normalized.split("/");
    return `${CHANNEL_SUBFOLDERS[folder]}/${rest.join("/")}`;
  }
  return null;
}

function toPosix(p) {
  return p.split(path.sep).join("/");
}

function relativeLink(fromFile, targetDocPath, userGuideRoot) {
  const fromDir = path.dirname(fromFile);
  const normalizedTarget = targetDocPath.replace(/^user-guide\//, "");
  const targetFile = path.join(userGuideRoot, `${normalizedTarget}.md`);
  let rel = toPosix(path.relative(fromDir, targetFile));
  if (!rel.startsWith(".")) rel = `./${rel}`;
  return rel.replace(/\.md$/, "");
}

function reorganizeFlatFiles(userGuideRoot) {
  for (const [slug, target] of Object.entries(DOC_LOCATIONS)) {
    const flatMd = path.join(userGuideRoot, `${slug}.md`);
    const targetMd = path.join(userGuideRoot, `${target}.md`);
    moveIfExists(flatMd, targetMd);
  }

  for (const [folder, targetPrefix] of Object.entries(CHANNEL_SUBFOLDERS)) {
    const oldDir = path.join(userGuideRoot, folder);
    if (!fs.existsSync(oldDir)) continue;
    const newDir = path.join(userGuideRoot, targetPrefix);
    ensureDir(newDir);
    for (const entry of fs.readdirSync(oldDir)) {
      if (entry === "_category_.json") continue;
      moveIfExists(path.join(oldDir, entry), path.join(newDir, entry));
    }
    if (fs.existsSync(oldDir)) {
      const remaining = fs.readdirSync(oldDir);
      if (remaining.length === 0) fs.rmdirSync(oldDir);
      else if (remaining.length === 1 && remaining[0] === "_category_.json") {
        fs.unlinkSync(path.join(oldDir, "_category_.json"));
        fs.rmdirSync(oldDir);
      }
    }
  }
}

function writeCategoryFiles(userGuideRoot) {
  for (const [rel, content] of Object.entries(CATEGORY_FILES)) {
    const filePath = path.join(userGuideRoot, rel);
    ensureDir(path.dirname(filePath));
    fs.writeFileSync(filePath, `${JSON.stringify(content, null, 4)}\n`);
  }
}

function updateSidebarPosition(filePath, userGuideRoot) {
  const rel = toPosix(path.relative(userGuideRoot, filePath)).replace(/\.md$/, "");
  const position = SIDEBAR_POSITIONS[rel];
  if (!position) return;

  let content = fs.readFileSync(filePath, "utf8");
  if (!content.startsWith("---")) return;
  const end = content.indexOf("---", 3);
  if (end === -1) return;
  const frontmatter = content.slice(0, end + 3);
  const body = content.slice(end + 3);
  const updatedFrontmatter = frontmatter.replace(
    /sidebar_position:\s*\d+/,
    `sidebar_position: ${position}`,
  );
  fs.writeFileSync(filePath, updatedFrontmatter + body);
}

function extractDocTargetFromLink(linkPath) {
  const posix = toPosix(linkPath.replace(/\\/g, "/")).replace(/\.md$/, "");
  const parts = posix.split("/").filter(Boolean);

  const userGuideIdx = parts.indexOf("user-guide");
  if (userGuideIdx !== -1) {
    const resolved = resolveDocTarget(parts.slice(userGuideIdx + 1).join("/"));
    if (resolved) return resolved;
  }

  for (let i = 0; i < parts.length; i++) {
    const suffix = parts.slice(i).join("/");
    if (DOC_LOCATIONS[suffix]) return DOC_LOCATIONS[suffix];
  }

  const base = parts[parts.length - 1];
  if (base && DOC_LOCATIONS[base]) return DOC_LOCATIONS[base];

  if (posix.startsWith("./")) {
    return resolveDocTarget(posix.slice(2));
  }

  return null;
}

function resolveLinkTarget(filePath, linkPath, userGuideRoot, isOverview) {
  if (isOverview) {
    const overviewTarget = linkPath
      .replace(/^\.\//, "")
      .replace(/^user-guide\//, "");
    if (linkPath.includes("user-guide/")) {
      const resolved = resolveDocTarget(overviewTarget);
      if (resolved) return `user-guide/${resolved}`;
    }
  }

  const extracted = extractDocTargetFromLink(linkPath);
  if (extracted) return extracted;

  if (!linkPath.startsWith(".")) return null;

  const fromDir = path.dirname(filePath);
  const absoluteTarget = path.normalize(path.join(fromDir, linkPath));
  const relToGuide = toPosix(path.relative(userGuideRoot, absoluteTarget)).replace(
    /\.md$/,
    "",
  );
  const base = path.basename(relToGuide);

  return (
    DOC_LOCATIONS[relToGuide] ||
    DOC_LOCATIONS[base] ||
    resolveDocTarget(linkPath.slice(2))
  );
}

function fixMarkdownLinks(filePath, userGuideRoot) {
  let content = fs.readFileSync(filePath, "utf8");
  const isOverview = filePath.endsWith(`${path.sep}overview.md`);

  content = content.replace(/\]\(([^)]+)\)/g, (match, rawLink) => {
    if (
      rawLink.startsWith("http") ||
      rawLink.startsWith("#") ||
      rawLink.startsWith("mailto:")
    ) {
      return match;
    }

    const [linkPath, hash = ""] = rawLink.split("#");
    if (!linkPath) return match;

    const target = resolveLinkTarget(filePath, linkPath, userGuideRoot, isOverview);
    if (!target) return match;

    const rel = relativeLink(filePath, target, userGuideRoot);
    return `](${rel}${hash ? `#${hash}` : ""})`;
  });

  fs.writeFileSync(filePath, content);
}

function removeDuplicateFlatDocs(userGuideRoot) {
  for (const target of new Set(Object.values(DOC_LOCATIONS))) {
    const flatSlug = path.basename(target);
    const flatMd = path.join(userGuideRoot, `${flatSlug}.md`);
    const nestedMd = path.join(userGuideRoot, `${target}.md`);
    if (fs.existsSync(flatMd) && fs.existsSync(nestedMd)) {
      fs.unlinkSync(flatMd);
    }
  }
}

function walkMdFiles(dir) {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...walkMdFiles(full));
    else if (entry.name.endsWith(".md")) files.push(full);
  }
  return files;
}

function processUserGuideRoot(userGuideRoot) {
  if (!fs.existsSync(userGuideRoot)) {
    console.warn(`Skip missing: ${userGuideRoot}`);
    return;
  }

  console.log(`\nProcessing ${userGuideRoot}`);
  reorganizeFlatFiles(userGuideRoot);
  removeDuplicateFlatDocs(userGuideRoot);
  writeCategoryFiles(userGuideRoot);

  const mdFiles = walkMdFiles(userGuideRoot);
  for (const file of mdFiles) updateSidebarPosition(file, userGuideRoot);
  for (const file of mdFiles) fixMarkdownLinks(file, userGuideRoot);

  const overview = path.join(path.dirname(userGuideRoot), "overview.md");
  if (fs.existsSync(overview)) fixMarkdownLinks(overview, userGuideRoot);

  console.log(`  Updated ${mdFiles.length} markdown files`);
}

const roots = process.argv.slice(2);
if (roots.length === 0) {
  console.error(
    "Usage: node reorganize-scale-flow-user-guide.mjs <user-guide-root> [more-roots...]",
  );
  process.exit(1);
}

for (const root of roots) {
  processUserGuideRoot(path.resolve(root));
}
