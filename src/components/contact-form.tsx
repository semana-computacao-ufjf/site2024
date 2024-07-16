"use client";

import { EmailForm, emailFormSchema } from "@/schema/email.form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export default function ContactForm() {
  // prettier-ignore
  const { handleSubmit, register, reset, setValue, formState : {errors}} = useForm<EmailForm>({
    resolver: zodResolver(emailFormSchema),
  });

  const onSubmit = async (data: EmailForm) => {
    try {
      const respose = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!respose.ok) {
        console.error(respose.statusText);
        throw new Error("Erro ao enviar email");
      }
      reset();
    } catch (error) {
      console.error(error);
    }
  };

  const inputClassName =
    "border-2 border-gray-300 bg-blue-700/30 p-4 flex justify-between w-full rounded-[8px]";
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="bg-white text-gray-900 text-xl border-2 border-purple-500 flex-col p-6 rounded-[12px] space-y-[10px]"
    >
      <div className="space-y-[8px] ">
        <h1>Assunto</h1>
        <div className={inputClassName}>
          <input
            type="text"
            placeholder="Assunto"
            className="bg-transparent border-none w-full focus:outline-none"
            {...register("subject")}
          />
          <button type="button" onClick={() => setValue("subject", "")}>
            X
          </button>
        </div>
        <label className="text-red-500">{errors.subject?.message}</label>
      </div>
      <div className="space-y-[8px] justif">
        <h1>Email</h1>
        <div className={inputClassName}>
          <input
            type="email"
            placeholder="exemplo@codejr.com.br"
            className="bg-transparent border-none w-full focus:outline-none"
            {...register("email")}
          />
          <button type="button" onClick={() => setValue("email", "")}>
            X
          </button>
        </div>
        <label className="text-red-500">{errors.email?.message}</label>
      </div>
      <div className="space-y-[8px]">
        <h1>Mensagem</h1>
        <textarea
          className={`${inputClassName} h-[200px]`}
          placeholder="Conteúdo"
          {...register("content")}
        />

        <label className="text-red-500">{errors.content?.message}</label>
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          className="text-white bg-purple-500 p-2 rounded-[8px] hover:bg-purple-700"
        >
          Enviar
        </button>
      </div>
    </form>
  );
}
