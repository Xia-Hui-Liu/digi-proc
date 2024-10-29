// import React from 'react';
// import { useCart } from '../context/CartContext';
// import Image from 'next/image';

// const Cart: React.FC = () => {
//   const { cartItems } = useCart();

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
//       {cartItems.length === 0 ? (
//         <p>Your cart is empty.</p>
//       ) : (
//         <ul>
//           {cartItems.map((item, index) => (
//             <li key={index} className="flex items-center justify-between p-2 border-b">
//               <div>
//                 <Image src={item.imageUrl} alt={item.name} className="w-20 h-20 object-cover" />
//                 <p className="font-semibold">{item.name}</p>
//                 <p>{item.price.toLocaleString('sv-SE')} SEK</p>
//               </div>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default Cart;
