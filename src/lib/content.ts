import { getCollection, type CollectionEntry } from 'astro:content';

const isProd = import.meta.env.PROD;

/** Published posts, newest first. Drafts show in `npm run dev` only. */
export async function getPosts(): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getCollection('blog', ({ data }) => !(isProd && data.draft));
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Projects: featured first, then newest. */
export async function getProjects(): Promise<CollectionEntry<'projects'>[]> {
  const items = await getCollection('projects', ({ data }) => !(isProd && data.draft));
  return items.sort(
    (a, b) =>
      Number(b.data.featured) - Number(a.data.featured) ||
      b.data.date.valueOf() - a.data.date.valueOf(),
  );
}

export function readingTime(body = ''): string {
  const words = body.replace(/```[\s\S]*?```/g, ' ').split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / 220))} min read`;
}

export function slugifyTag(tag: string): string {
  return tag.toLowerCase().trim().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export function formatDate(d: Date): string {
  return d.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric', timeZone: 'UTC' });
}
