import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js'
import NavbarComponent from './components/NavbarComponent'
import ItemlistContainer from './components/ItemListContainer'
import NavbarBootstrapHTML from './components/NavbarBootstrapHTML';


function App() {
 
  return (
    <div>
      {/* <NavbarComponent/> */}

      <NavbarBootstrapHTML/>
      <ItemlistContainer greeting= 'Bienvenidos a su agencia preferida de diseño'/>
    </div>
  )
}

export default App
