"use client";

import { usePathname } from "next/navigation";

const Catalog = () => {
  const pathaname = usePathname();

  return (
    <section>
      <h1>Pagina {pathaname}</h1>
    </section>
  );
};

export default Catalog;
