import { CreateEmployee } from "../../components/CreateEmployee";
import { ViewAllEmployees } from "../../components/ViewAllEmployees";
import { EmployeesPerName } from "../../components/EmployeesPerName";
const Employees = () => {

 
  return (
    <div>
        <CreateEmployee />
        <ViewAllEmployees />
        <EmployeesPerName />
    </div>
  );
}

export default Employees