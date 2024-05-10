import {FunctionComponent} from "preact";

const Menu: FunctionComponent = () => {
    return (
        <div>
            <div class="center">
                <div class="menu"> 
                    <a class="link" href ="/client/home"> Home </a>
                    <a class="link" href ="/auth"> Cerrar Sesion </a>
                </div>
            </div> 
            <a class="redactar" href ="/client/new"> New Mail </a>
        </div>
    )
}

export default Menu;