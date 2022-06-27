import { AppIcons } from "../../svgs";

const ActivitiesMenu = ({ setTabType }) => {
  return (
    <div className="activities_options_container">
      <div className="section_header">
        <p>In-call activities</p>
      </div>

      <ul className="activities_options">
        <li onClick={() => setTabType("poll")}>
          <div className="option_icon">
            <i className="ph-flag-checkered-fill"></i>
          </div>
          <div className="option_text">
            <p className="main">Create polls</p>
            <p className="sub">Make group decisions with anonymous polls</p>
          </div>
        </li>
        <li onClick={() => setTabType("chat")}>
          <div className="option_icon">
            <i className="ph-chats-circle-fill"></i>
          </div>
          <div className="option_text">
            <p className="main">Group chat</p>
            <p className="sub">Send and reply messages from participants</p>
          </div>
        </li>
        <li onClick={() => setTabType("games")}>
          <div className="option_icon">
            <AppIcons type="snake" />
          </div>
          <div className="option_text">
            <p className="main">Play a game</p>
            <p className="sub">Relax your mind feeding snakes apples</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ActivitiesMenu;
