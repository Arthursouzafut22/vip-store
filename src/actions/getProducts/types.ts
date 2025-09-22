export type CategoryProps =
  | "mouses"
  | "mousepads"
  | "teclados"
  | "fones"
  | "speakers"
  | "monitores";

export type ProductsProps = {
  id: number;
  nome: string;
  preco: number;
  avaliacao: number;
  fotos: string[];
  desconto: number;
  categoria: CategoryProps;
  descricao: string;
  preco_antigo: number | null;
  total_avaliacao: number;
};
