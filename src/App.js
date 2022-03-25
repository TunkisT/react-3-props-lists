import './App.css';
import Header from './components/header/Header';
import HeroSection from './components/heroSection/HeroSection';

const heroSectionData = {
  title: 'React is great',
  subtitle: 'Not that hart to learn',
  btnText: 'Learn more'
}


function App(props) {
  return (
    <div className='App'>
      <Header />
      <HeroSection data={heroSectionData} />
    </div>
  );
}

export default App;
