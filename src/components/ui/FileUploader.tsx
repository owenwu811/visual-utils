"use client"; // This is necessary for React hooks to work on the client-side

import { useState } from "react";

export default function FileUploader() {
  const [image, setImage] = useState(null); // State to store the uploaded image

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();

      reader.onloadend = () => {
        setImage(reader.result); // Set the image as base64 string
      };

      reader.readAsDataURL(file); // Read the file as a data URL
    } else {
      alert("Please upload a valid image file.");
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {image && <img src={image} alt="Uploaded" style={{ width: "200px", marginTop: "10px" }} />}
      <p>Only image files are allowed</p>
    </div>
  );
}
