import { useLoaderData } from "react-router-dom";
import { formatPrice, customFetch, generateAmountOptions } from "../utils";
import { Link } from "react-router-dom";
import { useState } from "react";

export const loader = async ({ params }) => {
  const response = await customFetch(`/products/${params.id}`);
  return { product: response.data.data };
};

const SingleProduct = () => {
  const { product } = useLoaderData();
  const { image, title, price, description, colors, company } =
    product.attributes;
  const dollarsAmount = formatPrice(price);

  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  return (
    <section>
      <div className="text-md breadcrumbs">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li to="/products">Products</li>
        </ul>
      </div>
      {/* PRODUCT */}
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <img
          src={image}
          alt={title}
          className="w-96 h-96 object-cover rounded-lg lg:w-full m-auto"
        />
        <div className="text-center lg:text-start">
          <h1 className="capitalize text-3xl font-bold">{title}</h1>
          <h4 className="text-xl my-3 font-bold">{company}</h4>
          <span className="text-xl">{dollarsAmount}</span>
          <p className="mt-8 text-xl leading-8">{description}</p>
          <div className="mt-6">
            <h4 className="text-md tracking-wider font-medium capitalize">
              colors
            </h4>
            {/* COLORS */}
            <div className="mt-4">
              {colors.map((color) => {
                return (
                  <button
                    key={color}
                    type="button"
                    className={`badge h-6 w-6 mr-2 ${
                      color === productColor && "border-[3px] border-secondary"
                    }`}
                    style={{ backgroundColor: `${color}` }}
                    onClick={() => setProductColor(color)}
                  ></button>
                );
              })}
            </div>
            {/* AMOUNT */}
            <div className="form-control w-full max-w-xs mt-4">
              <label className="label" htmlFor="label">
                <h4 className="capitalize text-md font-medium tracking-wider">
                  amount
                </h4>
              </label>
              <select
                className="select select-secondary selected-bordered select-md"
                id="amount"
                value={amount}
                onChange={handleAmount}
              >
                {generateAmountOptions(20)}
              </select>
            </div>
            {/* CART BUTTON */}
            <div className="mt-10">
              <button
                className="btn btn-secondary btn-md capitalize"
                onClick={() => console.log("add to bag")}
              >
                add to bag
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
