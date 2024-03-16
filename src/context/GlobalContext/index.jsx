import { createContext, useState } from "react";
import Employees from "../../pages/Employees";
import Home from "../../pages/Home";
import Requests from "../../pages/Requests";
import { Loading } from "../../components/Loading";

export const GlobalContext = createContext()

export const GlobalProvider = (props) => {

    const [loading, setLoading] = useState(false)

    const renderLoading = () => {
        while (loading){
            return (
                <Loading />
            )
        }
        
    }

    const url = 'https://two024-03-15-backend.onrender.com'

    const [route, setRoute] = useState(window.location.pathname);
  
    const navigate = (path) => {
      window.history.pushState({}, path, window.location.origin + path);
      setRoute(path);
    };
  
    const renderComponent = () => {
      switch (route) {
        case '/':
          return <Home />;
        case '/empleados':
          return <Employees />;
        case '/solicitudes':
          return <Requests />;
        default:
          return <Home />;
      }
    };

    

    return(
        <GlobalContext.Provider value={{
            route,
            setRoute,
            navigate,
            renderComponent,
            loading,
            setLoading,
            renderLoading,
            url
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}