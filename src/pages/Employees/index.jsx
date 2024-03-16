import { CreateEmployee } from "../../components/CreateEmployee";
import { ViewAllEmployees } from "../../components/ViewAllEmployees";
import { EmployeesPerName } from "../../components/EmployeesPerName";

// rendered with the GlobalContext to manage nav, render with Elements the content of the page
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