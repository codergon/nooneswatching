import randomColor from "randomcolor";

export const userColors = [
  randomColor({ hue: "#00FFFF" }),
  "#0F42C4",
  "#039393",
  randomColor({ hue: "monochrome" }),
  randomColor({ luminosity: "dark" }),
  randomColor({ hue: "#2b0fff" }),
  randomColor({ hue: "orange" }),
  randomColor({ hue: "#e0e0e0" }),
  randomColor({ hue: "monochrome" }),
  randomColor({ luminosity: "dark" }),
];

export const mockUsers = [
  {
    img: "img/3.jpeg",
    name: "Alpha",
  },
  {
    img: "",
    name: "Willy",
  },
  {
    img: "",
    name: "Uhtred",
  },
  {
    img: "",
    name: "Info",
  },
];
