import ProductMap from "../../ui/products/productMap";
import { fetchAllProductHat } from "@/app/lib/data";

export default async function Page() {
  const hats = await fetchAllProductHat();

  return (
    <>
      <ProductMap productArray={hats} />
    </>
  );
}
