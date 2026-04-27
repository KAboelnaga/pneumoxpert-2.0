import MainHeader from "../../Components/Utils/MainHeader/MainHeader";
import xrayImage from "../../assets/HomeImages/xray.png";
import aiImage from "../../assets/HomeImages/ai.png";
import secondAiImage from "../../assets/HomeImages/ai2.png";
import resultImage from "../../assets/HomeImages/result.png";
import uploadImage from "../../assets/HomeImages/upload.png";
import secureImage from "../../assets/HomeImages/secure.png";
import efficientImage from "../../assets/HomeImages/fast.png";
import userFriendlyImage from "../../assets/HomeImages/user.png";
import ImageWithDescription from "../../Components/Utils/ImageWithDescription/ImageWithDescription";
import "./Home.css";
import SubHeader from "../../Components/Utils/SubHeader/SubHeader";
export default function Home() {
  return (
    <div>
      <div className="intro">
      <div className="horizontal-line"></div>
        <img id="animatedXray" src={xrayImage} alt="Description of the"></img>
        <div>
          <MainHeader>
            Welcome to our advanced Pneumonia Chest X-ray AI Scan platform!
          </MainHeader>
          <h3>
            Discover peace of mind with our cutting-edge technology designed to
            analyze chest X-rays swiftly and accurately. Our AI model is trained
            to detect signs of pneumonia, providing you with rapid insights into
            your health.
          </h3>
        </div>
      </div>
      <SubHeader>How It Works</SubHeader>
      <div className="container">
        <ImageWithDescription imageSrc={uploadImage} description="Upload Your X-ray" />
        <ImageWithDescription imageSrc={secondAiImage} description="AI Analysis" />
        
        <ImageWithDescription imageSrc={resultImage} description="Instant Results" />
      </div>
      <SubHeader>Our Website Perks</SubHeader>
      <div className="container">
        <ImageWithDescription imageSrc={aiImage} description="Cutting-Edge AI Technology" />
        <ImageWithDescription imageSrc={userFriendlyImage} description="User-Friendly Interface" />
        <ImageWithDescription imageSrc={efficientImage} description="Fast and Efficient Results" />
        <ImageWithDescription imageSrc={secureImage} description="Secure and Confidential" />
      </div>
      <SubHeader>Join Us in the Healthcare Revolution</SubHeader>
      <p id="finalText">
        Whether you're a healthcare provider or an individual taking charge of
        your health, PneumoXpert is here to support you. Sign up today and
        experience the seamless integration of medical expertise and artificial
        intelligence.
      </p>
    </div>
  );
}
