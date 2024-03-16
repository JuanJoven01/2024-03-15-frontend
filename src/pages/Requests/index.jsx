import { CreateRequest } from "../../components/CreteNewRequest"
import { ViewAllRequests } from "../../components/ViewAllRequests"
// rendered with the GlobalContext to manage nav, render with Elements the content of the page
const Requests = () => {

    return(
        <div>
            <CreateRequest />
            <ViewAllRequests />
            
        </div>
    )
}

export default Requests