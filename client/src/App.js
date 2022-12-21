import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Routes, Route, useNavigate} from "react-router-dom";
import { loginLocally } from "./actions/Users";
import Layout from "./Layout";
import Admin from "./pages/Admin/Admin";
import Constructor from "./pages/Constructor/Constructor";
import Draw from "./pages/Draw/Draw";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Shop from "./pages/Shop/Shop";


function App() {
  const navigation = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(localUser);
    dispatch(loginLocally(localUser));
  }, []);

  // const user = useSelector((state) => state.user);
  
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/register" element={<Register />}/>
          <Route path="/shop" element={<Shop />}/>
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
