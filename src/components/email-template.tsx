import {
  Body,
  Container,
  Column,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Row,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface TwitchResetPasswordEmailProps {
  emailContent?: string;
  subject?: string;
  userEmail?: string;
}

export const TwitchResetPasswordEmail = ({
  emailContent,
  userEmail,
  subject,
}: TwitchResetPasswordEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>You updated the password for your Twitch account</Preview>
      <Body style={main}>
        <Container style={container}>
          {/* <Section style={logo}>
            <Img width={114} src={${baseUrl}/static/twitch-logo.png} />
          </Section> */}
          <Section style={sectionsBorders}>
            <Row>
              <Column style={sectionBorder} />
              <Column style={sectionCenter} />
              <Column style={sectionBorder} />
            </Row>
          </Section>
          <Section style={content}>
            <Text style={paragraph}>{subject}</Text>
            <Text style={paragraph}>{emailContent}</Text>
          </Section>
          <Section style={footer}>
            <Row>
              <Text style={{ textAlign: "center", color: "#706a7b" }}>
                Enviado por {userEmail}
              </Text>
            </Row>
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

TwitchResetPasswordEmail.PreviewProps = {
  username: "alanturing",
  updatedDate: new Date("June 23, 2022 4:06:00 pm UTC"),
} as TwitchResetPasswordEmailProps;

export default TwitchResetPasswordEmail;

const fontFamily = "HelveticaNeue,Helvetica,Arial,sans-serif";

const main = {
  backgroundColor: "#efeef1",
  fontFamily,
};

const paragraph = {
  lineHeight: 1.5,
  fontSize: 14,
};

const container = {
  maxWidth: "580px",
  margin: "30px auto",
  backgroundColor: "#ffffff",
};

const footer = {
  maxWidth: "580px",
  margin: "0 auto",
};

const content = {
  padding: "5px 20px 10px 20px",
};

const logo = {
  display: "flex",
  justifyContent: "center",
  alingItems: "center",
  padding: 30,
};

const sectionsBorders = {
  width: "100%",
  display: "flex",
};

const sectionBorder = {
  borderBottom: "1px solid rgb(238,238,238)",
  width: "249px",
};

const sectionCenter = {
  borderBottom: "1px solid rgb(145,71,255)",
  width: "102px",
};

const link = {
  textDecoration: "underline",
};
