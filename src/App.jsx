import './App.css'
import Cabecera from './componentes/Cabecera'
import Roles from './componentes/Roles'
import Dashboard from './componentes/Dashboard'

function App() {
    return (
        <div className='container'>
            <div className='row'>
                <header className="col-12 cabecera">
                    <Cabecera></Cabecera>
                </header>
            </div>

            <div className="row">
                <aside className='col-3 roles'>
                    <Roles></Roles>
                </aside>
                <main className='col-9 dashboard'>
                    <Dashboard></Dashboard>
                </main>
            </div>
        </div>
    )
}

export default App
