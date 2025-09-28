import { IconType } from "react-icons";
import * as S from "./styles";
import { colors } from "@/utils/colors";

type BoxTitleProps = {
  Icon: IconType;
  title: string;
  size: number
};

export const BoxTitle = ({ Icon, title, size }: BoxTitleProps) => {
  return (
    <S.BoxTitle>
      {Icon && <Icon color={colors.fontColor} size={size} />}
      <h1>{title.toUpperCase()}</h1>
    </S.BoxTitle>
  );
};
