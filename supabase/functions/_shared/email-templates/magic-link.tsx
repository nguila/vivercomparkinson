/// <reference types="npm:@types/react@18.3.1" />

import * as React from 'npm:react@18.3.1'

import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Text,
} from 'npm:@react-email/components@0.0.22'

interface MagicLinkEmailProps {
  siteName: string
  confirmationUrl: string
}

export const MagicLinkEmail = ({
  siteName,
  confirmationUrl,
}: MagicLinkEmailProps) => (
  <Html lang="pt" dir="ltr">
    <Head />
    <Preview>O seu link de acesso — {siteName}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Text style={brand}>🌿 {siteName}</Text>
        <Heading style={h1}>O seu link de acesso</Heading>
        <Text style={text}>
          Clique no botão abaixo para aceder ao {siteName}. Este link expira em breve.
        </Text>
        <Button style={button} href={confirmationUrl}>
          Aceder
        </Button>
        <Text style={footer}>
          Se não solicitou este link, pode ignorar este email com segurança.
        </Text>
      </Container>
    </Body>
  </Html>
)

export default MagicLinkEmail

const main = { backgroundColor: '#ffffff', fontFamily: 'Georgia, "Times New Roman", serif' }
const container = { padding: '30px 25px', maxWidth: '480px', margin: '0 auto' }
const brand = { fontSize: '18px', fontWeight: 'bold' as const, color: 'hsl(175, 35%, 35%)', margin: '0 0 24px' }
const h1 = { fontSize: '24px', fontWeight: 'bold' as const, color: 'hsl(200, 25%, 15%)', margin: '0 0 20px' }
const text = { fontSize: '15px', color: 'hsl(200, 10%, 45%)', lineHeight: '1.6', margin: '0 0 24px' }
const button = { backgroundColor: 'hsl(175, 35%, 35%)', color: 'hsl(180, 20%, 97%)', fontSize: '15px', borderRadius: '16px', padding: '14px 24px', textDecoration: 'none', fontWeight: 'bold' as const }
const footer = { fontSize: '12px', color: '#999999', margin: '30px 0 0' }
