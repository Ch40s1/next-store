export default function Cart( {handleCartClick}: any) {

  return (
    <>
    {/* This is going to be start of the cart planning */}
    {/* First I need to get a login setup
    this will allow me to then query a user from the session and
    use its id to query the cart items from the database
    I will then need to display the items in the cart and allow the user to remove items from the cart
    I will also need to display the total of the cart
    I will also need to allow the user to checkout and pay for the items in the cart
    I will also need to allow the user to add items to the cart from the product page
    I will also need to allow the user to update the quantity of the items in the cart
    I will also need to allow the user to add a discount code to the cart
     in order to ge the user i will need to use the useSession hook from next-auth. This means setting up authentication in the app
    */}
     */}
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
