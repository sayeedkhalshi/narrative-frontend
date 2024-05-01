// types.ts

import * as z from "zod";

export const createLearningCurveSchema = z.object({
    curve: z.string().min(10),
});

export type CreateLearningCurveFormValues = z.infer<
    typeof createLearningCurveSchema
>;
