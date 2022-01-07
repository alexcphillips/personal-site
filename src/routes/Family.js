import { useEffect, useState } from "react";
import axios from "axios";
import "./Family.css";

export default function FamilyImage() {
  const [images, updateImages] = useState([]);

  async function getImages(isMounted) {
    const res = await axios.get("/familyImagesInfo");

    if (isMounted) {
      updateImages(res.data);
    }

    return () => {
      isMounted = false;
    };
  }

  useEffect(() => {
    getImages(true);
  }, []);

  return (
    <div id="familyImageContainer">
      {images.length === 0
        ? "This is empty."
        : images.map((image) => {
            const { name, position, containerColor, text } = image;
            console.log(image);
            return (
              <div
                className={`familyImage ${position}`}
                style={{ backgroundColor: containerColor }}
                key={name}
              >
                <img src={`familyImages/${name}`} />
                <p className="imageText">{text}</p>
              </div>
            );
          })}
    </div>
  );
}
