import { createContext, useState } from "react";
import Employees from "../../pages/Employees";
import Home from "../../pages/Home";
import Requests from "../../pages/Requests";

export const GlobalContext = createContext()

export const GlobalProvider = (props) => {

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
            renderComponent
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}