import './App.css'

function App() {

  return (
    <div className="App">
      <h1>Cronômetro - React JS</h1>

      <div className="timer">
        <div className="time" id="minutes">00</div>
        <div className="separetor">:</div>
        <div className="time" id="seconds">00</div>
        <div className="separetor">:</div>
        <div className="time" id="milliseconds">000</div>               
      </div>

        <div className="buttons">
          <button className="btn" id="start">Iniciar</button>
          <button className="btn" id="pause">Pausar</button>
          <button className="btn" id="resume">Continuar</button>
          <button className="btn" id="reset">Resetar</button>
        </div>

    </div>
  )
}

export default App
