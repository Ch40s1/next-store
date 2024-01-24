import ProductMap from "../../ui/products/productMap";
import { fetchAllProductHat } from "@/app/lib/data";

export default async function Page() {
  const hats = await fetchAllProductHat();

  return (
    <>
      <div>
        <h1>Hats</h1>
        <ProductMap productArray={hats} />
      </div>
    </>
  );
}
