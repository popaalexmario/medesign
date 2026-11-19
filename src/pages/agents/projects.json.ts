import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

// Lista proiectelor din portofoliu, pentru unealta WebMCP search_projects
// (src/components/AgentTools.astro). Se generează la build.
const SITE = 'https://me-design.ro';

export const GET: APIRoute = async () => {
  const projects = (await getCollection('projects', ({ data }) => !data.draft))
    .sort((a, b) => a.data.order - b.data.order)
    .map((p) => ({
      title: p.data.title,
      description: p.data.description,
      categories: p.data.categories,
      phase: p.data.faza,
      year: p.data.year,
      location: p.data.location,
      client: p.data.beneficiar,
      url: `${SITE}/portofoliu/${p.slug}/`,
    }));
  return new Response(JSON.stringify(projects), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
};
