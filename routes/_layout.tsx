import { PageProps} from"$fresh/server.ts";
import Menu from "../components/Menu.tsx";


export default function Layout({ Component, state }: PageProps) {

    return (
    <div class="fondo">
        <Menu
        />
            <h1 class="titulo"> My Mail </h1>
            
        <Component
        />
    </div>
    )
}

