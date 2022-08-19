
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import CreateCanvas from './pages/CreateCanvas';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<CreateCanvas />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
