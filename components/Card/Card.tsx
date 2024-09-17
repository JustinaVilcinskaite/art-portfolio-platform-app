import styles from "./styles.module.css";
import Link from "next/link";

type CardProps = {
  imgUrl: string;
  title: string;
  id: string;
};

const Card = ({ imgUrl, title, id }: CardProps) => {
  return (
    <Link href={`/artwork/${id}`} className={styles.main}>
      <img src={imgUrl} alt="artwork image" />
      <h3>{title}</h3>
    </Link>
  );
};

export default Card;
