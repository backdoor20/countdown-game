import { useState } from "react";
import { useRef } from "react";
import ResultModal from "./ResultModal";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const ref = useRef();

  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);

  const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    ref.current.open();
  }

  function resetTimer() {
    console.log("Hello");
    setTimeRemaining(targetTime * 1000);
  }

  function handleStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTime) => prevTime - 10);
    }, 10);
  }

  function handleStop() {
    clearInterval(timer.current);
    ref.current.open();
  }

  return (
    <>
      <ResultModal
        ref={ref}
        result="Lost"
        targetTime={targetTime}
        remainingTime={timeRemaining}
        reset={resetTimer}
      />
      <section className="challenge">
        <h2>{title}</h2>
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerIsActive ? handleStop : handleStart}>
            {timerIsActive ? "Stop" : "Start"}
          </button>
        </p>
        <p className={timerIsActive ? "active" : undefined}>
          {timerIsActive ? "Timmer is Running" : "Timer is INACTIVE"}
        </p>
      </section>
    </>
  );
}
