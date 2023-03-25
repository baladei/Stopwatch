import './App.css'

function App() {

  const minutesEL = document.querySelector("#minutes")
  const secondsEL = document.querySelector("#seconds")
  const millisecondsEL = document.querySelector("#milliseconds")
  const startEL = document.querySelector("#start")
  const pauseEL = document.querySelector("#pause")
  const resumeEL = document.querySelector("#resume")
  const resetEL = document.querySelector("#reset")

  let interval;
  let minutes = 0;
  let seconds = 0;
  let milliseconds = 0;
  let isPaused = false

  function startTimer() {

    interval = setInterval (() => {
      if(!isPaused) {
      milliseconds += 10;

      if(milliseconds === 1000) {
        seconds++;
        milliseconds = 0;
      }

      if(seconds === 60) {
        minutes++;
        seconds = 0;
      }}

      minutesEL.textContent = minutes
      secondsEL.textContent = seconds
      millisecondsEL.textContent = milliseconds

    }, 10)

  }

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
          <button className="btn" id="start" onClick={startTimer}>Iniciar</button>
          <button className="btn" id="pause">Pausar</button>
          <button className="btn" id="resume">Continuar</button>
          <button className="btn" id="reset">Resetar</button>
        </div>

    </div>
  )
}

export default App
