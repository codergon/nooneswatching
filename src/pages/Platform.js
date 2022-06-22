import React, { useState } from "react";
import { mockUsers, userColors } from "../utils";
import { AppIcon } from "./svg";

const Platform = () => {
  console.log(userColors);

  const [isMuted, setIsMuted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <div className="platform_container">
      <div className="top_bar">
        <div className="call_notifications normal">
          <i className="ph-strategy-fill"></i>
          <p>Connection stable</p>
        </div>

        <div className="call_info">
          <div className="participating_users">
            <AppIcon type="vr" />
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
            return !(index === 3) ? (
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
                  <img src="img/3.jpeg" alt="" />
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
                    This project is still in development as I am currently
                    gathering the required knowledge to get the backend up and
                    running. In the mean time, below are some of the things you
                    can do while you're here; Have fun ✨
                  </p>
                  <ul className="can_do_list">
                    <li>You can remove a participant from the call</li>
                    <li>You can remove a participant from the call</li>
                    <li>You can remove a participant from the call</li>
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="activities_section">
          <div className="activities_options_container">
            <div className="section_header">
              <p>In-call activities</p>
            </div>

            <ul className="activities_options">
              <li>
                <div className="option_icon">
                  <i className="ph-flag-checkered-fill"></i>
                </div>
                <div className="option_text">
                  <p className="main">Create polls</p>
                  <p className="sub">
                    Make group decisions with anonymous polls
                  </p>
                </div>
              </li>
              <li>
                <div className="option_icon">
                  <i className="ph-chats-circle-fill"></i>
                </div>
                <div className="option_text">
                  <p className="main">Group chat</p>
                  <p className="sub">
                    Send and reply messages from participants
                  </p>
                </div>
              </li>
              <li>
                <div className="option_icon">
                  <AppIcon type="snake" />
                </div>
                <div className="option_text">
                  <p className="main">Play a game</p>
                  <p className="sub">Relax your mind feeding snakes apples</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="bottom_bar">
        <div className="left_bottom">
          <div className="call_layout">
            <AppIcon type="layout1" />
          </div>
          <div className="meeting_id">
            <p>qcnf-ybeu-mdij</p>
            <i className="ph-copy-simple-fill"></i>
          </div>
        </div>

        <div className="action_buttons">
          <div
            className={`action_button mute_mic ${isMuted ? "active" : ""}`}
            onClick={HandleMute}
          >
            <i className={`ph-microphone${isMuted ? "-slash" : ""}-fill`}></i>
          </div>
          <div
            className="action_button enable_video"
            onClick={HandleVisibility}
          >
            <i className={`ph-video-camera${isVisible ? "-slash" : ""}`}></i>
          </div>
          <div className="action_button end_call">
            <AppIcon type="call" />
          </div>
          <div className="action_button raise_hand" onClick={RaiseHand}>
            <i className="ph-hand-waving"></i>
          </div>
          <div className="action_button enable_audio" onClick={MuteSounds}>
            <i className="ph-speaker-simple-slash"></i>
          </div>
        </div>

        <div className="call_info">
          <div className="busy_status" onClick={TabStatus}>
            <div className="busy_icon">
              <i className="ph-barricade-fill"></i>
            </div>
            <p>Occupied</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Platform;
