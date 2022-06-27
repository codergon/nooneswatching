import dayjs from "dayjs";
import { useState } from "react";
import TextareaAutosize from "react-textarea-autosize";

const PollForm = ({ setTabType }) => {
  const [pollTitle, setPollTitle] = useState("");
  const [pollOptions, setPollOptions] = useState([]);
  const [optionInput, setOptionInput] = useState("");

  const AddOption = () => {
    if (!optionInput.trim()) return;
    setPollOptions((p) => [...p, optionInput]);
    setOptionInput("");
  };

  const RemoveOption = (index) => {
    setPollOptions((p) => p.filter((p, i) => i !== index));
  };

  return (
    <div className="create_poll_container">
      <div className="section_header">
        <div className="main">
          <div className="back_button" onClick={() => setTabType("menu")}>
            <i className="ph-arrow-left-bold"></i>
          </div>
          <p>Create poll</p>
        </div>
      </div>

      <div className="poll_form">
        <div className="poll_entry">
          <p className="label">Give a description of the poll</p>
          <div className="input_cover">
            <TextareaAutosize
              minRows={1}
              maxRows={2}
              value={pollTitle}
              onChange={(e) => setPollTitle(e.target.value)}
              placeholder="Write description here"
            />
          </div>
        </div>

        <div className="options_header">Add options to this poll</div>

        <div className="add_option_cover">
          <input
            type="text"
            value={optionInput}
            onChange={(e) => setOptionInput(e.target.value)}
            placeholder="Poll options"
          />
          <button className="add_option" onClick={AddOption}>
            <i className="ph-list-plus-fill"></i>
          </button>
        </div>

        <div className="options_header preview">
          <p className="main">Preview</p>
          <p className="sub">double click to remove options</p>
        </div>

        <div className="poll_title_preview">{pollTitle}</div>

        <div className="poll_options_preview_cover">
          <ul className="poll_options_preview">
            {pollOptions?.map((poll, index) => (
              <li key={index} onDoubleClick={() => RemoveOption(index)}>
                {poll}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="create_button_cover">
        <button className="create_poll">Create poll</button>
      </div>
    </div>
  );
};

export default PollForm;
