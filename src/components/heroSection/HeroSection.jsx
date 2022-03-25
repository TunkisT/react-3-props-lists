import Button from '../UI/Button';
import './heroSection.css';

function HeroSection(props) {
  return (
    <div className='hero-div'>
      <div className='info'>
        <h1>{props.data.title}</h1>
        <h3 className='hero-subtitle'>{props.data.subtitle}</h3>
        <button>{props.data.btnText}</button>
        <Button name={props.data.btnText} color ='red'/>
        <Button name={props.data.btnText} color ='grey' type='sm'/>
      </div>
    </div>
  );
}

export default HeroSection;
