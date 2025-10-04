"use client";

import Carrosel from '@/app/components/ui/Carrosel/Carrosel'
import CategoryNav from "../CategoryNav/CategoryNav";
import useMedia from "@/hooks/useMedia";

const Wrapper = () => {
  const { mobile } = useMedia("(max-width:767px)");

  return (
    <div style={{ padding: mobile ? "30px 1.25rem" : "0 1.25rem" }}>
      <Carrosel />
      <CategoryNav />
    </div>
  );
};

export default Wrapper;
