// Usage: npm run new -- "My post title"            -> blog post
//        npm run new -- --project "My POC title"   -> project page
import { writeFileSync, existsSync } from 'node:fs';

const args = process.argv.slice(2);
const isProject = args[0] === '--project';
const title = (isProject ? args.slice(1) : args).join(' ').trim();
if (!title) {
  console.error('Give it a title: npm run new -- "My post title"');
  process.exit(1);
}
const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const today = new Date().toISOString().slice(0, 10);
const dir = isProject ? 'src/content/projects' : 'src/content/blog';
const file = `${dir}/${slug}.md`;
if (existsSync(file)) {
  console.error(`${file} already exists`);
  process.exit(1);
}
const front = isProject
  ? `---\ntitle: "${title}"\nsummary: ""\ndate: ${today}\nstack: []\nstatus: building\nrepo: ""\ndraft: true\n---\n\n## Problem\n\n## Approach\n\n## Results\n`
  : `---\ntitle: "${title}"\ndescription: ""\npubDate: ${today}\ntags: []\ndraft: true\n---\n\nStart writing…\n`;
writeFileSync(file, front.replace('repo: ""\n', ''));
console.log(`Created ${file} (draft: true — flip to false to publish)`);
