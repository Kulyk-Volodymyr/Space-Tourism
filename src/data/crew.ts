import douglas from "../assets/crew/image-douglas-hurley.png";
import douglasWebp from "../assets/crew/image-douglas-hurley.webp";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import markWebp from "../assets/crew/image-mark-shuttleworth.webp";
import victor from "../assets/crew/image-victor-glover.png";
import victorWebp from "../assets/crew/image-victor-glover.webp";
import anousheh from "../assets/crew/image-anousheh-ansari.png";
import anoushehWebp from "../assets/crew/image-anousheh-ansari.webp";

export const CREW: Array<{
  position: string;
  name: string;
  info: string;
  image: string;
  imageWebp: string;
}> = [
  {
    position: "Commander",
    name: "Douglas Hurley",
    info: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: douglas,
    imageWebp: douglasWebp,
  },
  {
    position: "Mission Specialist",
    name: "Mark Shuttleworth",
    info: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: mark,
    imageWebp: markWebp,
  },
  {
    position: "Pilot",
    name: "Victor Glover",
    info: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    image: victor,
    imageWebp: victorWebp,
  },
  {
    position: "Flight Engineer",
    name: "Anousheh Ansari",
    info: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: anousheh,
    imageWebp: anoushehWebp,
  },
];
