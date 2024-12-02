import symptom1 from "../assets/symptom/symptom1.jpg"
import symptom2 from "../assets/symptom/symptom2.jpg"
import symptom3 from "../assets/symptom/symptom3.jpg"
import symptom4 from "../assets/symptom/symptom4.jpg"
import symptom5 from "../assets/symptom/symptom5.jpg"
import symptom6 from "../assets/symptom/symptom6.jpg"
import symptom7 from "../assets/symptom/symptom7.jpg"

export const symptom = [
  {
    image: symptom1,
    text: "#두통",
    to: "/headache"
  },
  {
    image: symptom2,
    text: "#마른기침",
    to: "/cough"
  },
  {
    image: symptom3,
    text: "#피부발진",
    to: "/rash"
  },
  {
    image: symptom4,
    text: "#미열",
    to: "/fever"
  },
  {
    image: symptom5,
    text: "#근육통",
    to: "/muscle_pain"
  },
  {
    image: symptom6,
    text: "#불면증",
    to: "/insomnia"
  },
  {
    image: symptom7,
    text: "#변비",
    to: "/constipation"
  },
]

export const navItems = [
  { label: "챗봇", to: "/" },
  { label: "건강정보", to: "/healthinfo" },
  { label: "약품정보", to: "/" },
  { label: "고객문의", to: "/" },
];


export const navMenus = [
  {
    label: "회원정보 수정",
    to: "/",
    idx: 1,
  },
  {
    label: "약품 관리",
    to: "/",
    idx: 2,
  },
  {
    label: "건강 정보",
    to: "/",
    idx: 3,
  },
];

export const resourcesLinks = [
  { to: "/Getting-Started", text: "Getting Started" },
  { to: "/Documentation", text: "Documentation" },
  { to: "/Tutorials", text: "Tutorials" },
  { to: "/API-Reference", text: "API Reference" },
  { to: "/Community-Forums", text: "Community Forums" },
];

export const platformLinks = [
  { to: "Features", text: "Features" },
  { to: "Supported-Devices", text: "Supported Devices" },
  { to: "System-Requirements", text: "System Requirements" },
  { to: "Downloads", text: "Downloads" },
  { to: "Release-Notes", text: "Release Notes" },
];

export const communityLinks = [
  { to: "Events", text: "Events" },
  { to: "Meetups", text: "Meetups" },
  { to: "Conferences", text: "Conferences" },
  { to: "Hackathons", text: "Hackathons" },
  { to: "Jobs", text: "Jobs" },
];

export const heroLinks = [
  { to: "start-for-free", text: "start for free" },
  { to: "documentation", text: "documentation" },
];
