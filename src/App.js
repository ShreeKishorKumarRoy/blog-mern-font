
import './App.css';
import Create from './Components/Create';
import { Route, Routes } from 'react-router-dom';
import Read from './Components/Read';
import Edit from './Components/Edit';
import SignUp from './Components/SignUp/SignUp';
import Login from './Components/Login/Login';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';





function App() {
  return (
    <div className="container">

      <Routes>
        <Route path='/' element={<SignUp />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Read' element={<Read />}></Route>
        {/* <Route path='/create' element={<Create />}></Route>
        <Route path='/edit' element={<Edit />}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
