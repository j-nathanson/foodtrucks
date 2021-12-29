import { BrowserRouter } from 'react-router-dom';
import Main from './components/MainComponent';
import '../src/styles/style.css';

function App() {

  return (
    <BrowserRouter>
      <div className="App">
        <Main />
      </div>
    </BrowserRouter>
  );
}

export default App;
