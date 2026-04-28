import './ImageWithDescription.css';
export default function ImageWithDescription({ imageSrc, description }) {
    return (
      <div>
        <img className='homeImage' src={imageSrc} alt={description}  />
        <p className='imageDescription' style={{margin: '1vh'}}>{description}</p>
      </div>
    );
  }