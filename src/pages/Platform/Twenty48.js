const Twenty48 = ({ setTabType }) => {
  return (
    <div className="activities_options_container">
      <div className="section_header">
        <div className="main">
          <div className="back_button" onClick={() => setTabType("games")}>
            <i className="ph-arrow-left-bold"></i>
          </div>
          <p>2048</p>
        </div>
      </div>

      <div className="game_container"></div>
    </div>
  );
};

export default Twenty48;
