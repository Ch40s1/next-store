// // /app/ui/cart/page.tsx
// import { useEffect, useState } from 'react';

// function Cart() {
//   const [message, setMessage] = useState('');

//   useEffect(() => {
//     // Fetch the message from the serverless function
//     fetch('/api/database')
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then((data) => setMessage(data.message))
//       .catch((error) => console.error('Error fetching message:', error));
//   }, []); // Run this effect only once when the component mounts

//   return (
//     <div>
//       <h1>Your cart</h1>
//       <div>
//         <p>{message}</p>
//       </div>
//     </div>
//   );
// }

// export default Cart;
