import { EmailForm } from "@/schema/email.form";
import TwitchResetPasswordEmail from "../../../components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request): Promise<Response> {
  try {
    const body: EmailForm = await request.json();
    const { data, error } = await resend.emails.send({
      from: "Acme <onboarding@resend.dev>",
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

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
