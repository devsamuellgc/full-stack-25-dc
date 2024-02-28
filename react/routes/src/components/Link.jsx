import { Link } from "react-router-dom";

export function LinkItem({ path, title }) {
  return (
    <Link className="px-2 py-1 hover:bg-black/20 text-white rounded" to={path}>
      {title}
    </Link>
  );
}
