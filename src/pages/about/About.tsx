function About() {

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen">
        <figure className="max-w-lg mx-auto">
          <img
        className="w-[50rem] rounded-lg"
        src='https://media.tenor.com/FrXVfMs5tg0AAAAM/apa-coba-haerin.gif'
        alt='APA COBA'
        loading="lazy"
          />
          <figcaption className="mt-2 text-xl font-bold text-center text-gray-500 dark:text-gray-400">
            APA COBA!!
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

export default About;

// import { useEffect, useState} from "react";

// export default function ProductList() {
//   const [products, setProducts] = useState([]);
//   const [load, setLoad] = useState(false);

//   function handleClick(){
//     setLoad(true)
//   }

//   useEffect(() => {
//     async function fetchProducts() {
//       const response = await fetch("/urlGif.json");
//       const data = await response.json();
//       setProducts(data);
//     }

//     if(load){
//       fetchProducts();
//     }
//   }, [load]);

//   return (
//     <>
//       <h1>Product List</h1>
//       <button onClick={handleClick}>Load Products</button>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             {product.name} - {product.url}
//           </li>
//         ))}
//       </ul>

//     </>
//   );
// }
