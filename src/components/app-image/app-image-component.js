import { useEffect, useState } from "react";

const useImage = (fileName) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImage = async () => {
      try {
        const response = await import(`./../../assets/${fileName}`);
        setImage(response.default);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchImage();
  }, [fileName]);

  return {
    loading,
    error,
    image,
  };
};

const Image = ({ fileName, alt, className }) => {
  const { loading, image } = useImage(fileName);

  return (
    <>
      {loading ? (
        <span></span>
      ) : (
        <img src={image} alt={alt} className={className} />
      )}
    </>
  );
};

export default Image;
