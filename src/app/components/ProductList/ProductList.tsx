import * as S from "./styles";
import CarroselProduct from "../ui/CarroselProduct/CarroselProduct";
import { ProductsProps } from "@/actions/getProducts/types";
import getProduct from "@/actions/getProducts/getProduct";

type ProductListProps = {
  category: string;
  title: string;
};

export default async function ProductList({ category,title }: ProductListProps) {
  // const ba$eUrl = "http://localhost:3000";
  // const response = await fetch(`${ba$eUrl}/api/products`, {cache:'force-cache'});
  // const { product } = await response.json();
  // const categoryProduct: ProductsProps[] = product?.filter(
  //   (i: ProductsProps) => i?.categoria === category
  // );
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
