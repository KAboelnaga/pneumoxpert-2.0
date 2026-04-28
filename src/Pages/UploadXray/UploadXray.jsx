import { useState } from "react";
import './UploadXray.css'
export default function UploadXray() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [dragging, setDragging] = useState(false);

  // Handle file selection
  function handleImageChange(file) {
    if (!file || !file.type.startsWith("image/")) return;

    setUploadedImage(file);
    setPrediction(null);

    const imageUrl = URL.createObjectURL(file);
    setPreview(imageUrl);
  }

  // Drag & drop handlers
  function handleDrop(e) {
    e.preventDefault();
    setDragging(false);

    const file = e.dataTransfer.files[0];
    handleImageChange(file);
  }

  function handleDragOver(e) {
    e.preventDefault();
    setDragging(true);
  }

  function handleDragLeave() {
    setDragging(false);
  }

  // Upload to backend
  async function handleImageUpload(e) {
    e.preventDefault();

    if (!uploadedImage) return;

    const formData = new FormData();
    formData.append("image_data", uploadedImage);

    try {
      const res = await fetch("http://localhost:5000/", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");

      const data = await res.json();
      setPrediction(data["Predicted class"]);
    } catch (err) {
      console.error(err);
    }
  }

  function handleRemove() {
    setUploadedImage(null);
    setPreview(null);
    setPrediction(null);
  }

  return (
    <div id="container">
      <form className="dropzone-box" onSubmit={handleImageUpload}>
        <h2>Upload Xray for diagnosis</h2>
        <p  style={{ margin: "0" }}>Attach your xray</p>

        <div
          className={`dropzone-area ${dragging ? "dropzone--over" : ""}`}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
        >
          {!preview && <p style={{ margin: "0", marginBottom: "2rem" }}>Click to upload or drag and drop</p>}

          {preview && (
            <img src={preview} alt="preview" className="preview-img" />
          )}

          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e.target.files[0])}
          />

          <p className="message" style={{ margin: "0" }}> 
            {uploadedImage
              ? `${uploadedImage.name}, ${uploadedImage.size} bytes`
              : "No Files Selected"}
          </p>
        </div>

        <div className="dropzone-actions">
          <button type="button" onClick={handleRemove}>
            Remove
          </button>

          <button type="submit" disabled={!uploadedImage}>
            Upload
          </button>
        </div>
      </form>

      {prediction && (
        <div>
          <h2>AI Model Prediction:</h2>
          <p>{prediction}</p>
        </div>
      )}
    </div>
  );
}