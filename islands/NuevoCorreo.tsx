import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";


const FormMail: FunctionComponent = () => {

    const [email, setEmail] = useState<string>("");
    const [asunto, setAsunto] = useState<string>("");
    const [cuerpo, setCuerpo] = useState<string>("");
    const [error, setError] = useState<string>("");

    function updateContactsList(email, asunto, cuerpo) {

        // Comprobar asunto, correo y cuerpo es valida, si no es valida, mostrar mensaje de error
        if (asunto === "" || email === "" || cuerpo === "") setError("Tienes que rellenar todos los campos del formulario");
            if (email === "") {
                setError("El correo electrónico no es válido");

            } else if (asunto.length < 5) {
                setError("El asunto debe tener al menos 5 caracteres");

            } else if (cuerpo.length < 1) {
                setError("El cuerpo del mensaje debe tener al menos 1 caracteres");
            }
        
        // Si no hay error, actualizar la cookie auth
        else {
            const email = { email: email, asunto: asunto, cuerpo: cuerpo };

            const cookies = document.cookie.split("; ")
            // Recuèra la cookie "emails"
            const emails = cookies.find((cookie) => cookie.startsWith("emails="))
            // Recupera la cookie "auth"
            const auth = cookies.find((cookie) => cookie.startsWith("auth="))
            // Si existe la cookie "emails", añade el email a la lista de emails
            if (emails) {
                // Parseamos el valor de la cookie "emails", para ello separamos el string por el caracter "="
                // y obtenemos el segundo elemento del array
                const emailsArray = JSON.parse(emails.split("=")[1]) ?? []
                // Añadimos el email al array de emails
                emailsArray.push(email)
                // Actualizamos la cookie "emails" con el nuevo array de emails, nos aseguramos de no sobreescribir
                // la cookie "auth"
                document.cookie = `emails=${JSON.stringify(emailsArray)}; path=/; ${auth ? auth : ""}`
            } else {
                // Si no existe la cookie "emails", creamos una nueva cookie con el email
                // y nos aseguramos de no sobreescribir la cookie "auth"
                document.cookie = `emails=${JSON.stringify([email])}; path=/ ${auth ? auth : ""}`
            }
            document.location.href = "/client/home";
        }
    }

    return (

        <>
            <div class="center">

                <form class="formulario"  >
                    <p>Send new mail</p>
                    <input type="email" name="email" placeholder="Email" value={email} onInput={(event) => {
                        setEmail(event.currentTarget.value); }} 
                    />
                    <input type="text" name="asunto" placeholder="Asunto" value={asunto} onInput={(event) => {
                        setAsunto(event.currentTarget.value); }} 
                    />
                    <input type="text" name="cuerpo" placeholder="Cuerpo" value={cuerpo} onInput={(event) => {
                        setCuerpo(event.currentTarget.value); }} 
                    />

                    <button class="boton" type="submit" onClick={
                        (event) => {
                            event.preventDefault();
                            updateContactsList(email, asunto, cuerpo);
                        }
                    }>Send Mail</button>

                </form>

            </div>
        </>)
}

export default FormMail;