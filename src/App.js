import { Routes, Route } from 'react-router-dom';
import './App.css';
import Main from './Components/Main';
import Marvel from './Components/Marvel';
import './Components/style.css';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/:id" element={<Marvel />} />
      </Routes>
    </>
  );
}

export default App;
