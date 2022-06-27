import { useEffect, useRef, useState } from "react";

const Snake = ({ setTabType }) => {
  let started = false;
  let px = 9;
  let py = 9;
  let gs = 18;
  let tc = 18;
  let ax = Math.floor(Math.random() * tc);
  let ay = Math.floor(Math.random() * tc);
  let xv = 0;
  let yv = 0;
  let trail = [];
  let tail = 5;

  let canv;
  let ctx;

  const [score, setScore] = useState(0);

  useEffect(() => {
    let Id;
    canv = document.getElementById("game_container");
    if (!!canv) {
      ctx = canv?.getContext("2d");
      document.addEventListener("keydown", keyPush);
      Id = setInterval(game, 1000 / 8);
    }

    return () => clearInterval(Id);
  }, []);

  const EndGame = () => {
    const prev = tail;
    started = false;
    px = 9;
    py = 9;
    gs = 18;
    tc = 18;
    ax = Math.floor(Math.random() * tc);
    ay = Math.floor(Math.random() * tc);
    xv = 0;
    yv = 0;
    trail = [];
    tail = 5;
  };

  function game() {
    px += xv;
    py += yv;
    if (px < 0) {
      px = tc - 1;
    }
    if (px > tc - 1) {
      px = 0;
    }
    if (py < 0) {
      py = tc - 1;
    }
    if (py > tc - 1) {
      py = 0;
    }

    ctx.fillStyle = "#141414";
    ctx.fillRect(0, 0, canv.width, canv.height);

    ctx.fillStyle = "#5b5b5b";
    for (var i = 0; i < trail.length; i++) {
      ctx.fillRect(trail[i].x * gs, trail[i].y * gs, gs - 1.8, gs - 1.8);
      if (trail[i].x == px && trail[i].y == py) {
        if (started) {
          EndGame();
        } else {
          tail = 5;
        }
      }
    }
    trail.push({ x: px, y: py });
    while (trail.length > tail) {
      trail.shift();
    }

    if (ax == px && ay == py) {
      tail++;
      if (trail.length > 5) started = true;
      ax = Math.floor(Math.random() * tc);
      ay = Math.floor(Math.random() * tc);
    }

    ctx.fillStyle = "#eee";
    ctx.fillRect(ax * gs, ay * gs, gs - 1.8, gs - 1.8);
  }

  function keyPush(evt) {
    switch (evt.keyCode) {
      case 37:
        xv = xv !== 1 ? -1 : 1;
        yv = 0;
        break;

      case 38:
        xv = 0;
        yv = yv !== 1 ? -1 : 1;
        break;

      case 39:
        xv = xv !== -1 ? 1 : -1;
        yv = 0;
        break;

      case 40:
        xv = 0;
        yv = yv !== -1 ? 1 : -1;
        break;
    }
  }

  return (
    <div className="activities_options_container">
      <div className="section_header">
        <div className="main">
          <div className="back_button" onClick={() => setTabType("games")}>
            <i className="ph-arrow-left-bold"></i>
          </div>
          <p>Snakey 🐍</p>
        </div>
      </div>

      <div className="game_container">
        <canvas id="game_container" width="324" height="324"></canvas>

        <div className="game_score">
          {/* <p>Snakey final score : {score}</p> */}
          <button
            onClick={() => {
              EndGame();
            }}
          >
            <p>Restart</p>
            <i className="ph-arrow-counter-clockwise" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Snake;
