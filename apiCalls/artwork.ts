import axios from "axios";
import { getAuthHeaders } from "../utils/api";

type SubmitWorkProps = {
  title: string;
  description: string;
  medium: string;
  creationDate: string;
  imgUrl: string;
};

export const submitWork = async ({
  title,
  description,
  medium,
  creationDate,
  imgUrl,
}: SubmitWorkProps) => {
  const body = {
    title: title,
    description: description,
    medium: medium,
    creationDate: creationDate,
    imgUrl: imgUrl,
  };

  const headers = getAuthHeaders();

  const response = await axios.post(
    `${process.env.SERVER_URL}/artworks`,
    body,
    { headers }
  );
  return response;
};

export const fetchArtworks = async () => {
  const headers = getAuthHeaders();

  const response = await axios.get(
    `${process.env.SERVER_URL}/artworks/creators`,
    {
      headers,
    }
  );

  return response;
};

export const fetchArtwork = async (id: string) => {
  const headers = getAuthHeaders();

  const response = await axios.get(`${process.env.SERVER_URL}/artworks/${id}`, {
    headers,
  });

  return response;
};

export const deleteArtwork = async (id: string) => {
  const headers = getAuthHeaders();

  const response = await axios.delete(
    `${process.env.SERVER_URL}/artworks/${id}`,
    {
      headers,
    }
  );

  return response;
};
