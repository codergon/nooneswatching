import gsap from "gsap";
import { AbstractLines, AppIcons } from "../svgs";
import React, { useState, Fragment, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [meetingId, setMeetingId] = useState("");

  var requestId = null;
  var mouse = {
    x: 0,
    y: 0,
  };

  const updateLines = () => {
    gsap.utils.toArray(".line_vector_item").forEach((el) => {
      const element = el.getBoundingClientRect();
      var dx = mouse.x - (element.left + element.width / 2);
      var dy = mouse.y - (element.top + element.height / 2);

      var transform = "rotate(" + (Math.atan2(dy, dx) + 0.785398 * 2) + "rad)";
      el.style.transform = transform;
    });

    requestId = null;
  };

  useEffect(() => {
    window.addEventListener("mousemove", function (event) {
      mouse.x = event.pageX;
      mouse.y = event.pageY;

      if (!requestId) {
        requestId = requestAnimationFrame(updateLines);
      }
    });
  }, []);

  return (
    <div className="home_container">
      <nav>
        <div className="nav_row">
          <div className="logo">No Ones Watching</div>
          <div className="horLine" />
          <div className="share_project">
            <p>Share Invite</p>
            <i className="uil uil-share"></i>
          </div>
        </div>
      </nav>

      <div className="hero">
        <div className="hero_content">
          <div className="hero_content_block">
            <div className="hero_text">
              <p className="main">
                Video conferencing with <br /> the optimal visual quality
              </p>
              <p className="sub">
                Connect with friends, attend meetings and build great business
                relationships in a secure space with the best visual and audio
                quality.
              </p>
            </div>

            <div className="get_started">
              <NavLink to="/qcnf-ybeu-mdij" className="new_meeting_button">
                <i className="ph-phone-call"></i>
                <p>New call</p>
              </NavLink>

              <input
                type="text"
                value={meetingId}
                placeholder="Enter meeting ID"
                onChange={(e) => setMeetingId(e.target.value)}
                className="meeting_id_input"
              />
            </div>
          </div>

          <div className="hero_content_images_cover">
            <div className="hero_content_images">
              <div className="images_vectors">
                <div className="img_item">
                  <AbstractLines />
                </div>
                <div className="img_item">
                  <img src="img/1.png" alt="" />
                </div>
                <div className="img_item">
                  <img src="img/2.png" alt="" />
                </div>
                <div className="img_item">
                  <AbstractLines num={2} />
                </div>

                <div className="mobile_mid_des">
                  <AppIcons type="mobiledes" />
                </div>
              </div>

              <div className="cursor_lines_inner">
                {[...Array(8).keys()].map((i) => (
                  <div key={i} className="cursor_lines_row">
                    <Fragment key={i}>
                      {[...Array(8).keys()].map((j) => (
                        <div className="line_vector_item" key={j}></div>
                      ))}
                    </Fragment>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="hero_foot">
          <div className="features_sect">
            <div className="features_item">
              <div className="features_hd">
                <p>In-call messaging</p>
              </div>
              <div className="hor_line" />
              <div className="features_txt">Chat up room participant(s)</div>
            </div>{" "}
            <div className="features_item">
              <div className="features_hd">
                <p>Create group polls</p>
              </div>
              <div className="hor_line" />
              <div className="features_txt">Make important group decisions</div>
            </div>
          </div>

          <div className="foot_highlight">
            <div className="foot_highlight_txt">
              Multiple layout configurations to suit your view. Get started
            </div>

            <NavLink to="/qcnf-ybeu-mdij" className="highlight_arrow">
              <i className="ph-arrow-right"></i>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
