import { createContext, useState } from "react";
import Employees from "../../pages/Employees";
import Home from "../../pages/Home";
import Requests from "../../pages/Requests";
import { Loading } from "../../components/Loading";

export const GlobalContext = createContext()

export const GlobalProvider = (props) => {
    // State and function  uses to know if are any charging async, if loading, renderLoading render the icon to identify charge
    const [loading, setLoading] = useState(false)

    const renderLoading = () => {
        while (loading){
            return (
                <Loading />
            )
        }
        
    }
    // principal url to make axios, if back change url here is where you need update path
    const url = 'https://two024-03-15-backend.onrender.com'

    // The state, nav and function to manage navigation on the app
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