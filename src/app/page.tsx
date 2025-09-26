import * as S from "@/utils/page";
import Wrapper from "./components/ui/Wrapper/Wrapper";
import ProductList from "./components/ProductList/ProductList";
import { BannersDiscounts } from "./components/ui/BannersDiscounts/BannersDiscounts";
import { Suspense } from "react";
import { BannerFrete } from "./components/ui/BannerFrete/BannerFrete";

export default async function Home() {
  return (
    <S.Home>
      <Wrapper />
      <Suspense fallback={<p>Carregando.....</p>}>
        <ProductList category="mouses" title="MOUSES" />
      </Suspense>
      <BannersDiscounts />
      <ProductList category="teclado" title="TECLADOS" />
      <BannerFrete />
      <ProductList category="fones" title="FONES" />
    </S.Home>
  );
}
