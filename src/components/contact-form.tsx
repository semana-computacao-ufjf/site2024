"use client";

import { EmailForm, emailFormSchema } from "@/schema/email.form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  // prettier-ignore
  const { handleSubmit, register, reset, setValue, formState: { errors } } = useForm<EmailForm>({
    resolver: zodResolver(emailFormSchema),
  });

  const onSubmit = async (data: EmailForm) => {
    try {
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
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  const requestLayout =
    "border-2 border-gray-300 bg-blue-700/30 p-4 flex justify-between w-full rounded-[8px]";
  const inputLayout =
    "bg-transparent border-none w-full placeholder:text-black focus:outline-none";

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white h-full text-gray-900 lg:w-[90%]  max-w-full font-inter font-medium text-xl border-2 border-purple-700 flex flex-col p-6 rounded-[12px] space-y-[10px]"
    >
      <div className="flex flex-col flex-grow space-y-[10px]">
        <div className="space-y-[8px]">
          <h1>Assunto</h1>
          <div className={requestLayout}>
            <input
              type="text"
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
              className={inputLayout}
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
            className={`${requestLayout} placeholder:text-black min-h-[200px] resize-none flex-grow`}
            placeholder="Conteúdo"
            {...register("content")}
          />
          <label className="text-red-500">{errors.content?.message}</label>
        </div>
      </div>
      <div className="flex justify-center mt-4">
        <button
          type="submit"
          className="text-white lg:text-lg md:text-xl xl:w-5/12 lg:w-7/12 bg-purple-900 py-2 px-6 rounded-xl hover:bg-purple-950"
        >
          Entrar em contato
        </button>
      </div>
    </form>
  );
}
