import FormClient from "../islands/ContactoEmail.tsx"
import { FreshContext, Handlers, PageProps } from "$fresh/server.ts";
import { getCookies } from "$std/http/cookie.ts";
import { ContactoTodos } from "../types.ts";

type Data = {
    cart: ContactoTodos[];
};

export const handler: Handlers = {
  GET: (req: Request, ctx: FreshContext<unknown, Data>) => {
    
    // Obtenemos las cookies de la petición
    const cookies = getCookies(req.headers);
    // Comprueba si existe la cookie "auth"
    const auth = cookies["auth"] 
    
    if (auth) {

      // Si existe, redirigimos a /client/home
      return new Response(null, {
        status: 302,
        headers: {
          "Location": "/client/home",
        },
      });
    }

    // Si no existe, renderizamos el formulario de login

    return ctx.render();

  },
};


export default function Page(){
    return(
        <FormClient
        />
    )
}




