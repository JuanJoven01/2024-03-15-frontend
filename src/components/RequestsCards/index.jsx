import { FormButton } from "../FormButton"
import { GlobalContext } from "../../context/GlobalContext"
import { useContext } from "react"
import axios from "axios"

export const RequestsCards = (props) => {

    const globalContext = useContext(GlobalContext)

    const url = globalContext.url

    const removeRequirement = async (requestId) => {
        try{
            globalContext.setLoading(true)
            const response = await axios.delete(`${url}/solicitudes/delete?id=${requestId}`)
            console.log(response.data)
            globalContext.setLoading(false)
        }catch {
            globalContext.setLoading(false)
        }
    }

    return(
        <div className="py-2 border-t-2">
            <h1>Codigo: {props.codigo}</h1>
            <div className="flex justify-center pt-2">
                <p className="px-5">ID : {props.id}</p>
                <p className="px-5">Descripcion : {props.descripcion}</p>
                <p className="px-5">Resumen: {props.resumen}</p>
                <p className="px-5">Empleado: {props.empleado}</p>
                <div onClick={()=> removeRequirement(props.id)} >
                    <FormButton text='Eliminar' />
                </div>
                
            </div>
            
        </div>

    )

}