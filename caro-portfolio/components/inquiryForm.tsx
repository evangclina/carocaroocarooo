"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import {
  inquirySchema,
  type InquiryFormValues,
} from "@/lib/validations/inquirySchema";

import { sendEmail } from "@/lib/sendInquiry";

type Props = {
  pieceTitle: string;
  onSuccess: () => void;
};

export default function InquiryForm({ pieceTitle, onSuccess }: Props) {
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
      toast.success("email sent", { position: "top-center" });
      onSuccess();
    } catch {
      toast.error("something went wrong", { position: "top-center" });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col text-13">
      <div>
        <input type="hidden" {...register("pieceTitle")} />

        <div className="flex flex-col mb-2.5">
          <label htmlFor="client-name" className="mb-1.5">
            nombre
          </label>
          <input
            type="text"
            id="client-name"
            placeholder="john doe"
            autoComplete="name"
            {...register("clientName")}
            className="h-8 p-2 bg-[#CDC6B0] rounded-xs"
            aria-invalid={!!errors.clientName}
            disabled={isSubmitting}
          />

          {errors.clientName && (
            <p className="text-red-500 text-11">{errors.clientName.message}</p>
          )}
        </div>

        <div className="flex flex-col mb-2.5">
          <label htmlFor="email" className="mb-1.5">
            email
          </label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            placeholder="ejemplo@mail.com"
            {...register("email")}
            className="h-8 p-2 bg-[#CDC6B0]"
            aria-invalid={!!errors.email}
            disabled={isSubmitting}
          />
          {errors.email && (
            <p className="text-red-500 text-11">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col mb-2.5">
          <label htmlFor="message" className="mb-1.5">
            mensaje
          </label>
          <textarea
            id="message"
            rows={4}
            placeholder={`Me interesa saber mas detalles de la pieza ${pieceTitle}`}
            {...register("message")}
            className="h-16 p-2 bg-[#CDC6B0] text-wrap"
            aria-invalid={!!errors.message}
            disabled={isSubmitting}
          />
          {errors.message && (
            <p className="text-red-500 text-11">{errors.message.message}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="self-end mt-2.5 bg-[#CDC6B0] py-2 px-4 text-13 cursor-pointer
        shadow 
        transition-all 
        duration-100
        ease-in-out
        active:scale-95
        active:shadow-inner
        "
      >
        {isSubmitting ? "enviando" : "enviar"}
      </button>
    </form>
  );
}
