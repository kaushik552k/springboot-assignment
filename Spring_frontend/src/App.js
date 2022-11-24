import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from 'react-router-dom'
import AddData from './components/adddata';
import Fetchdata from './components/fetchdata';

function App() {
  return (
    <div className="App">
      <>
        <Routes>
          <Route path='/' element={<AddData />}></Route>
          <Route path='/fetchdata' element={<Fetchdata />}></Route>
        </Routes>
      </>
    </div>
  );
}

export default App;
