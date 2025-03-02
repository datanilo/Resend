<div align="center">

# APLICACIÓN PARA LA DISTRIBUICIÓN DE CONTENIDO MEDIANTE ENVÍO DE CORREOS

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![Bun](https://img.shields.io/badge/Bun-1.0-f9f1e1?style=for-the-badge&logo=bun)](https://bun.sh/)
[![AWS SES](https://img.shields.io/badge/AWS-SES?logo=amazonsimpleemailservice&logoColor=fff&label=Simple%20Email%20Service&labelColor=DD344C&color=555&style=for-the-badge)](https://aws.amazon.com/ses/)
[![Redis](https://img.shields.io/badge/Redis-Enabled-DC382D?style=for-the-badge&logo=redis)](https://redis.io/)


Esta aplicación, desarrollada con Next.js, integra diversas tecnologías para gestionar la distribución de contenido de manera eficiente mediante envío de correos electrónicos automatizados utilizando el servicio de Amazon Single Email Service.

---
  Link del proyecto desplegado

  🔗 <https://aws-ese.datanilo.tech/>
</div>

-----



## ✨ Características

- 🌩️ **Serverless Function** - Función serverless para operaciones en la nube sin necesidad de gestionar servidores
- 📱 **Responsive** - Interfaz adaptativa para todo tipo de dispositivos.
- 🐇 **Bun** - para un desarrollo más rápido

  

## 🛠️ Stack

### Core

- ⚡ **Next.js** - Framework de React para construir aplicaciones web escalables y dinámicas.
- 📘 **TypeScript** - Tipado estático que ayuda a prevenir errores y mejora la calidad y mantenibilidad del código.
- 🎨 **TailwindCSS** - Estilos modernos.
- 📬 **AWS SES** - Servicio de Amazon para el envío seguro de correos electrónicos.
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
  │          └── debugRedis   - Endpoint para devolver el contador de correos diarios
  │
  ├── components/             - Componentes React reutilizables (tabla, formulario, botones etc.)
  │
  ├── lib/                    
  │    └── emailTemplate.ts   - Plantilla HTML del correo enviado
  │    └── emailLimiter.ts    - Limitador diario de correos      
  │
  └── data/                   - Datos de la tabla
  
  ```
