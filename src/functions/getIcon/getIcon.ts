import { LuMouse, LuMonitorStop } from "react-icons/lu";
import { FaRegSquare } from "react-icons/fa";
import { FaKeyboard, FaHeadphones } from "react-icons/fa6";
import { BsFillMusicPlayerFill } from "react-icons/bs";

function getIcon(category: string) {
  switch (category) {
    case "mouses":
      return LuMouse;
    case "mousepads":
      return FaRegSquare;
    case "teclados":
      return FaKeyboard;
    case "fones":
      return FaHeadphones;
    case "speakers":
      return BsFillMusicPlayerFill;
    case "monitores":
      return LuMonitorStop;
    default:
      throw new Error("Error em retorna icon.");
  }
}

export { getIcon };
