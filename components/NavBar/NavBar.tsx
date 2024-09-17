import Link from "next/link";
import styles from "./styles.module.css";
import Button from "../Button/Button";

type NavbarProps = {
  onClick: () => void;
};

const Navbar = ({ onClick }: NavbarProps) => {
  return (
    <nav className={styles.main}>
      <ul>
        <li>
          <Link href="/submit-artwork">Add +</Link>
        </li>
        <li>
          <Button
            title="Sign out"
            onClick={onClick}
            isLoading={false}
            type="SIGNOUT"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
