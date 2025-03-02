import { NextResponse } from 'next/server';
import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import htmlCssTemplate from '@/lib/emailTemplate';
import { canSendEmailGlobal, incrementEmailCountGlobal } from '@/lib/emailLimiter';

const sesClient = new SESClient({
  region: process.env.AWS_REGION,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!
  }
});

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!(await canSendEmailGlobal())) {
      return NextResponse.json(
        { error: 'Límite global diario alcanzado. No se pueden enviar más correos hoy.' },
        { status: 429 }
      );
    }

    const params = {
      Source: process.env.SES_SENDER_EMAIL as string,
      Destination: {
        ToAddresses: [email],
      },
      Message: {
        Subject: { Data: 'Recursos sobre HTML y CSS' },
        Body: {
          Html: { Data: htmlCssTemplate },
        },
      },
    };

    const command = new SendEmailCommand(params);
    await sesClient.send(command);

    await incrementEmailCountGlobal();

    return NextResponse.json({ message: 'Email enviado correctamente' }, { status: 200 });
  } catch (error) {
    console.error('Error al enviar email:', error);
    return NextResponse.json({ error: 'Error al enviar email' }, { status: 500 });
  }
}
