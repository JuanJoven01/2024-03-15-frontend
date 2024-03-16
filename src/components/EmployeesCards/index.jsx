

export const EmployeesCards = (props) => {

    return(
        <div className="py-2 border-t-2">
            <h1>Nombre: {props.nombre}</h1>
            <div className="flex justify-center pt-2">
                <p className="px-5">id : {props.id}</p>
                <p className="px-5">Fecha Ingreso: {props.fecha}</p>
                <p className="px-5">$ {props.salario}</p>
            </div>
            
        </div>

    )

}