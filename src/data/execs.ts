// src/data/execs.ts
import xavier from "../assets/exec_photos/xavier.webp";
import bethany from "../assets/exec_photos/bethany.webp";
import brittany from "../assets/exec_photos/brittany.webp";
import chloe from "../assets/exec_photos/chloe.webp";
import justin from "../assets/exec_photos/justin.webp";
import kyle from "../assets/exec_photos/kyle.webp";
import lucas from "../assets/exec_photos/lucas.webp";
import mathew from "../assets/exec_photos/mathew.webp";
import noah from "../assets/exec_photos/noah.webp";
import sarah from "../assets/exec_photos/sarah.webp";
import vanshika from "../assets/exec_photos/vanshika.webp";
import victor from "../assets/exec_photos/victor.webp";
import placeholder from "../assets/exec_photos/logo.png";


export type Exec = {
  name: string;
  role: string;
  linkedin: string;
  image: ImageMetadata;
};

export const execs: Exec[] = [
  {
    name: "Xavier Lam",
    role: "President",
    linkedin: "https://www.linkedin.com/in/placeholder/",
    image: xavier,
  },
  {
    name: "Bethany Guo",
    role: "Community Director",
    linkedin: "https://www.linkedin.com/in/placeholder/",
    image: bethany,
  },
  {
    name: "Lucas Liu",
    role: "Marketing Director",
    linkedin: "https://www.linkedin.com/in/placeholder/",
    image: lucas,
  },
  {
    name: "Sarah Liang",
    role: "Social Media Director",
    linkedin: "https://www.linkedin.com/in/placeholder/",
    image: sarah,
  },
  {
    name: "Mathew Drexel",
    role: "Treasurer",
    linkedin: "https://www.linkedin.com/in/placeholder/",
    image: mathew,
  },
  {
    name: "Chloe Cheng",
    role: "VP External",
    linkedin: "https://www.linkedin.com/in/placeholder/",
    image: chloe,
  },
  {
    name: "Kyle Van Winkoop",
    role: "Executive at Large",
    linkedin: "https://www.linkedin.com/in/placeholder/",
    image: kyle,
  },
  {
    name: "Victor Thai",
    role: "Web Developer / Web Manager",
    linkedin: "https://www.linkedin.com/in/placeholder/",
    image: victor,
  },
  {
    name: "Justin Galimpin",
    role: "Web Developer / Web Manager",
    linkedin: "https://www.linkedin.com/in/placeholder/",
    image: justin,
  },
  {
    name: "Vanshika Dixit",
    role: "Conference Director",
    linkedin: "https://www.linkedin.com/in/placeholder/",
    image: vanshika,
  },
  {
    name: "Brittany Tsui",
    role: "Graphic Designer",
    linkedin: "https://www.linkedin.com/in/placeholder/",
    image: brittany,
  },
  {
    name: "Noah Cho",
    role: "3D Graphic Designer",
    linkedin: "https://www.linkedin.com/in/placeholder/",
    image: xavier,
  },
  {
    name: "Pedro Novais",
    role: "VP Project Teams",
    linkedin: "https://www.linkedin.com/in/placeholder/",
    image: placeholder,
  },
];
