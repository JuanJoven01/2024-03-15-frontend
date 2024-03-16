import { useContext, useRef, useState } from "react"
import axios from "axios"


import { Title } from "../Title"
import { FormButton } from "../FormButton"
import { GlobalContext } from "../../context/GlobalContext"
import { EmployeesCards } from "../EmployeesCards"

//uses useRef to get the input when onClick button, 
// uses axios to execute a query in db to get the users that coincide with the name in inoput
export const EmployeesPerName = () => {

    const globalContext = useContext(GlobalContext)
    const url = globalContext.url

    const [listOfEmployeesByName, setListOfEmployeesByName] = useState([])

    const finderNameRef = useRef(null)

    const getEmployees = async () => {
        try{
            globalContext.setLoading(true)
            const response = await axios.get(`${url}/empleados/get/by-name?nombre=${finderNameRef.current.value}`)
            console.log(response.data)
            setListOfEmployeesByName(response.data)
            globalContext.setLoading(false)
        }catch {
            globalContext.setLoading(false)
        }

    }

    return(
        <section>
            <Title text="VER TODOS LOS EMPLEADOS" />
            <p className="mt-5">Aqui puedes ver el listado completo de empleados solo con un boton:</p>
            <div className="mt-5">
                <form action="">
                    <label htmlFor="">
                        Inserte Nombre:
                        <input ref={finderNameRef} type="text" className=" border-[1.5px] mx-2" />
                    </label>
                    <div onClick={() => getEmployees() }>
                        <FormButton text='Obtener Empleados Por Nombre' />
                    </div>
                    
                </form>
                
            </div>
            <div className="mt-2 flex  items-center flex-col">
                {
                    listOfEmployeesByName.map((item, index)=>(
                        <EmployeesCards key={index} nombre={item.nombre} id={item.id} fecha={item.fecha_ingreso} salario={item.salario} />
                    ))
                }
            </div>
            
        
      
      
    </section>
    )
}