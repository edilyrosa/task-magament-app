import React from "react";

const productList = [
  {
    name: "Vestido Corto",
    price: "$30",
    description: "Estilo Romantico.",
    image: "https://firebasestorage.googleapis.com/v0/b/news-8dc1b.appspot.com/o/pro-1.jpg?alt=media&token=cbf3a68b-fba6-470b-9947-8654806cb637",
  },
  {
    name: "Crop-Top",
    price: "$15",
    description: "Primaveral",
    image: "https://firebasestorage.googleapis.com/v0/b/news-8dc1b.appspot.com/o/pro-2.jpg?alt=media&token=4258114a-e252-42dd-acfe-954e18219387",
  },
  {
    name: "Blusa Tejida",
    price: "$14",
    description: "Estilo coqueta",
    image: "https://firebasestorage.googleapis.com/v0/b/news-8dc1b.appspot.com/o/pro-3.jpg?alt=media&token=091f6289-894b-41bd-97e7-9cc74e2cec8f",
  },
  {
    name: "Vestido Largo",
    price: "$25",
    description: "Foral.",
    image: "https://firebasestorage.googleapis.com/v0/b/news-8dc1b.appspot.com/o/pro-4.jpg?alt=media&token=78b71ff8-e52a-4492-a60c-098bb4158eff",
  },
];

const Products = ({ products = productList }) => {
  return (
    <section id="products" className="section py-8">
      <h2 className="text-2xl md:text-3xl mb-8 text-center">Nuestros Productos</h2>
      <div className="product-grid flex flex-wrap justify-center gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="product-card border p-4 m-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white shadow-lg rounded-lg flex flex-col justify-between h-[480px]"
          >
            <div className="product-info flex flex-col items-center text-center">
            <img src={product.image} alt={product.name} className="w-[200px] h-[200px] rounded-t-lg mb-4" />
              <h3 className="text-xl mb-2">{product.name}</h3>
              <p className="flex-grow overflow-hidden text-ellipsis">{product.description}</p>
              <p className="text-lg font-bold mt-2">{product.price}</p>
              <a href="https://instagram.com/cutecolitas" target="_blank" rel="noopener noreferrer">
                <button className="mt-4 bg-[#ff3a9c] text-white py-2 px-4 rounded-full">Comprar</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
