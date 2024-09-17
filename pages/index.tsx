import PageTemplate from "../components/PageTemplate/PageTemplate";
import CardsWrapper from "../components/CardsWrapper/CardsWrapper";
import { useState, useEffect } from "react";
import { Artwork } from "../types/artworks";
import { fetchArtworks as fetchArtworksApi } from "../apiCalls/artwork";

const MainPage = () => {
  const [artworks, setArtworks] = useState<Artwork[]>([]);

  const fetchArtworks = async () => {
    try {
      const response = await fetchArtworksApi();

      setArtworks(response.data.artworks);
      console.log(response.data.artworks);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchArtworks();
  }, []);

  return (
    <>
      <PageTemplate>
        <CardsWrapper artworks={artworks} />
      </PageTemplate>
    </>
  );
};

export default MainPage;
