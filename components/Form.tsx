"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm } from "react-hook-form";
import { toast } from 'sonner';

export function FormComponent() {
  const form = useForm({
    defaultValues: { name: "", email: "" }
  });

  type FormData = {
    name: string;
    email: string;
  };

  const onSubmit = async (data: FormData) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      });

      if (response.ok) {
        toast.success('Información enviada correctamente, revisa tu correo');
        form.reset();
      } else {
        const errorData = await response.json();
        toast.error(`${errorData.error}`);
        form.reset();
      }
    } catch (error) {
      console.error('Error en el fetch:', error);
      toast.error('Error al enviar el formulario');
      form.reset();
    }
  };

  return (
    <Card className="py-6">
      <CardHeader>
        <CardTitle>Solicitar más información</CardTitle>
        <CardDescription>
          Completa el formulario para recibir más recursos sobre HTML y CSS
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nombre</FormLabel>
                  <FormControl>
                    <Input placeholder="Tu nombre" {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Correo Electrónico</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="Tu correo" {...field} required />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full">
              Enviar
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
