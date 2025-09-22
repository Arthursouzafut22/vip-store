import * as S from "./styles";
import { category } from "@/utils/category";
import { useRouter } from "next/navigation";

const CategoryNav = () => {
  const router = useRouter();

  return (
    <S.WrapperCategory>
      <S.NavCategory>
        {category &&
          category.map(({ id, category, icon, slug }) => {
            const Icon = icon;

            return (
              <button key={id} onClick={() => router.push(`/category/${slug}`)}>
                {<Icon size={17} />} {category}
              </button>
            );
          })}
      </S.NavCategory>
    </S.WrapperCategory>
  );
};

export default CategoryNav;
