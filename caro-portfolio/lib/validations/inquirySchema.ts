import { z } from "zod";

export const createInquirySchema = (t: (key: string) => string) => 
  z.object({
    pieceTitle: z.string(),
    clientName: z.string().min(2, t("clientNameError")),
    email: z.email(t("emailError")),
    message: z.string().min(1, t("messageError")),
  });

export type InquiryFormValues = {
  pieceTitle: string;
  clientName: string;
  email: string;
  message: string;
};

export const inquirySchema = z.object({
  pieceTitle: z.string(),
  clientName: z.string().min(2),
  email: z.email(),
  message: z.string().min(1),
});