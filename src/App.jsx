import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./pages/Homepage/Home";
import { Route, Routes } from 'react-router-dom';
import NotFound from './pages/NotFound';
import TeamDescription from './pages/Team/TeamDescription';
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:team" element={<TeamDescription />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App;
