import { defineCollection, z } from "astro:content";
const integrations = defineCollection({
  schema: z.object({
    integration: z.string(),
    description: z.string(),
    email: z.string(),
    permissions: z.array(z.string()),
    details: z.array(z.object({
      title: z.string(),
      value: z.string(),
      url: z.optional(z.string()),
    })),
    logo: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});
const jobs = defineCollection({
  schema: z.object({
    page: z.string(),
    details: z.record(z.string()),
  }),
});
 const team = defineCollection({
  schema: z.object({
    name: z.string(),
    role: z.string(),
    intro: z.string(),
    education: z.array(z.string()),
    experience: z.array(z.string()),
    avatar: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});
const customers = defineCollection({
  schema: z.object({
    customer: z.string(),
    challengesAndSolutions: z.array(z.object({
      title: z.string(),
      content: z.string(),
    })),
results: z.array(z.string()),
    about: z.string(),
    details: z.record(z.string()),
    logo: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});
const changelog = defineCollection({
  schema: z.object({
    page: z.string(),
    description: z.string(),
    pubDate: z.date(),
    image: z.object({
        url: z.string(),
        alt: z.string()
      }),
  }),
});
const helpcenter = defineCollection({
  schema: z.object({
    page: z.string(),
    description: z.string(),
    icon: z.object({
      url: z.string(),
      alt: z.string(),
    }),
  }),
});
const infopages = defineCollection({
  schema: z.object({
    page: z.string(),
    pubDate: z.date().optional(),
  }),
});
const postsCollection = defineCollection({
    schema: z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      author: z.string(),
      image: z.object({
        url: z.string(),
        alt: z.string()
      }),
      tags: z.array(z.string())
    })
 });
export const collections = {
  integrations: integrations,
  jobs: jobs,
  team: team,
  customers: customers,
  changelog: changelog,
  helpcenter: helpcenter,
  infopages: infopages,
  posts: postsCollection,
};