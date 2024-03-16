import { Title } from "../../components/Title";
import { FormButton } from "../../components/FormButton";
const Employees = () => {

 
  return (
    <section>
      <Title text="CREAR UN NUEVO EMPLEADO" />
      <p className="mt-5">Aqui puedes crear un nuevo empleado solo llenando el formulario:</p>
      <form action="" className="flex flex-col my-5 border-2 max-w-md mx-auto p-5">
        <label htmlFor="fecha_ingreso" className="flex py-2">
                Fecha Ingreso:
            <input className="mx-5 grow border-[1.5px] rounded-md px-2" type="date" />
        </label>
        <label htmlFor="nombre" className="flex py-2">
                Nombre:
            <input className="mx-5 grow border-[1.5px] rounded-md px-2" type="text" />
        </label>
        <label htmlFor="salario" className="flex py-2">
                Salario:
            <input className="mx-5 grow border-[1.5px] rounded-md px-2" type="number" />
        </label>
        <FormButton text='Crear Empleado' />

      </form>
    </section>
  );
}

export default Employees