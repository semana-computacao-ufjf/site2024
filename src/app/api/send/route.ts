import { EmailForm } from "@/schema/email.form";
import TwitchResetPasswordEmail from "../../../components/contact/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request): Promise<Response> {
  try {
    const body: EmailForm = await request.json();
    const { data, error } = await resend.emails.send({
      from: `Acme <${body.email}>`,
      to: [
        process.env.RESEND_EMAIL_CORE
          ? process.env.RESEND_EMAIL_CORE
          : "delivered@resend.dev",
      ],
      subject: body.subject,
      react: TwitchResetPasswordEmail({
        emailContent: body.content,
        subject: body.subject,
        userEmail: body.email,
      }) as React.ReactElement,
    });

    const confirmationEmail = await resend.emails.send({
      from: `Acme <no-reply@${process.env.RESEND_EMAIL_DOMAIN}>`,
      to: [body.email],
      subject: "Confirmação de envio",
      react: TwitchResetPasswordEmail({
        emailContent: `Seu email foi enviado com sucesso para ${body.email}`,
        subject: "Confirmação de envio",
        userEmail: `no-reply@${process.env.RESEND_EMAIL_DOMAIN}`,
      }) as React.ReactElement,
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
