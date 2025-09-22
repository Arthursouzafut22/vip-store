"use server";

import { supabase } from "@/app/lib/supabaseClient";
import { ProductsProps } from "./types";

export default async function getProduct(): Promise<ProductsProps[]> {
  const { data, error } = await supabase.from("produtos").select("*");

  if (error) ["Error em fazer consulta no banco."];
  return data as ProductsProps[];
}
