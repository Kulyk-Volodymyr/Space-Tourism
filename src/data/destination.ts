import imgMoon from "../assets/destination/image-moon.png";
import imgMoonWebp from "../assets/destination/image-moon.webp";
import imgMars from "../assets/destination/image-mars.png";
import imgMarsWebp from "../assets/destination/image-mars.webp";
import imgEuropa from "../assets/destination/image-europa.png";
import imgEuropaWebp from "../assets/destination/image-europa.webp";
import imgTitan from "../assets/destination/image-titan.png";
import imgTitanWebp from "../assets/destination/image-titan.webp";

export const DESTINATION: Array<{
  name: string;
  info: string;
  distance: string;
  time: string;
  image: string;
  imageWebp: string;
}> = [
  {
    name: "Moon",
    info: "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    distance: "384,400 km",
    time: "3 days",
    image: imgMoon,
    imageWebp: imgMoonWebp,
  },
  {
    name: "Mars",
    info: "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    distance: "225 mil. km",
    time: "9 months",
    image: imgMars,
    imageWebp: imgMarsWebp,
  },
  {
    name: "Europa",
    info: "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    distance: "628 mil. km",
    time: "3 years",
    image: imgEuropa,
    imageWebp: imgEuropaWebp,
  },
  {
    name: "Titan",
    info: "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    distance: "1.6 bil. km",
    time: "7 years",
    image: imgTitan,
    imageWebp: imgTitanWebp,
  },
];
