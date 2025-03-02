import { TableComponent } from "@/components/Table"
import { FormComponent } from "@/components/Form"

export default function Home() {
  return (
    <div className="container mx-auto px-4 md:px-8 lg:px-48">
      <header className="mb-8 text-center">
        <h1 className="mt-10 text-2xl font-semibold tracking-tight md:text-3xl">Etiquetas HTML</h1>
        <p className="mt-6 text-md text-gray-950 text-justify">HTML es el estándar fundamental para la construcción de páginas web. Sus etiquetas permiten definir la estructura y el significado del contenido, organizando elementos como texto, imágenes, enlaces y más. A continuación, encontrarás una tabla con todas las etiquetas HTML y su función dentro del desarrollo web.</p>
      </header>

      <div className="grid grid-cols-1 gap-8 mb-20">
        <TableComponent />
        <FormComponent />
      </div>
    </div>
  );
}
