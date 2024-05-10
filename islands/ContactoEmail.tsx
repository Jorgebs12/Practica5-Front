import { FunctionComponent } from "preact";
import { useState } from "preact/hooks";
import { Agenda } from "../types.ts"


const FormClient: FunctionComponent = () => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [error, setError] = useState<string>("");

    function updateContactsList(password, email) {

        if (password === "" || email === "") {
            
            setError("Tienes que rellenar todos los campos del formulario");

        }else {
            // comprobar contraseña y correo es valida
            // si no es valida, mostrar mensaje de error
            // si no hay error, actualizar la cookie auth y hacemos un redirect a /client/home
            const user = { email: email, password: password };
            document.cookie = `auth=${JSON.stringify(user)}; path=/`;
        }
    }

    return (

        <>
            <div class="center">

                <form class="formulario"  >
                    <p>Add new contact</p>
                    <input type="email" name="email" placeholder="Email" value={email} onInput={(event) => {
                        setEmail(event.currentTarget.value); }} 
                    />
                    <input type="password" name="password" placeholder="password" value={password} onInput={(event) => {
                        setPassword(event.currentTarget.value); }} 
                    />

                    <button class="boton" type="submit" action="/client/home" onClick={
                        (event) => {
                            event.preventDefault();
                            updateContactsList(password, email);
                        }
                       
                    }>Add Contact</button>

                </form>

            </div>

            <div >
                <p>{error}</p>
            </div >
        </>)
}

export default FormClient;