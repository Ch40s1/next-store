import ProductMap from "../../ui/products/productMap";
import { fetchAllProductShirt } from "@/app/lib/data";

export default async function Page() {
  const shirts = await fetchAllProductShirt();

  return (
    <>
      <div>
        <h1>Shirts</h1>
        <ProductMap productArray={shirts} />
      </div>
    </>
  );
}
