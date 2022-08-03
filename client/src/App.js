import {Routes, Route, useNavigate} from "react-router-dom";
import Layout from "./Layout";
import Admin from "./pages/Admin/Admin";
import Constructor from "./pages/Constructor/Constructor";
import Draw from "./pages/Draw/Draw";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";

// import { useSelector } from 'react-redux';
// import { useEffect } from "react";

function App() {
  // const user = useSelector((state) => state.user);
  // console.log(user);
  const navigation = useNavigate();
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="*" element={<Constructor />}/>
          <Route path="/draw" element={<Draw />}/>
          <Route path="/draw/:id" element={<Draw />}/>
          
        </Route>
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
