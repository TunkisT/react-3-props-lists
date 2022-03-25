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
    icon: 'fa-apple',
    title: 'Learn from mac',
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
      {iconsCardsData.map((cardObj) => (
        <IconCard key={cardObj.title} info={cardObj} />
      ))}
    </div>
  );
}

export default IconCardList;
