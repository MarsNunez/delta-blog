import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

const Navbar = ({ current_location, session }) => {

  const router = useRouter();

  return (
    <>
    <section className="border-b grid grid-cols-3 justify-between items-center border py-2 px-6">
      <div className="element-left pl-28">
        <Image src="/img/icon-transparent.png" alt="icon" width="44" height="39"/>
      </div>
      <div className="element-mid flex justify-center">
        <Image src="/img/logo-transparent.png" alt="logo" width="192" height="27"/>
      </div>
      <div className="element-right">
        { session ? (
          <div className='flex px-3 py-1 rounded-md pl-40'>
            <img onClick={() => {router.push('/api/auth/signout')}}  className='w-10 rounded-full cursor-pointer' src={session.user.image} alt="profile-picture" />
            <p className='cursor-default my-auto ml-2'>{session.user.name}</p>
          </div>
        ) : (
          <div className='pl-64'>
            <Link href={'/login'}>
              <a className='border text-white bg-neutral-900 p-2 px-4 rounded-md action_button '>Login</a>
            </Link>
          </div>
        )}
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

