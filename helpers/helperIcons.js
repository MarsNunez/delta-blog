import { 
  PuzzleIcon, 
  HeartIcon, 
  BookOpenIcon, 
  ChipIcon, 
  StarIcon 
} from "@heroicons/react/solid";

export default function helperIcons(type) {
  let icon;
  switch (type) {
    case 'life':
      icon = <HeartIcon width={35} className='inline text-black'/>;
      break;
    
    case 'books':
      icon = <BookOpenIcon width={35} className='inline text-black'/>;
      break;

    case 'tech':
      icon = <ChipIcon width={35} className='inline text-black'/>;
      break;

    case 'random':
      icon = <StarIcon width={35} className='inline text-black'/>;
      break;

    default:
      icon = <PuzzleIcon width={35} className='inline text-black'/>;
      break;
  }

  return icon;
}

