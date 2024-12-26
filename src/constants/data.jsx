import symptom1 from "../assets/symptom/symptom1.jpg";
import symptom2 from "../assets/symptom/symptom2.jpg";
import symptom3 from "../assets/symptom/symptom3.jpg";
import symptom4 from "../assets/symptom/symptom4.jpg";
import symptom5 from "../assets/symptom/symptom5.jpg";
import symptom6 from "../assets/symptom/symptom6.jpg";
import symptom7 from "../assets/symptom/symptom7.jpg";

// 메인 헤더 카테고리
export const navItems = [
  { label: "챗봇", to: "/chat" },
  { label: "약품정보", to: "/mediinfo" },
  { label: "건강정보", to: "/healthinfo" },
  { label: "건의사항", to: "/service" },
];

// 메인 자주 나타나는 증상
export const symptom = [
  {
    id: 0,
    image: symptom1,
    text: "#두통",
    to: "/Symptomdetail",
  },
  {
    id: 1,
    image: symptom2,
    text: "#기침",
    to: "/Symptomdetail",
  },
  {
    id: 2,
    image: symptom3,
    text: "#피부발진",
    to: "/Symptomdetail",
  },
  {
    id: 3,
    image: symptom4,
    text: "#미열",
    to: "/Symptomdetail",
  },
  {
    id: 4,
    image: symptom5,
    text: "#근육통",
    to: "/Symptomdetail",
  },
  {
    id: 5,
    image: symptom6,
    text: "#불면증",
    to: "/Symptomdetail",
  },
  {
    id: 6,
    image: symptom7,
    text: "#변비",
    to: "/Symptomdetail",
  },
];