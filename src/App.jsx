import './App.css'
import Cabecera from './componentes/Cabecera'
import Roles from './componentes/Roles'
import Dashboard from './componentes/Dashboard'

function App() {

    const usuario = 'Paul';
    const token = 'AY071';
    const menu = 'menu';

    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className="col-12 cabecera"><Cabecera usuario={usuario}/></div>
            </div>
            <div className="row">
                <div className="col-3 roles"><Roles menu={menu}/></div>
                <div className="col-9 dashboard"><Dashboard token={token}/></div>
            </div>
        </div>
    )
}

export default App
