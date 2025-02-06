"use client"; // This is necessary for React hooks to work on the client-side

import { useState } from "react";

export default function FileUploader() {
  const [image, setImage] = useState<string | null>(null); // State to store the uploaded image
  const [error, setError] = useState<string | null>(null); // State for error messages

  // Typing the event parameter as a ChangeEvent for an input element
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; // Optional chaining to prevent null errors
    if (file) {
      // Check if the file is an image
      if (!file.type.startsWith("image/")) {
        setError("Please upload a valid image file.");
        return;
      }
      // Check if the file size exceeds 5MB
      if (file.size > 5 * 1024 * 1024) {
        setError("File size must be smaller than 5MB.");
        return;
      }

      setError(null); // Clear any previous error messages

      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result as string); // Set the image as base64 string
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFileChange} />
      {error && <p style={{ color: "red" }}>{error}</p>} {/* Show error message */}
      {image && <img src={image} alt="Uploaded" style={{ width: "200px", marginTop: "10px" }} />}
      <p>Only image files are allowed (max size: 5MB)</p>
    </div>
  );
}
