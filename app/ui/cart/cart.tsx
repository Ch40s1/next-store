import { fetchCustomers } from "@/app/lib/data";

export default async function Cart() {
  const customers = await fetchCustomers();
  return (
    <>
      <div>
        <h1>Cart</h1>
        <div>
          <div>
            <h2>Customers</h2>
            <p>{customers[2].name}</p>
            <ul>
              {customers[2].items.map((item) => (
                <li key={customers[2].id}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
