import { useContext } from 'react';

import { GlobalContext } from '../../context/GlobalContext';

const NavBar = () => {

    const globalContext = useContext(GlobalContext)


    
  
    return (
      <div>
        <nav className='flex justify-between border-b-2 pb-5'>
            <h1 className='ml-10'>JUANJOVEN - DEV</h1>
          <ul className='mr-10 flex'>
            <li className={`px-5 hover:underline hover:cursor-pointer ${globalContext.route == '/'? ' text-blue-400': ''}`} onClick={() => globalContext.navigate('/')}>Home</li>
            <li className={`px-5 hover:underline hover:cursor-pointer ${globalContext.route == '/empleados'? ' text-blue-400': ''}`}  onClick={() => globalContext.navigate('/empleados')}>Empleados</li>
            <li className={`px-5 hover:underline hover:cursor-pointer ${globalContext.route == '/solicitudes'? ' text-blue-400': ''}`}  onClick={() => globalContext.navigate('/solicitudes')}>Solicitudes</li>
          </ul>
        </nav>
      </div>
    );
  };
  
  export default NavBar;