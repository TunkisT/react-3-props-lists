import IconCard from './IconCard';

const iconsCardsData = [
  {
    icon: 'fa-envelope-open',
    title: 'Learn react',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore odio.',
  },
  {
    icon: 'fa-youtube',
    title: 'Learn online',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore odio.',
  },
  {
    icon: 'fa-facebook',
    title: 'Learn facebook',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore odio.',
  },
  {
    icon: 'fa-linkedin',
    title: 'Learn linkedin',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore odio.',
  },
  {
    icon: 'fa-house',
    title: 'Learn house',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore odio.',
  },
  {
    icon: 'fa-car',
    title: 'Learn drive',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum labore odio.',
  },
];

function IconCardList() {
  return (
    <div className='icon-card-list'>
      <IconCard info={iconsCardsData[0]} />
      <IconCard info={iconsCardsData[1]} />
    </div>
  );
}

export default IconCardList;
