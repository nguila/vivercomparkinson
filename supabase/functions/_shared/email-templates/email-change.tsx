/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'

interface EmailChangeEmailProps {
  siteName: string
  email: string
  newEmail: string
  confirmationUrl: string
}

export const EmailChangeEmail = ({
  siteName,
  email,
  newEmail,
  confirmationUrl,
}: EmailChangeEmailProps) => (
  <Html lang="pt" dir="ltr">
    <Head />
    <Preview>Confirme a alteração de email — {siteName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={brand}>🌿 {siteName}</Text>
        <Heading style={h1}>Alteração de email</Heading>
        <Text style={text}>
          Solicitou a alteração do seu email no {siteName} de{' '}
          <Link href={`mailto:${email}`} style={link}>{email}</Link>{' '}
          para{' '}
          <Link href={`mailto:${newEmail}`} style={link}>{newEmail}</Link>.
        </Text>
        <Text style={text}>Clique no botão abaixo para confirmar:</Text>
        <Button style={button} href={confirmationUrl}>
          Confirmar Alteração
        </Button>
        <Text style={footer}>
          Se não solicitou esta alteração, proteja a sua conta imediatamente.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default EmailChangeEmail

const main = { backgroundColor: '#ffffff', fontFamily: 'Georgia, "Times New Roman", serif' }
const container = { padding: '30px 25px', maxWidth: '480px', margin: '0 auto' }
const brand = { fontSize: '18px', fontWeight: 'bold' as const, color: 'hsl(175, 35%, 35%)', margin: '0 0 24px' }
const h1 = { fontSize: '24px', fontWeight: 'bold' as const, color: 'hsl(200, 25%, 15%)', margin: '0 0 20px' }
const text = { fontSize: '15px', color: 'hsl(200, 10%, 45%)', lineHeight: '1.6', margin: '0 0 24px' }
const link = { color: 'hsl(175, 35%, 35%)', textDecoration: 'underline' }
const button = { backgroundColor: 'hsl(175, 35%, 35%)', color: 'hsl(180, 20%, 97%)', fontSize: '15px', borderRadius: '16px', padding: '14px 24px', textDecoration: 'none', fontWeight: 'bold' as const }
const footer = { fontSize: '12px', color: '#999999', margin: '30px 0 0' }
