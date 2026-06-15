"use server";

import { Resend } from "resend";
import { inquirySchema } from "./validations/inquirySchema";
const resend = new Resend(process.env.RESEND_API_KEY);

export type data = {
  pieceTitle: string;
  clientName: string;
  email: string;
  message: string;
};

export const sendEmail = async (data: data) => {
  const validated = inquirySchema.parse(data);

  await resend.emails.send({
    from: "onboarding@resend.dev",
    to: "evangelina1001@hotmail.com",
    subject: `Inquiry about ${validated.pieceTitle}`,
    replyTo: data.email,
    html: `
    <h3>New Inquiry</h3>
    <p><strong>Pieza:</strong> ${validated.pieceTitle}</p>
    <p><strong>Nombre:</strong> ${validated.clientName}</p>
    <p><strong>Email:</strong> ${validated.email}</p>
    <p><strong>Mensaje:</strong></p>

    <p>${validated.message}</p>
    `,
  });

  return {
    success: true,
  };
};
