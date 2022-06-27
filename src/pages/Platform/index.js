import React, { useState } from "react";
import { mockUsers, userColors } from "../../utils";
import { AppIcons } from "../../svgs";
import ActivitiesMenu from "./ActivitiesMenu";
import ChatScreen from "./ChatScreen";
import PollForm from "./PollForm";
import Games from "./Games";
import Snake from "./Snake";
import Twenty48 from "./Twenty48";

const Platform = () => {
  const [isMuted, setIsMuted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [handRaised, setHandRaised] = useState(false);
  const [muteSound, setMuteSound] = useState(false);
  const [isBusy, setIsBusy] = useState(false);
  const [openTab, setOpenTab] = useState(false);

  const HandleMute = () => setIsMuted((p) => !p);
  const HandleVisibility = () => setIsVisible((p) => !p);
  const RaiseHand = () => setHandRaised((p) => !p);
  const MuteSounds = () => setMuteSound((p) => !p);
  const HandleBusy = () => setIsBusy((p) => !p);
  const TabStatus = () => setOpenTab((p) => !p);

  const [tabType, setTabType] = useState("menu");

  return (
    <div className="platform_container">
      <div className="top_bar">
        <div className="call_notifications normal">
          <i className="ph-strategy-fill"></i>
          <p>Connection stable</p>
        </div>

        <div className="call_info">
          <div className="participating_users">
            <AppIcons type="vr" />
            <p>3 Participating</p>
          </div>
          <div className="profile_pic">
            <img
              src="https://blush.design/api/download?shareUri=0I6cFC5NGKx-CnTR&c=Skin_0%7Ed08b5b&w=800&h=800&fm=png"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="main_container">
        <div className="particpants_content">
          {mockUsers.map((user, index) => {
            return !(index === 5) ? (
              <div
                className={`participant_item ${
                  mockUsers.length === 1
                    ? "just_one"
                    : mockUsers?.length === 2
                    ? "one_or_two"
                    : ""
                }`}
                key={index}
              >
                {!!user?.img ? (
                  <img src={user?.img} alt="" />
                ) : (
                  <div
                    className="name_circle"
                    style={{ background: userColors[index] }}
                  >
                    <p>{user?.name[0]}</p>
                  </div>
                )}
              </div>
            ) : (
              <div className="participant_item info_block" key={index}>
                <div className="info_text">
                  <p className="info_hd">
                    Hey there, <br />
                    This project is still in development. In the mean time,
                    below are some of the things you can do while you're here.
                  </p>
                  <ul className="can_do_list">
                    <li>
                      <i className="ph-circles-three-fill" />
                      <p>Send messages to everyone on the call</p>
                    </li>
                    <li>
                      <i className="ph-circles-three-fill" />
                      <p>
                        Create polls to make important decisions right on the
                        call
                      </p>
                    </li>
                    <li>
                      <i className="ph-circles-three-fill" />
                      <p>
                        Signify if you're engaged and don't have full attention
                        on the call
                      </p>
                    </li>
                    <li>
                      <i className="ph-circles-three-fill" />
                      <p>
                        Play a game while you wait for others to join the call
                      </p>
                    </li>
                    <li>
                      <i className="ph-circles-three-fill" />
                      <p>Explore and have fun ✨</p>
                    </li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div
          className={`activities_section ${
            tabType === "snake" ? "game_type" : ""
          }`}
          style={{ display: !openTab ? "none" : "flex" }}
        >
          {tabType === "menu" ? (
            <ActivitiesMenu setTabType={setTabType} />
          ) : tabType === "chat" ? (
            <ChatScreen setTabType={setTabType} />
          ) : tabType === "poll" ? (
            <PollForm setTabType={setTabType} />
          ) : tabType === "games" ? (
            <Games setTabType={setTabType} />
          ) : tabType === "snake" ? (
            <Snake setTabType={setTabType} />
          ) : tabType === "2048" ? (
            <Twenty48 setTabType={setTabType} />
          ) : null}
        </div>
      </div>

      <div className="bottom_bar">
        <div className="left_bottom">
          <div className="call_layout">
            <AppIcons type="layout1" />
          </div>
          <div className="meeting_id">
            <p>qcnf-ybeu-mdij</p>
            <i className="ph-copy-simple-fill"></i>
          </div>
        </div>

        <div className="action_buttons_cover">
          <div className="action_buttons">
            <div
              className={`action_button mute_mic ${isMuted ? "active" : ""}`}
              onClick={HandleMute}
            >
              <i className={`ph-microphone${isMuted ? "-slash" : ""}-fill`} />
            </div>
            <div
              className={`action_button enable_video ${
                isVisible ? "active" : ""
              }`}
              onClick={HandleVisibility}
            >
              <i className={`ph-video-camera${isVisible ? "-slash" : ""}`} />
            </div>
            <div className="action_button end_call">
              <AppIcons type="call" />
            </div>
            <div className={`action_button enable_audio`} onClick={MuteSounds}>
              <i
                className={`ph-speaker-simple${muteSound ? "-slash" : "-high"}`}
              />
            </div>
            <div
              className={`action_button raise_hand ${
                handRaised ? "active" : ""
              }`}
              onClick={RaiseHand}
            >
              {handRaised ? (
                <i className="ph-hand-palm" />
              ) : (
                <AppIcons type="fist" />
              )}
            </div>
          </div>
        </div>

        <div className="status_n_activities">
          <div
            className={`busy_status  ${!isBusy ? "active" : ""}`}
            onClick={HandleBusy}
          >
            <div className="busy_icon">
              <i className="ph-barricade-fill"></i>
            </div>
            <p>{isBusy ? "Engaged" : "Listening"}</p>
          </div>

          <div
            className={`activites_tab ${openTab ? "active" : ""}`}
            onClick={TabStatus}
          >
            <AppIcons type={openTab ? "activitiesClicked" : "activities"} />
            <i className={`ph-circles-four$`} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
