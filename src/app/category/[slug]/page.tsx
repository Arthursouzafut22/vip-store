import getProduct from "@/actions/getProducts/getProduct";

export default async function Category({ params }:{ params:{ slug: string } }) {

  const products = await getProduct();
  const productsCategory = products.filter(c => c.categoria === params.slug);
  console.log(productsCategory);

  return (
    <section>
      <h1 style={{color:'#fff'}}>{params.slug}</h1>
    </section>
  );
}
