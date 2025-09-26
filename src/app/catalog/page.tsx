"use client";

import { category } from "@/utils/category";
import * as S from "./styles";
import Image from "next/image";
import { LuShapes } from "react-icons/lu";
import { useRouter } from "next/navigation";

const Catalog = () => {
  const router = useRouter();

  return (
    <S.Section>
      <S.WrapperCatalog>
        <S.BoxTitle>
          <LuShapes size={22} />
          <h1>{"Catálogo".toUpperCase()}</h1>
        </S.BoxTitle>

        <S.WrapperCategory>
          {category &&
            category.map((c) => (
              <S.CardCategory
                key={c.id}
                onClick={() => router.push(`/category/${c.slug}`)}
              >
                <div className="wrapper-bg">
                  <Image
                    src={c.img}
                    alt={c.category}
                    width={140}
                    height={104}
                  />
                </div>
                <p>{c.category}</p>
              </S.CardCategory>
            ))}
        </S.WrapperCategory>
      </S.WrapperCatalog>
    </S.Section>
  );
};

export default Catalog;
