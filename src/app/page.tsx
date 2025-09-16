"use client";

import * as S from "@/utils/page";
import Carrosel from "./components/ui/carrosel/Carrosel";
import useMedia from "@/hooks/useMedia";

export default function Home() {
  const { mobile } = useMedia("(max-width:767px)");
  return (
    <S.Home>
      <div style={{ padding: mobile ? "30px 1.25rem" : "0 1.25rem" }}>
        <Carrosel />
      </div>
    </S.Home>
  );
}
