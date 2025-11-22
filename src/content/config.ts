import { defineCollection, z } from "astro:content";

const presentation = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string()
    })
})

const programmingLanguages = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        icon: z.string(),
        learned: z.string(),
    })
})

const frontend = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        icon: z.string(),
        learned: z.string(),
    })
})

const backend = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        icon: z.string(),
        learned: z.string(),
    })
})

const dataBases = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        icon: z.string(),
        learned: z.string(),
    })
})

const tools = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        icon: z.string(),
        learned: z.string(),
    })
})

const softSkills = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        icon: z.string(),
        learned: z.string(),
    })
})

const links = defineCollection({
    type: 'content',
    schema: z.object({
        name: z.string(),
        link: z.string(),
        id: z.number(),
    })
})

const projects = defineCollection({
    type: 'content',
    schema: z.object({
          alt: z.string(),
            src: z.string(),
            link: z.string(),
            status: z.boolean(),
            frontend: z.array(z.string()),
            backend: z.array(z.string()),
            programmingLanguages: z.array(z.string()),
    })
})

const socialMedia = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        link: z.string(),
        icon: z.string(),
    })
})

export const collections = {
    presentation,
    programmingLanguages,
    frontend,
    backend,
    dataBases,
    tools,
    softSkills,
    links,
    projects,
    socialMedia,
};
