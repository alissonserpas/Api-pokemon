import ListaPokes from './components/ListaPokes'
import './assets/css/styles.css'
import Encabezado from './components/encabezado'

function App() {
  

  return (
    <>
      <Encabezado />
      <div className='container'>
        <ListaPokes />
      </div>
      
    </>
  )
}

export default App
