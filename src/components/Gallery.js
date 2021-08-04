import { useState, useEffect } from "react";
import axios from "axios";

import Image from "./Image";

import "./style.min.css";

const Gallery = () => {
  const [images, getImages] = useState([]);

  const fetchImages = async () => {
    const imageFiles = await axios.get("http://localhost:8000/image");
    getImages(imageFiles.data);
  };

  useEffect(() => {
    fetchImages();
  }, []);

  return (
    <div className="gallery">
      <h2 className="section-title">Gallery</h2>
      {images.map((i) => (
        <div key={i._id}>
          <h3>{i.title}</h3>
          <Image item={i} />
        </div>
      ))}
    </div>
  );
};

export default Gallery;
