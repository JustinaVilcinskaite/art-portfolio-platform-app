import styles from "./styles.module.css";
import Card from "../Card/Card";
import { Artwork } from "../../types/artworks";

type CardsWrapperProps = {
  artworks: Artwork[];
};

const CardsWrapper = ({ artworks }: CardsWrapperProps) => {
  return (
    <div className={styles.main}>
      {artworks.map((artwork) => {
        return (
          <Card
            key={artwork.id}
            id={artwork.id}
            imgUrl={artwork.imgUrl}
            title={artwork.title}
          />
        );
      })}
    </div>
  );
};

export default CardsWrapper;
