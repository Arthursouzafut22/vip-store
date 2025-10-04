import getProduct from "@/actions/getProducts/getProduct";
import NotFound from "./not-found";
import * as S from "./styles";
import { colors } from "@/utils/colors";
import GalleryImage from "../components/ui/GalleryImage/GalleryImage";
import { countRatings } from "@/functions/countRatings/countRatings";
import { formatPrice } from "@/utils/formatePrice";
import { IoMdArrowDown } from "react-icons/io";
import { LuTruck } from "react-icons/lu";
import { QuantityController } from "../components/ui/QuantityController/QuantityController";
import ProductList from "../components/ProductList/ProductList";

type searchParamsProps = {
  searchParams: Promise<{ id: number; category: string }>;
};
export default async function Products({ searchParams }: searchParamsProps) {
  const params = await searchParams;
  const { id, category } = params;
  const product = await getProduct();
  const searchProduct = product?.find(
    (i) => Number(i?.id) === Number(id) && i.categoria === category
  );

  if (Number(searchProduct?.id) !== Number(id)) {
    return <NotFound />;
  }

  return (
    <>
      <S.Section>
        <S.BoxProduct>
          {searchProduct && <GalleryImage searchProduct={searchProduct} />}

          <S.WrapperInformation>
            <S.Box1>
              <p className={"vendidos"}>Novo | 100 vendidos</p>
              <span className={"nome"}>{searchProduct?.nome}</span>
              <p className={"estoque"}>Disponível em estoque</p>
              <div className={"container-ratings"}>
                <S.BoxRatings>
                  {countRatings(searchProduct?.avaliacao as number).map(
                    (item, index) => {
                      const Icon = item;
                      return (
                        <Icon key={index} size={21} color={colors?.details} />
                      );
                    }
                  )}
                </S.BoxRatings>
                <span>({searchProduct?.total_avaliacao} avaliações)</span>
              </div>
            </S.Box1>
            <S.Box2>
              <S.WrapperPrice>
                <span>{formatPrice(searchProduct?.preco as number)}</span>
                {searchProduct?.desconto !== 0 && (
                  <div className={"desconto"}>
                    <IoMdArrowDown size={16} />
                    <p>{searchProduct?.desconto}%</p>
                  </div>
                )}
              </S.WrapperPrice>
              {searchProduct?.preco_antigo !== null && (
                <p className={"preco_antigo"}>
                  De:{" "}
                  <span>
                    {formatPrice(searchProduct?.preco_antigo as number)}
                  </span>
                </p>
              )}
              <QuantityController />
              <S.ContainerDescription>
                <span>Descrição</span>
                <p>{searchProduct?.descricao}</p>
              </S.ContainerDescription>
              <S.ContainerButtons>
                <button>{"Adicionar ao carrinho".toUpperCase()}</button>
                <div className="frete">
                  <LuTruck size={30} />
                  <div>
                    <p>
                      Entrega via{" "}
                      <span style={{ fontWeight: "600" }}>VPPackt</span>
                    </p>
                    <p style={{ color: colors.details }}>
                      Envio para{" "}
                      <span style={{ fontWeight: "600" }}>todo brasil</span>
                    </p>
                  </div>
                  <span>Frete grátis</span>
                </div>
              </S.ContainerButtons>
            </S.Box2>
          </S.WrapperInformation>
        </S.BoxProduct>
      </S.Section>
      <div style={{ padding: " 0 1.25rem" }}>
        <ProductList
          styles={{ top: "0", padding: "0" }}
          title={"Produtos recomendados".toUpperCase()}
          category={category}
        />
      </div>
    </>
  );
}
