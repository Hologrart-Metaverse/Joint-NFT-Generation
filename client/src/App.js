import {Routes, Route} from "react-router-dom";
import Layout from "./Layout";
import Constructor from "./pages/Constructor/Constructor";
import Draw from "./pages/Draw/Draw";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home />}/>
          <Route path="*" element={<Constructor />}/>
          <Route path="/draw" element={<Draw />}/>
          <Route path="/draw/:id" element={<Draw />}/>
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
