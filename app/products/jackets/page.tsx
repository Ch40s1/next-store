import ProductMap from "../../ui/products/productMap";
import { fetchAllProductJackets } from "@/app/lib/data";

export default async function Page() {
  const jackets = await fetchAllProductJackets();

  return (
    <>
      <div>
        <h1>Jackets</h1>
        <ProductMap productArray={jackets} />
      </div>
    </>
  );
}
