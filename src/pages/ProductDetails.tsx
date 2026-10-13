import { useParams } from "react-router-dom";
import BackLink from "../components/BackLink";
import { products } from "../data";

function ProductDetails() {
  const { id } = useParams();
  const product = products.find((item) => item.id === id);

  if (!product) {
    return (
      <section className="panel details">
        <BackLink to="/products" label="Back to products" />
        <h1>Product not found</h1>
        <p>We couldn't find the product you're looking for.</p>
      </section>
    );
  }

  return (
    <section className="panel details">
      <BackLink to="/products" label="Back to products" />
      <span className="eyebrow">Product #{product.id}</span>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
    </section>
  );
}

export default ProductDetails;
