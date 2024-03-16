import { useContext, useState } from "react"
import axios from "axios"


import { Title } from "../Title"
import { FormButton } from "../FormButton"
import { GlobalContext } from "../../context/GlobalContext"
import { RequestsCards } from "../RequestsCards"


export const ViewAllRequests = () => {

    const globalContext = useContext(GlobalContext)
    const url = globalContext.url

    const [listOfRequests, setListOfRequests] = useState([])

    const getEmployees = async () => {
        try{
            globalContext.setLoading(true)
            const response = await axios.get(`${url}/servicios/get`)
            console.log(response.data)
            setListOfRequests(response.data)
            globalContext.setLoading(false)
        }catch {
            globalContext.setLoading(false)
        }

    }

    return(
        <section>
            <Title text="VER TODOS LOS EMPLEADOS" />
            <p className="mt-5">Aqui puedes ver el listado completo de empleados solo con un boton:</p>
            <div className="mt-5" onClick={() => getEmployees() }>
                <FormButton text='Obtener Empleados' />
            </div>
            <div className="mt-2 flex  items-center flex-col">
                {
                    listOfRequests.map((item, index)=>(
                        <RequestsCards key={index} codigo={item.codigo} descripcion={item.descripcion} resumen={item.resumen} empleado={item.empleado} />
                    ))
                }
            </div>
    </section>
    )
}