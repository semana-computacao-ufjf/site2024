import { EmailForm } from "@/schema/email.form";
import TwitchResetPasswordEmail from "../../../components/contact/email-template";
import { Resend } from "resend";

export async function POST(request: Request): Promise<Response> {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const body: EmailForm = await request.json();

    const receiverEmail = process.env.RESEND_EMAIL_CORE;

    if (!receiverEmail) {
      throw new Error("Email core not found");
    }

    const domain = process.env.RESEND_EMAIL_DOMAIN;

    if (!domain) {
      throw new Error("Email domain not found");
    }

    const { data, error } = await resend.emails.send({
      from: `Acme <no-reply@${domain}>`,
      to: [receiverEmail],
      subject: body.subject,
      react: TwitchResetPasswordEmail({
        emailContent: body.content,
        subject: body.subject,
        userEmail: body.email,
      }) as React.ReactElement,
    });

    // await resend.emails.send({
    //   from: `Acme <no-reply@${process.env.RESEND_EMAIL_DOMAIN}>`,
    //   to: [body.email],
    //   subject: "Confirmação de envio",
    //   react: TwitchResetPasswordEmail({
    //     emailContent: `Seu email foi enviado com sucesso para ${body.email}`,
    //     subject: "Confirmação de envio",
    //     userEmail: `no-reply@${process.env.RESEND_EMAIL_DOMAIN}`,
    //   }) as React.ReactElement,
    // });

    if (error) {
      console.error(error);
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
