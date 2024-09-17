import { ReactNode, useEffect, useState } from "react";
import styles from "./styles.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import { LinkProps } from "../../types/links";
import { useRouter } from "next/router";
import { validateUser as validateUserApi } from "../../apiCalls/user";

type PageTemplateProps = {
  children: ReactNode;
};

const PageTemplate = ({ children }: PageTemplateProps) => {
  // const [links] = useState<LinkProps[]>([
  //   { title: "Login", href: "/login" },
  //   { title: "Add +", href: "/submit-artwork" },
  // ]);

  const [isUserLoggedIn, setUserLoggedIn] = useState(false);
  const router = useRouter();

  const validateUser = async () => {
    try {
      const response = await validateUserApi();

      if (response.status !== 200) {
        router.push("/login");
      }

      setUserLoggedIn(true);
    } catch (err) {
      router.push("/login");
      console.log(err);
    }
  };

  useEffect(() => {
    validateUser();
  }, []);

  return (
    <div className={styles.wrapper}>
      <Header logo="Portfolio Platform" isUserLoggedIn={isUserLoggedIn} />
      <div className={styles.main}>{children}</div>
      <Footer copyrightText="&copy; Portfolio Platform" />
    </div>
  );
};

export default PageTemplate;
