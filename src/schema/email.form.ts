import { z } from "zod";

export const emailFormSchema = z.object({
  subject: z
    .string({
      message: "Insira um assunto",
    })
    .min(5, {
      message: "O assunto deve ter no mínimo 5 caracteres",
    }),
  content: z.string().max(2000, {
    message: "O conteúdo deve ter no máximo 2000 caracteres",
  }),
  email: z
    .string({
      message: "Insira um email",
    })
    .email({
      message: "Insira um email válido",
    }),
});

export type EmailForm = z.infer<typeof emailFormSchema>;
