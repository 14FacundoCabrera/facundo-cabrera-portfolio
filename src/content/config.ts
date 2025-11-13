import { defineCollection, z } from "astro:content";

const presentation = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string()
    })
})

const programmingLenguages = defineCollection({
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
    })
})

export const collections = {
    presentation: presentation,
    programmingLenguages: programmingLenguages,
    frontend: frontend,
    backend: backend,
    dataBases: dataBases,
    tools: tools,
    softSkills: softSkills,
    links: links,
}