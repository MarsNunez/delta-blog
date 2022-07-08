import Link from 'next/link';
import Image from 'next/image';

const Navbar = ({ current_location }) => {
  return (
    <>
    <section className="border-b flex justify-between items-center py-2 px-6">
      <div className="element-left">
        <Image src="/img/icon-transparent.png" alt="icon" width="44" height="39"/>
      </div>
      <div className="element-mid">
        <Image src="/img/logo-transparent.png" alt="logo" width="192" height="27"/>
      </div>
      <div className="element-right">
        <Link href={'/login'}>
          <a className='border text-white bg-neutral-900 p-2 px-4 rounded-md action_button '>Login</a>
        </Link>
      </div>
    </section>
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

