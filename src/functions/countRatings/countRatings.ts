import { RiStarSLine, RiStarSFill } from "react-icons/ri";
import { IconType } from "react-icons";

export function countRatings(avaliacao: number): IconType[] {
  const starsAvaliation = [
    RiStarSLine,
    RiStarSLine,
    RiStarSLine,
    RiStarSLine,
    RiStarSLine,
  ] as IconType[];

  starsAvaliation?.fill(RiStarSFill, 0, avaliacao);

  return starsAvaliation;
}
