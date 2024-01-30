import ProductMap from "../../ui/products/productMap";
import { fetchAllProductJackets } from "@/app/lib/data";

export default async function Page() {
  const jackets = await fetchAllProductJackets();

  return (
    <>
      <ProductMap productArray={jackets} />
    </>
  );
}
