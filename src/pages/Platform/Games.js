import React from "react";
import { AppIcons } from "../../svgs";

const Games = ({ setTabType }) => {
  return (
    <div className="activities_options_container">
      <div className="section_header">
        <div className="main">
          <div className="back_button" onClick={() => setTabType("menu")}>
            <i className="ph-arrow-left-bold"></i>
          </div>
          <p>Select a game</p>
        </div>
      </div>

      <ul className="activities_options">
        <li onClick={() => setTabType("snake")}>
          <div className="option_icon">
            <AppIcons type="snake" />
          </div>
          <div className="option_text">
            <p className="main">Snakey 🐍</p>
            <p className="sub">Increase Snakey's length feeding it apples</p>
          </div>
        </li>
        {/* <li onClick={() => setTabType("2048")}>
          <div className="option_icon">
            <p className="small_txt">2048</p>
          </div>
          <div className="option_text">
            <p className="main">Twenty 48</p>
            <p className="sub">Add multiples of two till you get 2048</p>
          </div>
        </li> */}
      </ul>
    </div>
  );
};

export default Games;
