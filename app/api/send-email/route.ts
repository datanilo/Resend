import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import htmlCssTemplate from '@/lib/emailTemplate';
import { canSendEmailGlobal, incrementEmailCountGlobal } from '@/lib/emailLimiter';

// Instancia de Resend usando tu API key
const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(request: Request): Promise<Response> {
  try {
    const { email } = await request.json();

    if (!(await canSendEmailGlobal())) {
      return NextResponse.json(
        { error: 'Límite global diario alcanzado. No se pueden enviar más correos hoy.' },
        { status: 429 }
      );
    }

    const emailResponse = await resend.emails.send({
      from: process.env.RESEND_SENDER_EMAIL!,
      to: email,
      subject: 'Recursos sobre HTML y CSS',
      html: htmlCssTemplate,
    }) as unknown as { id: string };

    await incrementEmailCountGlobal();

    return NextResponse.json(
      { message: 'Email enviado correctamente', id: emailResponse.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error al enviar email:', error);
    return NextResponse.json(
      { error: 'Error al enviar email' },
      { status: 500 }
    );
  }
}
