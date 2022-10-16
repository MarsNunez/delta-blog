import Image from "next/image";
import helperIcons from '../helpers/helperIcons'

const Info = () => {
  return ( 
    <div className="flex pt-8 items-center info-container"> 
      <div className="info-left flex">
        <Image src={'/img/face.png'} layout='fixed' width={40} height={40} className='rounded-lg'/>
        <div className="info-content flex flex-col justify-center pl-2">
          <h4 className="text-md leading-none mb-1 font-semibold">Sebastian Nunez</h4>
          <p className="leading-none text-gray-500">13 Octover 2022</p>
        </div>
      </div>
      <div className="info-right flex items-center">
        {helperIcons('random')}
        
        <h3 className="text-2xl font-semibold ml-2">Life</h3>
      </div>
    </div>
   );
}
 
export default Info;