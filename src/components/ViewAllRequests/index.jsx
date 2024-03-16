import { useContext, useState } from "react"
import axios from "axios"


import { Title } from "../Title"
import { FormButton } from "../FormButton"
import { GlobalContext } from "../../context/GlobalContext"
import { RequestsCards } from "../RequestsCards"

// uses axios to get all the requests in db
// save the info in useContext array to render that mapping that and render with RequestsCards
export const ViewAllRequests = () => {

    const globalContext = useContext(GlobalContext)
    const url = globalContext.url

    const [listOfRequests, setListOfRequests] = useState([])

    const getRequests = async () => {
        try{
            globalContext.setLoading(true)
            const response = await axios.get(`${url}/solicitudes/get`)
            console.log(response.data)
            setListOfRequests(response.data)
            globalContext.setLoading(false)
        }catch {
            globalContext.setLoading(false)
        }

    }

    return(
        <section>
            <Title text="VER TODAS LAS SOLICITUDES" />
            <p className="mt-5">Aqui puedes ver el listado completo de las solicitudes solo con un boton:</p>
            <div className="mt-5" onClick={() => getRequests() }>
                <FormButton text='Obtener Solicitudes' />
            </div>
            <div className="mt-2 flex  items-center flex-col">
                {
                    listOfRequests.map((item, index)=>(
                        <RequestsCards key={index} id={item.id} codigo={item.codigo} descripcion={item.descripcion} resumen={item.resumen} empleado={item.Empleado.nombre} />
                    ))
                }
            </div>
    </section>
    )
}