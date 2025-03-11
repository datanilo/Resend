<div align="center">

# APLICACIÓN PARA LA DISTRIBUICIÓN DE CONTENIDO MEDIANTE ENVÍO DE CORREOS

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Bun](https://img.shields.io/badge/Bun-1.0-f9f1e1?style=for-the-badge&logo=bun)](https://bun.sh/)
[![Resend](https://img.shields.io/badge/Resend-EMAIL-000000?style=for-the-badge&logo=resend)](https://resend.com/)
[![Redis](https://img.shields.io/badge/Redis-Enabled-DC382D?style=for-the-badge&logo=redis)](https://redis.io/)


Esta aplicación, desarrollada con Next.js, integra diversas tecnologías para gestionar la distribución de contenido de manera eficiente mediante envío de correos electrónicos automatizados utilizando el servicio de Resend - Email for
developers.

---
  Link del proyecto desplegado

  🔗 <https://resend.datanilo.tech>
</div>

-----



## ✨ Características

- 🌩️ **Serverless Function** - Vercel function serverless para operaciones en la nube sin necesidad de gestionar servidores
- 📱 **Responsive** - Interfaz adaptativa para todo tipo de dispositivos.
- 🐇 **Bun** - para un desarrollo más rápido

  

## 🛠️ Stack

### Core

- ⚡ **Next.js** - Framework de React para construir aplicaciones web escalables y dinámicas.
- 📘 **TypeScript** - Tipado estático que ayuda a prevenir errores y mejora la calidad y mantenibilidad del código.
- 🎨 **TailwindCSS** - Estilos modernos.
- 📬 **Resend** - Servicio de Email para el envío seguro de correos electrónicos.
- 💾 **Redis** - Base de datos en memoria para controlar y limitar el envío diario de correos.

### Componentes UI

- 💅 **Shadcn UI** - Atractivos componentes de UI
- 📱 **Lucide React** - Biblioteca de Íconos


----


## 💻 Estructura del Proyecto

  ```
  ├── app/
  │    │
  │    └── api/               
  │          └── sendEmail    - Endpoint para envío de correos mediante el cliente AWS
  │          └── redisCounter - Endpoint para devolver el contador de correos diarios
  │
  ├── components/             - Componentes React reutilizables (tabla, formulario, botones etc.)
  │
  ├── lib/                    
  │    └── emailTemplate.ts   - Plantilla HTML del correo enviado
  │    └── emailLimiter.ts    - Limitador diario de correos diarios enviados
  │
  └── data/                   - Datos de la tabla
  
  ```
