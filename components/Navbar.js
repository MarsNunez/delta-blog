import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Navbar = ({ current_location }) => {

  const router = useRouter();

  return (
    <>
    <section className="navbar-class grid grid-cols-3 justify-between items-center md:py-2 px-6 max-w-7xl mx-auto my-2">
      <div className="element-left">
        <Image src="/img/icon-transparent.png" alt="icon" width="44" height="39"/>
      </div>
      <div className="element-mid mx-auto flex justify-center">
        <Link href='/'>
          <a>
            <Image src="/img/logo-transparent.png" alt="logo" width="200" height="28" />
          </a>
        </Link>
      </div>
      <div className="element-right">
        <div className='flex justify-end'>
            <i onClick={() => router.push('https://github.com/NASebastian')} className="lni lni-github-original mx-2 text-2xl cursor-pointer"></i>
            <i onClick={() => router.push('https://twitter.com/Sebastian__Dev')} className="lni lni-twitter-original mx-2 text-2xl cursor-pointer"></i>
            <i onClick={() => router.push('https://github.com/NASebastian')} className="lni lni-youtube mx-2 text-2xl cursor-pointer"></i>
        </div>
      </div>
    </section>
    <div className='border-b'></div>
    <section className='border-b'>
      <div className="links__container mx-auto w-fit margin-zero flex">
        <Link href={'/'}>
          <p className={`transition duration-100 transform lg:hover:scale-110 cursor-pointer
             py-4 mx-12 border-2 border-transparent ${ current_location == 'home' ? 'active' : ''}`}>Home</p>
        </Link>
        <Link href={'/posts'}>
          <p className={`transition duration-100 transform lg:hover:scale-110 cursor-pointer
             py-4 mx-12 border-2 border-transparent ${ current_location == 'posts' ? 'active' : ''}`}>Posts</p>
        </Link>
        <Link href={'/about'}>
          <p className={`transition duration-100 transform lg:hover:scale-110 cursor-pointer
             py-4 mx-12 border-2 border-transparent ${ current_location == 'about' ? 'active' : ''}`}>About</p>
        </Link>
      </div>
    </section>
    </>
  );
}

export default Navbar;

