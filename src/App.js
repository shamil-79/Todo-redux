import { Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Main from './features/Main';
import Todo from './features/Todo';
import Todolist from './features/Todolist';
// import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className='App' style={{backgroundImage:require('./image/seaview-n-cEAB4vyUPgw-unsplash.jpg')}}>
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/todo' element={<Todo/>}></Route>
      <Route path='/todolist' element={<Todolist/>}></Route>
    </Routes>
    
      
    </div>
  );
}

export default App;
