import { z } from "zod";

export const inquirySchema = z.object({
  pieceTitle: z.string(),
  clientName: z.string().min(2, "Tu nombre es requerido"),
  email: z.email("Ingresa una dirección de correo electrónico válida"),
  message: z.string(),
});

export type InquiryFormValues = z.infer<typeof inquirySchema>;
