import { LuMouse, LuMonitorStop } from "react-icons/lu";
import { FaRegSquare } from "react-icons/fa";
import { FaKeyboard, FaHeadphones } from "react-icons/fa6";
import { BsFillMusicPlayerFill } from "react-icons/bs";
import { IconType } from "react-icons";

type CategoryProps = {
  id: number;
  category: string;
  slug: string;
  icon: IconType;
};

export const category: CategoryProps[] = [
  {
    id: 1,
    category: "Mouses",
    slug: "mouses",
    icon: LuMouse,
  },
  {
    id: 2,
    category: "Mousepads",
    slug: "mousepads",
    icon: FaRegSquare,
  },
  {
    id: 3,
    category: "Teclados",
    slug: "teclados",
    icon: FaKeyboard,
  },
  {
    id: 4,
    category: "Fones",
    slug: "fones",
    icon: FaHeadphones,
  },
  {
    id: 5,
    category: "Speakers",
    slug: "speakers",
    icon: BsFillMusicPlayerFill,
  },
  {
    id: 6,
    category: "Monitores",
    slug: "monitores",
    icon: LuMonitorStop,
  },
];
