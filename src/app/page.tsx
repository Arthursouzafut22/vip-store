import * as S from "@/utils/page";
import Wrapper from "./components/ui/Wrapper/Wrapper";
import ProductList from "./components/ProductList/ProductList";

export default async function Home() {
  return (
    <S.Home>
      <Wrapper />
      <ProductList category="mouses" title="MOUSES"/>
    </S.Home>
  );
}
