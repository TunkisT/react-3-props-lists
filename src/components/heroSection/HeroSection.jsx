import './heroSection.css';

function HeroSection(props) {
  return (
    <div className='hero-div'>
      <div className='info'>
        <h1>{props.data.title}</h1>
        <h3 className='hero-subtitle'>{props.data.subtitle}</h3>
        <button>{props.data.btnText}</button>
      </div>
    </div>
  );
}

export default HeroSection;
