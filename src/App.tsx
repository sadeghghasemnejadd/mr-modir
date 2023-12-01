import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './ui/layout/AppLayout';
import Default from './pages/Dashborads/Default';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<AppLayout />}>
          <Route element={<Default />} path="/" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
