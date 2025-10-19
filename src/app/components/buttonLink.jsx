import { Link } from "react-router-dom";

export default function ButtonLink({ href, text }) {
  return (
    <Link to={href} className="button-link">
      {text}
    </Link>
  );
}
