
import './App.css';
import About from './componentes/About';
import Banner from './componentes/Banner';
import Projects from './componentes/Projects';
import { useState } from 'react';


function App() {
  const [ventanaActual, setVentanaActual] = useState(0);
  return (
    <div className="App">
      <div className="caja">
        <Banner
          clickHandler={() => setVentanaActual(1)}
          playAnimation={ventanaActual === 1}
          zindex={ventanaActual <= 1 || ventanaActual === 3 ? 100 : 0}
        />
        <About
          clickHandler={() => setVentanaActual(2)}
          playAnimation={ventanaActual === 2}
          zindex={ventanaActual === 2 ? 100 : 0}
        />
        {ventanaActual >= 2 && (
        <Projects
          clickHandler={() => setVentanaActual(3)}
          playAnimation={ventanaActual === 3}
          zindex={ventanaActual === 3 ? 100 : 1}
        />
      )}
      </div>
    </div>
  );
}


export default App;
