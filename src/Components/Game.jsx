import { useState, useEffect } from "react";
import pipePhoto from "../IMG/pipe.png";
import marioPhoto from "../IMG/mario.gif";
import cloudsPhoto from "../IMG/clouds.png";
import GameOverPhoto from "../IMG/game-over.png";

import "../Styles/Game.css";

function Game() {
  let [start, setStart] = useState(false);
  let [jump, setJump] = useState(false);
  let [pass, setPass] = useState(false);
  let [score, setScore] = useState(0);

  function handleClic() {
    setStart(start ? false : true);
  }

  useEffect(() => {
    const mario = document.querySelector(".mario-run");
    const pipe = document.querySelector(".pipe");
    const clouds = document.querySelector(".clouds");
    const restart = document.querySelector(".restart");

    let loop = setInterval(() => {
      let coordsPipe = pipe.getBoundingClientRect();
      let coordsMario = mario.getBoundingClientRect();
      let coordsClouds = clouds.getBoundingClientRect();

      if (
        coordsPipe.left <= coordsMario.right - 5 &&
        coordsPipe.right > coordsMario.left + 20 &&
        coordsPipe.top < coordsMario.bottom
      ) {
        clouds.style.animation = "none";
        clouds.style.right = `${coordsClouds.right}px`;
        
        pipe.style.animation = "none";
        pipe.style.left = `${coordsPipe.left}px`;

        mario.style.animation = "none";
        mario.style.right = `${coordsMario.right}px`;
        mario.style.top = `${coordsMario.bottom + window.pageYOffset - 248}px`;

        mario.src = GameOverPhoto;
        mario.style.width = "100px";
        mario.style.height = "120px";
        clearInterval(loop);
        restart.style.display = "flex";
        setTimeout(()=>location.reload(), 2000)
      }
    }, 100);

    document.addEventListener("keydown", (e) => {
      if (e.key === " " && jump === false) {
        setJump((jump = true));

        setTimeout(() => {
          setJump((jump = false));
          let coordsPipe = pipe.getBoundingClientRect();
          let coordsMario = mario.getBoundingClientRect();
          if (coordsPipe.right <= coordsMario.left - 5) {
            setPass((pass = true));
            if (pass) {
              setScore((score += 1));
              setPass((pass = false));
            }
          }
        }, 1000);
      }
    });
  }, []);

  return (
    <section>
      <div className="game-board">
        <img
          className={start ? "pipe pipe-animation" : "pipe"}
          src={pipePhoto}
          alt="pipe"
        />
        <img
          className={jump ? "jump mario-run" : "mario-run"}
          src={marioPhoto}
          alt="mario gif"
        />
        <img
          className={start ? "clouds clouds-animation" : "clouds"}
          src={cloudsPhoto}
          alt="clouds"
        />
        <h2 className="score2">X</h2>
        <h2 className="score">{score}</h2>

        <div className={start ? "start-active" : "start"}>
          <button onClick={handleClic} className="start-button">
            Start
          </button>
        </div>
        <div className="restart">
          <h3 className="game-over">Game Over</h3>
        </div>
      </div>
    </section>
  );
}
export default Game;
