import gsap from "gsap";
import { AbstractLines } from "../svgs";
import React, { useState, Fragment, useEffect } from "react";

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
                {/* Connect with friends, attend meetings, build business
              relationships */}
                Connect with friends, attend meetings, and build great business{" "}
                <br />
                relationships in a secure space while enjoying excellent visual
                quality.
              </p>
            </div>

            <div className="get_started">
              <button className="new_meeting_button">
                <i className="ph-phone-call"></i>
                <p>New call</p>
              </button>
              <input
                type="text"
                value={meetingId}
                placeholder="Enter meeting ID"
                onChange={(e) => setMeetingId(e.target.value)}
                className="meeting_id_input"
              />
            </div>
          </div>

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
            </div>

            <div className="cursor_lines">
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
                <p>Global coverage</p>
              </div>
              <div className="hor_line" />
              <div className="features_txt">Lorem ipsum dolor sit, it amet</div>
            </div>{" "}
            <div className="features_item">
              <div className="features_hd">
                <p>Global coverage</p>
              </div>
              <div className="hor_line" />
              <div className="features_txt">Lorem ipsum dolor sit, it amet</div>
            </div>
          </div>

          <div className="foot_highlight">
            <div className="foot_highlight_txt">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              architecto.
            </div>
            <div className="highlight_arrow">
              <i className="ph-arrow-right"></i>
            </div>
          </div>
        </div>
      </div>

      <div className="features">
        <div className="features_header">
          <div className="features_header_inner">
            <div className="section_title">
              <i className="ph-circle-fill"></i>
              <span>&nbsp;—&nbsp;</span>
              <p> App Features</p>
            </div>

            <div className="hd_arrow">
              <i className="ph-arrow-right"></i>
            </div>

            <div className="section_hd_txt">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
              nemo aut, accusantium nulla harum cumque magnam soluta distinctio,
              quod enim dignissimos rerum. Quasi laborum sunt voluptates impedit
              similique eligendi laudantium.
            </div>
          </div>
        </div>

        <div className="features_list">
          {[1, 2, 3].map((item, index) => (
            <div className="item" key={index}>
              <div className="item_hd">
                <p>Reliable</p>
                <i className="ph-circle-fill"></i>
              </div>

              <div className="item_cont">
                <div className="block_title">short summary</div>
                <div className="block_cont">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aspernatur quia recusandae libero.{" "}
                  </p>
                  <ul>
                    <li>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nobis excepturi a fuga in quos unde, rerum neque libero.
                    </li>
                    <li>Lorem, ipsum dolor sit amet.</li>
                    <li>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                      Nobis excepturi a fuga in quos unde, rerum neque libero.
                    </li>
                  </ul>
                </div>

                <div className="block_title">problem</div>
                <div className="block_cont">
                  <ul>
                    <li>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Hic in, consequatur aut reprehenderit consequuntur
                      necessitatibus explicabo.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
