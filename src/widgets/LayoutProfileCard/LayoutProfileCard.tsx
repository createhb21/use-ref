import { Link } from "react-router-dom";
import css from "./LayoutProfileCard.module.css";

export function LayoutProfileCard() {
  return (
    <div className={css.root}>
      <Link to="/login">login</Link>
    </div>
  );
}
