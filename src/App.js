import "./App.css";
import ToggleColorMode from "./Components/DarkMode";
import PrimarySearchAppBar from  "./Components/NavigationBar";

const App = () => {
    return (
        
        <div className="app">
            < ToggleColorMode/>
            < PrimarySearchAppBar/>
        </div>
    );
}

export default App;