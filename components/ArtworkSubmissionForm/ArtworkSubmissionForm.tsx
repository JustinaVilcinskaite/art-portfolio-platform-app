import styles from "./styles.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import Button from "../Button/Button";
import { submitWork } from "../../apiCalls/artwork";

const ArtworkSubmissionForm = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [medium, setMedium] = useState("");
  const [creationDate, setCreationDate] = useState("");
  const [imgUrl, setImgUrl] = useState("");

  const [isShowError, setShowError] = useState(false);
  const [isShowSuccess, setShowSuccess] = useState(false);

  const router = useRouter();

  const addWorkToPortfolio = async () => {
    try {
      const response = await submitWork({
        title,
        description,
        medium,
        creationDate,
        imgUrl,
      });

      if (response.status === 201) {
        setShowSuccess(true);
        setShowError(false);
        setTimeout(() => {
          router.push("/");
        }, 2000);
      }
    } catch (err) {
      console.log(err);
      setShowError(true);
    }
  };

  return (
    <div className={styles.main}>
      <h1>Add Work to Portfolio</h1>
      <input
        value={title}
        placeholder="Title"
        type="text"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <textarea
        value={description}
        placeholder="Work Description"
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <input
        value={medium}
        placeholder="Medium (e.g., Painting, Sculpture, Digital Art)"
        type="text"
        onChange={(e) => {
          setMedium(e.target.value);
        }}
      />
      <input
        value={creationDate}
        placeholder="Creation Date"
        type="text"
        onChange={(e) => {
          setCreationDate(e.target.value);
        }}
      />
      <input
        value={imgUrl}
        placeholder="Image URL"
        type="text"
        onChange={(e) => {
          setImgUrl(e.target.value);
        }}
      />

      <Button
        isLoading={false}
        title="Add to Portfolio"
        onClick={() => {
          addWorkToPortfolio();
        }}
      />

      {isShowError && (
        <h5 className={styles.error}>
          All fields are required. Please fill out the form.
        </h5>
      )}
      {isShowSuccess && (
        <h5 className={styles.success}>
          Work added to Portfolio successfully! Redirecting...
        </h5>
      )}
    </div>
  );
};

export default ArtworkSubmissionForm;
