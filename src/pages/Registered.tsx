import { Link, Navigate, useLocation } from "react-router-dom";
import BackLink from "../components/BackLink";

function Registered() {
  const location = useLocation();
  const name = (location.state as { name?: string } | null)?.name;

  if (!name) {
    return <Navigate to="/register" replace />;
  }

  return (
    <section className="panel message-panel">
      <BackLink to="/register" label="Back to registration" />
      <span className="success-mark" aria-hidden="true">✓</span>
      <h1>Details submitted</h1>
      <p>Thanks, {name}. Your details passed validation.</p>
      <p className="form-note">This is a frontend-only demo. No account was created.</p>
      <Link className="button" to="/">Go to sign in</Link>
    </section>
  );
}

export default Registered;
