import e from './App.module.css'
import produtos from './constants/produtos.json'
import { Card } from './components/card'

function App() {

  return (
    <>
      <h1 className={e.titulo}>Página de plantas</h1>
      <main className={e.principal}>
        {produtos.map((item) => {
          return(
            <div key={item.id} className={e.card}>
              <Card
                plant={item.plant}
                espec={item.espec}
                fami={item.fami}
                orige={item.orige}
              />
            </div>
          )
        })}
        
      </main>
    </>
  )
}

export default App
