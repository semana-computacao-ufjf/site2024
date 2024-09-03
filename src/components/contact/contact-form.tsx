"use client";

import { EmailForm, emailFormSchema } from "@/schema/email.form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  const {
    handleSubmit,
    register,
    reset,
    setValue,
    formState: { errors },
  } = useForm<EmailForm>({
    resolver: zodResolver(emailFormSchema),
  });

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");
  const onSubmit = async (data: EmailForm) => {
    try {
      setError("");
      setLoading(true);
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        console.error(response.statusText);
        throw new Error("Erro ao enviar email");
      }
    } catch (error) {
      setError("Erro ao enviar email");
      console.error(error);
    }
    reset();
    setLoading(false);
  };

  const requestLayout =
    "border-2 border-gray-300 bg-[#D7D7D7] p-4  flex justify-between w-full rounded-[8px]";
  const inputLayout = "bg-transparent border-none w-full  focus:outline-none";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={
        "bg-[#2C2B2B] h-full font-inter text-[#D7D7D7] lg:w-[90%]  max-w-full md:text-xl text-sm border-2 border-[#E67119] flex flex-col md:p-6 p-4 rounded-[12px] space-y-[10px]"
      }
    >
      <div className="flex flex-col flex-grow space-y-[10px]">
        <div className="space-y-[8px]">
          <h1>Assunto</h1>
          <div className={requestLayout}>
            <input
              type="text"
              autoComplete="off"
              placeholder="Assunto"
              className={inputLayout}
              {...register("subject")}
            />
            <button type="button" onClick={() => setValue("subject", "")}>
              X
            </button>
          </div>
          <label className="text-red-500">{errors.subject?.message}</label>
        </div>
        <div className="space-y-[8px]">
          <h1>Email</h1>
          <div className={requestLayout}>
            <input
              type="email"
              placeholder="exemplo@codejr.com.br"
              className={` ${inputLayout}`}
              autoComplete="off"
              {...register("email")}
            />
            <button type="button" onClick={() => setValue("email", "")}>
              X
            </button>
          </div>
          <label className="text-red-500">{errors.email?.message}</label>
        </div>
        <div className="flex flex-col flex-grow space-y-[8px]">
          <h1>Mensagem</h1>
          <textarea
            className={`${requestLayout} md:min-h-[200px]  resize-none flex-grow`}
            placeholder="Conteúdo"
            autoComplete="off"
            {...register("content")}
          />
          <label className="text-red-500">{errors.content?.message}</label>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          type="submit"
          className={`text-black font-bold ${loading} bg-[#E67119] lg:text-lg md:text-xl xl:w-5/12 lg:w-7/12  py-2 px-6 rounded-xl button-transition`}
        >
          Entrar em contato
        </button>
      </div>
      <label className="text-red-500 text-center">{error}</label>
    </form>
  );
}
