import './App.css'

// ------------------------------------------------------------------
// COMPONENTES
import Cabecera from './components/Cabecera.jsx'
import Roles from './components/Roles.jsx'
import Dashboard from './components/Dashboard.jsx'

// ------------------------------------------------------------------
// CONTEXTO
import TokenContext from './contexts/TokenContext.jsx'

function App() {

    const usuario = 'Paul';
    const token = "U295IGVsIFRva2Vu";
    const menu = 'menu';

    return (
        <TokenContext.Provider value={token}>
            <div className='container-fluid'>
                <div className='row'>
                    <div className="col-12 cabecera"><Cabecera usuario={usuario}/></div>
                </div>
                <div className="row">
                    <div className="col-3 roles"><Roles menu={menu}/></div>
                    <div className="col-9 dashboard"><Dashboard/></div>
                </div>
            </div>
        </TokenContext.Provider>
    )
}

export default App
