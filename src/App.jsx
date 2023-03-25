import './App.css'

function App() {  

  let interval;
  let minutes = 0;
  let seconds = 0;
  let milliseconds = 0;
  let isChange = true;

  function startTimer() {

    interval = setInterval (() => {
      if(isChange) {
      milliseconds += 10;

      if(milliseconds === 1000) {
        seconds++;
        milliseconds = 0;
      }

      if(seconds === 60) {
        minutes++;
        seconds = 0;
      }}

      const minutesEL = document.querySelector("#minutes")
      const secondsEL = document.querySelector("#seconds")
      const millisecondsEL = document.querySelector("#milliseconds")

      minutesEL.textContent = formatTimer(minutes)
      secondsEL.textContent = formatTimer(seconds)
      millisecondsEL.textContent = formatMilliseconds(milliseconds)

    }, 10)

    start.style.display = "none";
    pause.style.display = "block";
  }

  function pauseTimer () {
    isChange = false;
    pause.style.display = "none";
    resume.style.display = "block"
  }

  function resumeTimer () {
    isChange = true;
    pause.style.display = "block";
    resume.style.display = "none";
  }

  function resetTimer () {

      const minutesEL = document.querySelector("#minutes")
      const secondsEL = document.querySelector("#seconds")
      const millisecondsEL = document.querySelector("#milliseconds")
    
    clearInterval(interval);
    minutes = 0;
    seconds = 0;
    milliseconds = 0;

    minutesEL.textContent = '00'
    secondsEL.textContent = '00'
    millisecondsEL.textContent = '000'

    start.style.display = "block"
    resume.style.display = "none"
    pause.style.display = "none"
    isChange = true
  }

  function formatTimer (time) {
    return time < 10 ? `0${time}` : time;
  }

  function formatMilliseconds (time) {
    return time < 100 ? `${time}`.padStart(3, "0") : time
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
          <button className="btn" id="pause" onClick={pauseTimer}>Pausar</button>
          <button className="btn" id="resume" onClick={resumeTimer}>Continuar</button>
          <button className="btn" id="reset" onClick={resetTimer}>Resetar</button>
        </div>

    </div>
  )
}

export default App
