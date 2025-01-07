
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Book from './Book';
import CreateBook from './CreateBook';
import UpdateBook from './UpdateBook';
import ViewBook from './ViewBook';
import LogIn from './Login';
import Register from './Register';
import Test from './Test';

function App() {
  return (
    <div className="App">

    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Book/>}></Route>
        <Route path='/view/:id' element={<ViewBook/>}></Route>
        <Route path='/create' element={<CreateBook/>}></Route>
        <Route path='/update/:id' element={<UpdateBook/>}></Route>
        <Route path='/login' element={<LogIn/>}></Route>
        <Route path='/register' element={<Register/>}></Route>
        <Route path='/test' element={<Test/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
