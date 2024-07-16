import * as React from "react";

interface EmailTemplateProps {
  subject: string;
  content: string;
  userEmail: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  subject,
  content,
  userEmail,
}) => (
  <div>
    <h1>Enviado por {userEmail}</h1>
    <h1>{subject}</h1>
    <p>{content}</p>
  </div>
);
