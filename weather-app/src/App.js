import './App.css';
import { WeatherProvider } from './context/WeatherContext';
import Header from './components/Header';
import { FormrProvider } from './context/FormContext';


function App() {
  return (
    <div className="App">
      <FormrProvider>
        <WeatherProvider>
          <Header></Header>
        </WeatherProvider>
      </FormrProvider>
    </div>
  );
}

export default App;
