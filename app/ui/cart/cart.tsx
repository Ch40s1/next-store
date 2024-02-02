export default function Cart( {handleCartClick}: any) {

  return (
    <>
      <div className="">
        <div className="flex mb-8">
          <button className="bg-slate-500 w-14 h-14 absolute -top-5 order-2 -left-4 rounded-full" onClick={handleCartClick}>
            X
          </button>
          <h1 className="w-full text-center underline">Cart</h1>
        </div>
        <div>
          <ul className="flex flex-col gap-8">
            <div className="grid grid-cols-4">
              <div className="grid grid-cols-subgrid gap-6">
                <h3>Item</h3>
                <div>Nike cap</div>
                <div>LA cap</div>
              </div>
              <div className="grid grid-cols-subgrid gap-6">
                <h3>Price</h3>
                <div>40.99</div>
                <div>42.99</div>
              </div>
              <div className="grid grid-cols-subgrid gap-6">
                <h3>Shipping</h3>
                <div>19.99</div>
                <div>20.99</div>
              </div>
              <div className="grid grid-cols-subgrid gap-6">
                <h3>Total</h3>
                <div>60.98</div>
                <div>63.98</div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
}
