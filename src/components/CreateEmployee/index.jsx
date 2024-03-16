import axios from "axios"

import { Title } from "../Title"
import { FormButton } from "../FormButton"
import { GlobalContext } from "../../context/GlobalContext"
import { useContext, useRef } from "react"

// Element to creane a new employee, use useRef to get the values in the form and send between the body via axios to the backend 
export const CreateEmployee = () => {

    const globalContext = useContext(GlobalContext)
    const url = globalContext.url

    const fechaIngresoRef = useRef(null)
    const nombreRef = useRef(null)
    const salarioRef = useRef(null)

    const createEmployee = async () => {
        try{
            globalContext.setLoading(true)
            const body = {
            
            fecha_ingreso: fechaIngresoRef.current.value,
            nombre: nombreRef.current.value,
            salario: salarioRef.current.value
            
            }
            const response = await axios.post(`${url}/empleados/new`, body)
            console.log(response)
            globalContext.setLoading(false)
        }catch {
            globalContext.setLoading(false)
        }
        

    }

    return(
        <section>
      <Title text="CREAR UN NUEVO EMPLEADO" />
      <p className="mt-5">Aqui puedes crear un nuevo empleado solo llenando el formulario:</p>
      <form action="" className="flex flex-col my-5 border-2 max-w-md mx-auto p-5">
        <label htmlFor="fecha_ingreso" className="flex py-2">
                Fecha Ingreso:
            <input ref={fechaIngresoRef} className="mx-5 grow border-[1.5px] rounded-md px-2" type="date" />
        </label>
        <label htmlFor="nombre" className="flex py-2">
                Nombre:
            <input  ref={nombreRef} className="mx-5 grow border-[1.5px] rounded-md px-2" type="text" />
        </label>
        <label htmlFor="salario" className="flex py-2">
                Salario:
            <input ref={salarioRef} className="mx-5 grow border-[1.5px] rounded-md px-2" type="number" />
        </label>
        <div onClick={() => createEmployee()} >
            <FormButton text='Crear Empleado' />
        </div>
    
      </form>
    </section>
    )
}