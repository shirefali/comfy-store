import { Link, useLoaderData } from "react-router-dom";
const ProductsGrid = () => {
  const { products } = useLoaderData();
  console.log(products);

  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { title, price, image } = product.attributes;
        return <Link></Link>;
      })}
    </div>
  );
};

export default ProductsGrid;
