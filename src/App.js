import './styles/App.css';
import DarkMode from "./components/DarkMode";

function App() {
    return (
      <div className="App">
        <nav>
        <a
          className="App-link"
          href="https://github.com/Tivaiice/Web-DarkMode-"
          target="_blank"
          rel="noopener noreferrer"
        >
          Tiva Wongratkatanyoo ~
        </a>
          <DarkMode />
        </nav>
        
        <div id="image"></div>
      </div>
    );
  }
 
export default App;
