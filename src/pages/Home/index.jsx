import { Title } from "../../components/Title"


// His element just render a little of text to understand the page
const Home = () => {

    return(
        <div>
            <Title text='Bienvenido a la puesta en vivo del reto de programación!' />
            <p className="mt-5 font-semibold">En la pestaña de empleados puedes: </p>
            <ul className="mt-5" >
                <li>
                    Crear un empleado
                </li>
                <li>
                    Ver todos los empelados
                </li>
                <li>
                    Filtrar empleados por el nombre
                </li>
            </ul>
            <p className="mt-5 font-semibold">En la pestaña de solicitudes puedes: </p>
            <ul className="mt-5" >
                <li>
                    Crear una solicitud
                </li>
                <li>
                    Ver todas las solicitudes
                </li>
                <li>
                    Eliminar una solicitud previamente identificada
                </li>
            </ul>
        </div>
    )
}

export default Home