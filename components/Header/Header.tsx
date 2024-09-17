import styles from "./styles.module.css";
import Link from "next/link";
import burgerBtn from "../../assets/burger-btn.svg";
import { useState } from "react";
import cookie from "js-cookie";
import { useRouter } from "next/router";
import Navbar from "../NavBar/NavBar";

type HeaderProps = {
  logo: string;
  isUserLoggedIn: boolean;
};

const Header = ({ logo, isUserLoggedIn }: HeaderProps) => {
  const [isShowOverlay, setShowOverlay] = useState(false);
  const router = useRouter();

  const signOutUser = () => {
    cookie.remove(process.env.JWT_KEY as string);
    router.push("/login");
  };

  return (
    <>
      <header className={styles.main}>
        <Link href="/" className={styles.logo}>
          {logo}
        </Link>

        {isUserLoggedIn && (
          <div className={styles.rightHandSection}>
            <Navbar onClick={signOutUser} />
            <button
              className={styles.burgerBtn}
              onClick={() => setShowOverlay(!isShowOverlay)}
            >
              <img src={burgerBtn.src} alt="menu button" />
            </button>
          </div>
        )}
      </header>
      {isUserLoggedIn && (
        <div
          className={`${styles.overlay} ${isShowOverlay && styles.showOverlay}`}
        >
          <Navbar onClick={signOutUser} />
        </div>
      )}
    </>
  );
};

export default Header;
