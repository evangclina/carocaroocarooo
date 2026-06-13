"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  inquirySchema,
  type InquiryFormValues,
} from "@/lib/validations/inquirySchema";

import { sendEmail } from "@/lib/sendInquiry";

export default function InquiryForm({ pieceTitle }: { pieceTitle: string }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<InquiryFormValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      pieceTitle,
      clientName: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: InquiryFormValues) => {
    try {
      await sendEmail(data);
      reset();
      alert("Email sent");
    } catch {
      alert("Something went wrong");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" {...register("pieceTitle")} />

      <div>
        <input type="text" placeholder="nombre" {...register("clientName")} />

        {errors.clientName && <p>{errors.clientName.message}</p>}
      </div>

      <div>
        <input
          type="email"
          placeholder="ejemplo@mail.com"
          {...register("email")}
        />
        {errors.email && <p>{errors.email.message}</p>}
      </div>

      <div>
        <input
          type="text"
          name="subject"
          placeholder={`Me interesa saber mas detalles de la pieza ${pieceTitle}`}
        />
        {errors.message && <p>{errors.message.message}</p>}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "enviando" : "enviar"}
      </button>
    </form>
  );
}
