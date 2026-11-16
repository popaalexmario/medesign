import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().max(70),
    description: z.string().max(165),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    category: z.enum(['Ghiduri', 'Tehnic', 'Legislație', 'Studii de caz']),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    keywords: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    // Titlul scurt pentru <title> și rezultatele Google (max ~52 caractere).
    seoTitle: z.string().max(55).optional(),
    description: z.string(),
    categories: z.array(z.string()).min(1),
    faza: z.string(),
    location: z.string(),
    judet: z.string(),
    beneficiar: z.string().optional(),
    // Setat când contractul de proiectare nu a fost încheiat direct cu
    // beneficiarul final: descrie pe scurt veriga prin care s-a contractat.
    beneficiarPrin: z.string().optional(),
    region: z.enum(['muntenia', 'oltenia', 'dobrogea', 'transilvania', 'moldova']),
    year: z.string(),
    image: z.string().optional(),
    // Numele fișierului din poze/proiecte/<slug>/ din care s-a făcut coperta,
    // ca să nu apară de două ori în galeria fișei.
    coverFrom: z.string().optional(),
    gallery: z
      .array(z.union([z.string(), z.object({ src: z.string(), caption: z.string().optional() })]))
      .default([]),
    order: z.number().default(999),
    draft: z.boolean().default(false),
  }),
});

// Traducerea în engleză a fișelor de proiect. Restul datelor (imagini,
// categorii, regiune, an) se iau din fișierul românesc cu același nume.
const projectsEn = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().max(55).optional(),
    description: z.string(),
    faza: z.string(),
    location: z.string(),
    beneficiar: z.string().optional(),
    beneficiarPrin: z.string().optional(),
  }),
});

export const collections = { blog, projects, 'projects-en': projectsEn };
