import { PuzzleIcon } from "@heroicons/react/solid";
import { ShareIcon } from "@heroicons/react/outline";
import Image from "next/image";

const Card = ({ tamano }) => {
  const text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus consectetur quae amet deserunt atque veritatis fuga soluta culpa tenetur asperiores ducimus, dolorem provident placeat exercitationem. Magnam voluptatum repellat hic atque.';
  
  return ( 
    <div className={`flex class_hover cursor-pointer ${tamano && 'mb-6'}`}>
        <div style={{width: `${tamano ? '190px' : '438px'}`, height: `${tamano ? '135px' : '292px'}`, position: 'relative'}} className='w-1/2'>
        <Image src={'/img/mine.jpeg'} layout='fill' />
      </div>

      <div className={`w-1/2  ${tamano ? 'pl-4' : 'pl-12'}`}>
        <h2 className={`${ tamano ? 'text-lg' : 'text-3xl pt-2'} font-bold`}>Deep work only happens before lunch </h2>
        <p className={`${ tamano ? 'pt-1 ancho text-gray-600 text-sm' : 'pt-4'}`}><PuzzleIcon width={20} className='inline text-black'/>{tamano ? text.slice(0, 145) + '...' : text }</p>
        <div className="align-middle pt-2 flex">
          <p style={{'letter-spacing': '1px'}} className="text-xs text-gray-600">{'Marcelo Nunez - Books - JUN 17 2022'.toUpperCase()} <ShareIcon className="inline ml-1" width={15}/></p>
        </div>
      </div>
    </div>
   );
}
 
export default Card;