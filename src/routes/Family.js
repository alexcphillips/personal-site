import { useEffect, useState } from "react";
import axios from "axios";
import "./Family.css";

// changing node_env to development fixes
const serverStr =
  process.env.NODE_ENV === "development" ? "http://localhost:3001" : "";

export default function FamilyImage() {
  const [images, updateImages] = useState([]);

  async function getImages(isMounted) {
    const res = await axios.get(`${serverStr}/familyImagesInfo`);

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
    <div id="familyContainer">
      <h1 id="head">This is Isaac.</h1>

      <div id="body">
        <p className="bodyText">
          You can often find him at the equestarian center near out house,
          pursuing his dreams of mastering the art of horseback riding.
        </p>

        <div className={"familyImage"} key={images[0] && images[0].name}>
          <img src={`familyImages/${images[0] && images[0].name}`} />
        </div>

        <p className="bodyText">
          Isaac met his favorite horse, Tyke, at the local equestarian center.
          He was a large horse, towering over the boy. But after a few sessions
          horseback riding Isaac and his horse companion had forged a deep
          understanding of one another and an unbreakable bond.
        </p>

        <div className={"familyImage"} key={images[1] && images[1].name}>
          <img src={`familyImages/${images[1] && images[1].name}`} />
        </div>

        <p className="bodyFoot">
          It's quite impressive that Isaac, an 8 year old boy, could set his
          mind to his goals and develop his horseback riding skills so quickly.
          I belive that if he continues to follow his passion, Isaac will become
          a truly remarkable horseback rider.
        </p>
      </div>
    </div>
  );
}
