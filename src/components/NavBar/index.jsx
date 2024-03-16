import { useContext, useState } from 'react';

import { GlobalContext } from '../../context/GlobalContext';

const NavBar = () => {

    const globalContext = useContext(GlobalContext)
    
  
    return (
      <div>
        <nav>
          <ul>
            <li onClick={() => globalContext.navigate('/')}>Home</li>
            <li onClick={() => globalContext.navigate('/empleados')}>Empleados</li>
            <li onClick={() => globalContext.navigate('/solicitudes')}>Solicitudes</li>
          </ul>
        </nav>
      </div>
    );
  };
  
  export default NavBar;