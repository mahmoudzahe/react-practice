import { Link } from "react-router-dom";

type BackLinkProps = {
  to: string;
  label: string;
};

function BackLink({ to, label }: BackLinkProps) {
  return (
    <Link className="back-link" to={to}>
      <span aria-hidden="true">←</span>
      {label}
    </Link>
  );
}

export default BackLink;
