import { PuzzleIcon } from "@heroicons/react/solid";
import { ShareIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Link from "next/link";

const Card = ({ tamano }) => {
  const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consectetur quae amet deserunt atque veritatis fuga soluta culpa tenetur asperiores ducimus, dolorem provident placeat exercitationem. Magnam voluptatum repellat hic atque.';
  
  return ( 
    <Link href={`posts/${1}`}>
    <div className={`flex class_hover cursor-pointer flex-col md:flex-row mb-6`}>
      <div className={`md:w-1/2 main-image ${tamano == 'small' && 'hidden md:block' }`}>
        <Image src={'/img/mine.jpeg'} width='100%' height='60px md:80px' layout='responsive'/>
      </div>

      <div className={`md:w-1/2 mt-3 px-5 pb-3`}>
        <h2 className={`${ tamano ? 'text-lg' : 'text-3xl pt-2'} font-semibold`}>Deep work only happens before lunch </h2>
        {/* <p className={`${ tamano ? 'pt-1 ancho text-gray-600 text-sm' : 'pt-4'}`}><PuzzleIcon width={20} className='inline text-black'/>{tamano == 'small' ? text.slice(0, 180) + '...' : text }</p> */}
        <p className={`${ tamano ? 'pt-1 ancho text-gray-600 text-sm' : 'pt-4'} summary`}><PuzzleIcon width={20} className='inline text-black'/>{text}</p>
        <div className="align-middle pt-2 flex">
          <p style={{'letter-spacing': '1px'}} className="text-xs text-gray-600">{'Marcelo Nunez - Books - JUN 17 2022'.toUpperCase()} <ShareIcon className="inline ml-1" width={15}/></p>
        </div>
      </div>
    </div>
    </Link>
   );
}
 
export default Card;