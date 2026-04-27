import './ImageWithDescription.css';
export default function ImageWithDescription({ imageSrc, description }) {
    return (
      <div>
        <img className='homeImage' src={imageSrc} alt={description}  />
        <p className='imageDescription'>{description}</p>
      </div>
    );
  }