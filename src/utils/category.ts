import { LuMouse, LuMonitorStop } from "react-icons/lu";
import { FaRegSquare } from "react-icons/fa";
import { FaKeyboard, FaHeadphones } from "react-icons/fa6";
import { BsFillMusicPlayerFill } from "react-icons/bs";
import { IconType } from "react-icons";

type CategoryProps = {
  id: number;
  category: string;
  slug: string;
  img: string;
  icon: IconType;
};

export const category: CategoryProps[] = [
  {
    id: 1,
    category: "Mouses",
    slug: "mouses",
    img: "/category/mouse.png",
    icon: LuMouse,
  },
  {
    id: 2,
    category: "Mousepads",
    slug: "mousepads",
    img: "/category/mousepad.png",
    icon: FaRegSquare,
  },
  {
    id: 3,
    category: "Teclados",
    slug: "teclados",
    img: "/category/teclado.png",
    icon: FaKeyboard,
  },
  {
    id: 4,
    category: "Fones",
    slug: "fones",
    img: "/category/fone.png",
    icon: FaHeadphones,
  },
  {
    id: 5,
    category: "Speakers",
    slug: "speakers",
    img: "/category/speaker.png",
    icon: BsFillMusicPlayerFill,
  },
  {
    id: 6,
    category: "Monitores",
    slug: "monitores",
    img: "/category/monitor.png",
    icon: LuMonitorStop,
  },
];
