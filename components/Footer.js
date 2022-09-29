import Image from "next/image";
import { useRouter } from "next/router";

const Footer = () => {

  const router = useRouter();

  return ( 
    <div className="bg-black text-white mt-8 py-10">
      <div className="wrapper text-center">
        <div className="element-mid flex justify-center">
          <Image className="" src="/img/white-logo-transparent.png" alt="logo" width="260" height="35"/>
        </div>
        <p className="mt-7 mb-3">Copyright © 2022</p>
        <p>By Marcelo Nunez ☘️</p>

        <i onClick={() => router.push('https://github.com/NASebastian')} className="lni lni-github-original mx-2 text-2xl mt-4 cursor-pointer"></i>
        <i onClick={() => router.push('https://twitter.com/Sebastian__Dev')} className="lni lni-twitter-original mx-2 text-2xl mt-4 cursor-pointer"></i>
        <i onClick={() => router.push('https://github.com/NASebastian')} className="lni lni-youtube mx-2 text-2xl mt-4 cursor-pointer"></i>
      </div>
    </div>
   );
}
 
export default Footer;

