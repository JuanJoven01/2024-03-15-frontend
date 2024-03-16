import axios from "axios"

import { Title } from "../Title"
import { FormButton } from "../FormButton"
import { GlobalContext } from "../../context/GlobalContext"
import { useContext, useRef } from "react"
// Element to creane a new request, use useRef to get the values in the form and send between the body via axios to the backend 
// uses too axios to get an uid from the back and uses that to create the request
export const CreateRequest = () => {

    const getUid  = async () => {
        try{
            globalContext.setLoading(true)
            const response = await axios.get(`${url}/solicitudes/get/uid`)
            console.log(response)
            
            globalContext.setLoading(false)
            codigoRef.current.value = response.data.uid
        }catch {
            globalContext.setLoading(false)
        }
        


    }

    const codigoRef = useRef(null)
    const descropcionRef = useRef(null)
    const resumenRef = useRef(null)
    const idEmpleadoRef = useRef(null)


    const globalContext = useContext(GlobalContext)
    const url = globalContext.url

    

    const postRequest = async () => {
        try{
            globalContext.setLoading(true)
            
            const body = {
            
                codigo: codigoRef.current.value,
                descripcion: descropcionRef.current.value,
                resumen: resumenRef.current.value,
                id_empleado: idEmpleadoRef.current.value
                
            }
        
            const response = await axios.post(`${url}/solicitudes/new`, body)
            console.log(response)
            globalContext.setLoading(false)
        }catch {
            globalContext.setLoading(false)
        }
        

    }

    return(
        <section>
      <Title text="CREAR UNA NUEVA SOLICITUD" />
      <p className="mt-5">Aqui puedes crear una nueva solicitud, todos los campos son obligatorios, UID generará un codigo único, para conocer el id del empleado lo puede hacer buscando en la pestaña de empleados:</p>
      <form action="" className="flex flex-col my-5 border-2 max-w-md mx-auto p-5">
        <label htmlFor="codigo" className="flex py-2">
                Codigo:
            <input defaultValue={''} ref={codigoRef} className="mx-5 grow border-[1.5px] rounded-md px-2" type="text" />
            <div onClick={()=>getUid()} >
                <FormButton text='UID' />
            </div>
        </label>
        <label htmlFor="descripcion" className="flex py-2">
                Descripcion:
            <input  ref={descropcionRef} className="mx-5 grow border-[1.5px] rounded-md px-2" type="text" />
        </label>
        <label htmlFor="resumen" className="flex py-2">
                Resumen:
            <input ref={resumenRef} className="mx-5 grow border-[1.5px] rounded-md px-2" type="text" />
        </label>
        <label htmlFor="id_empleado" className="flex py-2">
                ID Empleado:
            <input ref={idEmpleadoRef} className="mx-5 grow border-[1.5px] rounded-md px-2" type="number" />
        </label>
        <div onClick={() => postRequest()} >
            <FormButton text='Crear Solicitud' />
        </div>
    
      </form>
    </section>
    )
}