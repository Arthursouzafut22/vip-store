import getProduct from "@/actions/getProducts/getProduct";
import * as S from "./styles";
import ProductCard from "@/app/components/ui/ProductCard/ProductCard";
import { BoxTitle } from "@/app/components/ui/BoxTitle/BoxTitle";
import { getIcon } from "@/functions/getIcon/getIcon";

type CategoryProps = {
  params: { slug: string };
};

export default async function Category({ params }: CategoryProps) {
  const products = await getProduct();
  const productsCategory = products?.filter(
    ({ categoria }) => categoria === params.slug
  );

  return (
    <S.Section>
      <S.WrapperCategory>
        <BoxTitle
          Icon={getIcon(params.slug)!}
          title={params.slug.toUpperCase()}
          size={16}
        />
        <S.ContainerProducts>
          {productsCategory &&
            productsCategory.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
        </S.ContainerProducts>
      </S.WrapperCategory>
    </S.Section>
  );
}
