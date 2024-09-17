import styles from "./styles.module.css";
import Button from "../Button/Button";
import Modal from "../Modal/Modal";

import { useRouter } from "next/router";
import { useState } from "react";
import { deleteArtwork as deleteArtworkApi } from "../../apiCalls/artwork";

type ArtworkProps = {
  id: string;
  imgUrl: string;
  title: string;
  description: string;
  medium: string;
  creationDate: number;
};

const Artwork = ({
  id,
  imgUrl,
  title,
  description,
  medium,
  creationDate,
}: ArtworkProps) => {
  const router = useRouter();

  const [isModalOpen, setModalOpen] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);

  // const openModal = () => {
  //   setModalOpen(true);
  // };

  // const closeModal = () => {
  //   setModalOpen(false);
  // };

  const deleteArtwork = async (id: string) => {
    try {
      const response = await deleteArtworkApi(id);

      if (response.status === 200) {
        setIsDeleted(true);

        setTimeout(() => {
          setModalOpen(false);
          router.push("/");
        }, 2000);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.main}>
      <div className={styles.imgWrapper}>
        <img src={imgUrl} alt="artwork image" />
      </div>
      <div className={styles.rightHandWrapper}>
        <div className={styles.artworkInfo}>
          <h2>{title}</h2>
          <p>{description}</p>
          <h3>{medium}</h3>
          <h3>{creationDate}</h3>
        </div>

        <Button
          title="Delete"
          // onClick={openModal}
          onClick={() => setModalOpen(true)}
          isLoading={false}
          type="DANGER"
        />
      </div>
      {/* 
      {isModalOpen && (
        <Modal
          text="Are you sure you want to delete this work?"
          onConfirm={deleteArtwork}
          onCancel={() => {
            setModalOpen(false);
          }}
          // onCancel={closeModal}
        />
      )} */}

      {isModalOpen && (
        <Modal
          text={
            isDeleted
              ? "The work has been successfully deleted."
              : "Are you sure you want to delete this work?"
          }
          onConfirm={
            !isDeleted ? () => deleteArtwork(id) : () => setModalOpen(false)
          }
          onCancel={() => setModalOpen(false)}
          isDeleted={isDeleted}
        />
      )}
    </div>
  );
};

export default Artwork;
