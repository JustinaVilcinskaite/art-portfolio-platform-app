import styles from "./styles.module.css";

type FooterProps = {
  copyrightText: string;
};

const Footer = ({ copyrightText }: FooterProps) => {
  return <div className={styles.main}>{copyrightText}</div>;
};

export default Footer;
