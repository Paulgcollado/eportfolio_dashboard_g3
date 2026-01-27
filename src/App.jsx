import { useState } from 'react'
import './App.css'

// ------------------------------------------------------------------
// COMPONENTES
import Cabecera from './components/Cabecera.jsx'
import Roles from './components/Roles.jsx'
import Dashboard from './components/Dashboard.jsx'

// ------------------------------------------------------------------
// CONTEXTO
import TokenContext from './contexts/TokenContext.jsx'
import UserContext from './contexts/UserContext.jsx'

function App() {

    // ------------------------------------------------------------------
    // CONSTANTES
    const token = "U295IGVsIFRva2Vu";
    const username = 'Victor';
    const menu = 'menu';

    // ------------------------------------------------------------------
    // ESTADOS
    const [usuario, setUsuario] = useState(username);

    return (
        <TokenContext.Provider value={token}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className="col-12 cabecera"><Cabecera usuario={usuario}/></div>
                </div>
                <UserContext.Provider value={usuario}>
                    <div className="row">
                        <div className="col-3 roles"><Roles menu={menu}/></div>
                        <div className="col-9 dashboard"><Dashboard/></div>
                    </div>
                </UserContext.Provider>
            </div>
        </TokenContext.Provider>
    )
}

export default App
