
import './App.css';
import MainRegisterPage from './Components/registerLoginPage/mainRegisterPage';
import { BrowserRouter } from 'react-router-dom';

//test comment
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainRegisterPage />
      </div>
    </BrowserRouter>
  );
}

export default App;
