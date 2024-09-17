import { useEffect, useState } from "react";
// import cookie from "js-cookie";
import { useRouter } from "next/router";
import { Artwork } from "../../types/artworks";
import PortfolioItem from "../../components/PortfolioItem/PortfolioItem";
import PageTemplate from "../../components/PageTemplate/PageTemplate";
import { fetchArtwork as fetchArtworkApi } from "../../apiCalls/artwork";

const ArtworkPage = () => {
  const [artwork, setArtwork] = useState<Artwork | null>(null);

  const router = useRouter();

  const fetchArtwork = async (id: string) => {
    try {
      const response = await fetchArtworkApi(id);

      console.log(response.data.artwork);
      setArtwork(response.data.artwork);
    } catch (err) {
      console.error("error", err);
    }
  };

  useEffect(() => {
    router.query.id && fetchArtwork(router.query.id as string);
  }, [router.query.id]);

  return (
    <PageTemplate>
      <div>
        {artwork && (
          <PortfolioItem
            id={artwork.id}
            imgUrl={artwork.imgUrl}
            title={artwork.title}
            description={artwork.description}
            medium={artwork.medium}
            creationDate={artwork.creationDate}
          />
        )}
      </div>
    </PageTemplate>
  );
};

export default ArtworkPage;
