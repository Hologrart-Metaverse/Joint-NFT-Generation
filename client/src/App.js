import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
// components
import Layout from "./Layout";
// redux
import { loginLocally } from "./actions/Users";
// pages
import Admin from "./pages/Admin/Admin";
import Draw from "./pages/Draw/Draw";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Shop from "./pages/Shop/Shop";
import Constructor from "./pages/Constructor/Constructor";
import Register from "./pages/Register/Register";
import SahneXL from "./pages/SpecialEvent/SahneXL";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const localUser = JSON.parse(localStorage.getItem("currentUser"));
    console.log(localUser);
    dispatch(loginLocally(localUser));
  }, [dispatch]);

  // const user = useSelector((state) => state.user);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="*" element={<Constructor />} />
          <Route path="/draw" element={<Draw />} />
          <Route path="/draw/:id" element={<Draw />} />
          <Route path="/sahneXL" element={<SahneXL />} />
        </Route>
        {/* <Route path="/admin" element={<Admin />} /> */}
      </Routes>
    </div>
  );
}

export default App;