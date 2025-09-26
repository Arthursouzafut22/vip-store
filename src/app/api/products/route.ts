import getProduct from "@/actions/getProducts/getProduct";

export async function GET() {
  const product = await getProduct();

  return Response.json({ product });
};
