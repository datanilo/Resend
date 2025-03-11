const htmlCssTemplate = `
<html>
  <head>
    <style>
      body {
        font-family: Arial, sans-serif;
        line-height: 1.6;
        color: #444;
      }
      h1, h2, h3 {
        color: #0056b3;
      }
      .container {
        width: 90%;
        margin: 0 auto;
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 10px;
        background-color: #f9f9f9;
      }
      .header, .footer {
        text-align: center;
        padding: 10px 0;
      }
      .content {
        margin: 20px 0;
      }
      .footer {
        font-size: 0.8em;
        color: #777;
      }
    </style>
  </head>
  <body>
    <div class="container">
      <div class="header">
        <h2>Introducción a HTML y CSS</h1>
      </div>
      <div class="content">
        <h3>¿Qué es HTML?</h3>
        <p>HTML, que significa HyperText Markup Language, es un lenguaje de marcado. Esto quiere decir que se utiliza para estructurar el contenido de una página web. Con HTML se definen elementos como títulos, párrafos, listas, imágenes y enlaces. Recuerda que HTML no es un lenguaje de programación; su función es organizar y dar sentido a la información.</p>
        
        <h3>¿Qué es CSS?</h3>
        <p>CSS (Cascading Style Sheets) es un lenguaje de estilos que se utiliza para describir la presentación de un documento escrito en HTML. CSS controla el diseño visual, incluyendo colores, fuentes, márgenes, y la disposición de los elementos en la página.</p>
        
        <h3>Historia y Evolución</h3>
        <p>HTML fue desarrollado a principios de los años 90 por Tim Berners-Lee, el inventor de la World Wide Web. Desde entonces, ha evolucionado significativamente, con la versión más reciente siendo HTML5, que introduce nuevas etiquetas y funcionalidades para mejorar la semántica y la interactividad.</p>
        <p>CSS fue creado por Håkon Wium Lie en 1996 para separar el contenido de la presentación, permitiendo un diseño más flexible y mantenible. CSS ha evolucionado para incluir características avanzadas como animaciones, transiciones y diseño responsivo, su versión más reciente es CSS4.</p>
        
        <h3>Frameworks y Herramientas</h3>
        <p>
          Aunque HTML y CSS son la base de la web, existen numerosos frameworks y librerías que facilitan y potencian su uso:
        </p>
        <ul>
          <li><strong>Bootstrap:</strong> Un framework de CSS que ofrece componentes preconstruidos y un sistema de grillas para desarrollar sitios responsivos rápidamente.</li>
          <li><strong>Tailwind CSS:</strong> Una librería de utilidades que permite diseñar interfaces de forma altamente personalizable y sin salir del HTML.</li>
          <li><strong>Sass y Less:</strong> Preprocesadores de CSS que añaden funcionalidades como variables, anidamiento y mixins, facilitando la escritura y mantenimiento de estilos.</li>
        </ul>
        <p>
          Además, en el contexto de frameworks de JavaScript como React, Vue o Angular, HTML y CSS juegan un papel fundamental, ya que definen la estructura y el estilo de los componentes que forman las interfaces de usuario.
        </p>        
        <h3>Actualidad</h3>
        <p>Hoy en día, HTML y CSS siguen siendo esenciales en el desarrollo web. HTML5 y CSS4 han introducido nuevas capacidades que permiten crear experiencias de usuario más ricas e interactivas. Además, con el auge del diseño responsivo, CSS se ha vuelto crucial para asegurar que los sitios web se vean bien en una variedad de dispositivos y tamaños de pantalla.</p>
      </div>
      <div class="footer">
        <p>&copy; 2025 Brayan Danilo Méndez Barreto</p>
      </div>
    </div>
  </body>
</html>
`;

export default htmlCssTemplate;
