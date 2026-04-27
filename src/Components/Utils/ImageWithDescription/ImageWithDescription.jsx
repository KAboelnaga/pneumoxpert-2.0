import './ImageWithDescription.css';
export default function ImageWithDescription({ imageSrc, description }) {
    return (
      <div>
        <img src={imageSrc} alt={description}  />
        <p>{description}</p>
      </div>
    );
  }