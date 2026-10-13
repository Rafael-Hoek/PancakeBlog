// Content is read at build time from src/content/**. Each file is Markdown with
// a frontmatter block (title, abstract, date, optional tags: a, b, c).
const projectFiles = import.meta.glob('./content/projects/*.md', { query: '?raw', import: 'default', eager: true });
const blogFiles = import.meta.glob('./content/blog/*.md', { query: '?raw', import: 'default', eager: true });
const resumeFiles = import.meta.glob('./content/resume.md', { query: '?raw', import: 'default', eager: true });

export function parse(raw) {
  const match = raw.replace(/\r\n/g, '\n').match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  const meta = {};
  let body = raw;
  if (match) {
    body = match[2];
    for (const line of match[1].split('\n')) {
      const i = line.indexOf(':');
      if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim().replace(/^["']|["']$/g, '');
    }
  }
  return { meta, body };
}

function load(files) {
  return Object.entries(files)
    .map(([path, raw]) => {
      const { meta, body } = parse(raw);
      const tags = meta.tags ? meta.tags.split(',').map((t) => t.trim()).filter(Boolean) : [];
      const minutes = Math.max(1, Math.round(body.split(/\s+/).length / 220));
      return { slug: path.split('/').pop().replace(/\.md$/, ''), ...meta, tags, minutes, body };
    })
    .sort((a, b) => String(b.date || '').localeCompare(String(a.date || '')));
}

export const projects = load(projectFiles);
export const blogPosts = load(blogFiles);
export const resume = Object.values(resumeFiles).map(parse)[0] || { meta: {}, body: '' };
