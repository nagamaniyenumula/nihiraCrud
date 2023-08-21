
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import EmpListing from './EmpListing';
import EmpDetails from './EmpDetails';
import EmpCreate from './EmpCreate';
import EmpEdit from './EmpEdit';

function App() {
  return (
    
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<EmpListing/>} />
        <Route path="/employee/create" element={<EmpCreate/>} />
        <Route path="/employee/detailes/:empid" element={<EmpDetails/>} />
        <Route path="/employee/edit/:empid" element={<EmpEdit/>} />
      </Routes>
 </BrowserRouter>
     <h1>react js CRUD oparations </h1>

    </div>
    
  );
 
}

export default App;
