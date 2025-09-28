import * as S from "./styles";
import CarroselProduct from "../ui/CarroselProduct/CarroselProduct";
import getProduct from "@/actions/getProducts/getProduct";

type ProductListProps = {
  category: string;
  title: string;
};

export default async function ProductList({
  category,
  title,
}: ProductListProps) {
  const product = await getProduct();
  const categoryProduct = product?.filter((i) => i?.categoria === category);

  return (
    <S.Section>
      <S.Wrapper>
        <h3>{title}</h3>
        <S.ContainerCards>
          <CarroselProduct categoryProduct={categoryProduct} />
        </S.ContainerCards>
      </S.Wrapper>
    </S.Section>
  );
}
