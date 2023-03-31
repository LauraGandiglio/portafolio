
import './App.css';
import About from './componentes/About';
import Banner from './componentes/Banner';
import Projects from './componentes/Projects';


function App() {
  return (
    <div className='App'>
      <div className='caja'>
        <Banner />
        <About />
        <Projects />
      </div>
    </div>
  );
}

export default App;
