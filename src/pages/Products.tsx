import { Link } from "react-router-dom";
import BackLink from "../components/BackLink";
import { products } from "../data";

function Products() {
  return (
    <section>
      <BackLink to="/" label="Back to sign in" />
      <h1>Products</h1>
      <p className="intro">Browse our everyday essentials.</p>
      <div className="product-grid">
        {products.map((product) => (
          <article className="panel product-card" key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <Link className="text-link" to={`/products/${product.id}`}>
              View details <span aria-hidden="true">→</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Products;
