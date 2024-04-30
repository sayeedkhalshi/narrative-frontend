// types.ts

import * as z from "zod";

export const createTermSchema = z.object({
    title: z.string().min(2),
    details: z.string(),
    termType: z.string(),
    derivedFrom: z.string(),
});

export type CreateTermFormValues = z.infer<typeof createTermSchema>;
