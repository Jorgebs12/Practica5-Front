import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import Axios from "npm:axios";
import { Contacto } from "../../types.ts";
import  FormMail from "../../islands/NuevoCorreo.tsx";
import { getCookies } from "$std/http/cookie.ts";


export const handler: Handlers = {
    GET: (req: Request, ctx: FreshContext<unknown, Data>) => {
      
      // Obtenemos las cookies de la petición
      const cookies = getCookies(req.headers);
      // Comprueba si existe la cookie "auth"
      const auth = cookies["auth"] 
      
      if (!auth) {
        // Si no existe el usuario, redirigimos a /auth
        return new Response(null, {
          status: 302,
          headers: {
            "Location": "/auth",
          },
        });
      }
  
      // Si existe, renderizamos el formulario de login
      return ctx.render();
  
    },
  };
  
export default function Page(props: PageProps<JobResponse>){

    return (
        <FormMail
        />       
    );
}