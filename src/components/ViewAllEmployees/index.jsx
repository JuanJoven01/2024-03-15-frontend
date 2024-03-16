import { useContext, useState } from "react"
import axios from "axios"


import { Title } from "../Title"
import { FormButton } from "../FormButton"
import { GlobalContext } from "../../context/GlobalContext"
import { EmployeesCards } from "../EmployeesCards"

// uses axios to get all the eployees in db
// save the info in useContext array to render that mapping that and render with EmployeesCard
export const ViewAllEmployees = () => {

    const globalContext = useContext(GlobalContext)
    const url = globalContext.url

    const [listOfEmployees, setListOfEmployees] = useState([])

    const getEmployees = async () => {
        try{
            globalContext.setLoading(true)
            const response = await axios.get(`${url}/empleados/all`)
            console.log(response.data)
            setListOfEmployees(response.data)
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
                    listOfEmployees.map((item, index)=>(
                        <EmployeesCards key={index} nombre={item.nombre} id={item.id} fecha={item.fecha_ingreso} salario={item.salario} />
                    ))
                }
            </div>
            
        
      
      
    </section>
    )
}