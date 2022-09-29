import Layout from "../hocs/Layout";
import { useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

const Login = () => {

  const router = useRouter();

  const usenameRef = useRef(null);
  const passwordRef = useRef(null);
  const [error, setError] = useState(false);

  const handleSubmit = e => {
    e.preventDefault();
    if (!usenameRef.current.value || !passwordRef.current.value) {
      return setError(true);
    }
    setError(false);
  }

  return ( 
      <Layout title="Login" footer={false} navbar={false}>
        <section className="text-center login pt-9">
          <Image src="/img/icon-transparent.png" alt="icon" width="55" height="50"/>
          <h2 className='text-4xl font-light mt-7'>Welcome to Delta Blog</h2>
          {error && <div className="max-w-sm mt-8 py-2 mx-auto border-2 rounded-md bg-red-400 border-red-700 text-red-900">Cannot access, only me can login :/</div>}
          <p className="text-sm mt-20 mb-1">Log in with one of the folowing:</p>

          <div onClick={() => {router.push('/api/auth/signin/github')}} className="border w-96 my-3 mx-auto text-white bg-neutral-800 hover:bg-black transition cursor-pointer py-2 font-bold rounded-md"><i class="lni lni-github-original mr-1"></i> GitHub</div>
          <div className="border w-96 my-3 mx-auto text-white bg-orange-700 hover:bg-orange-800 transition cursor-pointer py-2 font-bold rounded-md"><i class="lni lni-google mr-1"></i> Google</div>
          <div className="border w-96 my-3 mx-auto text-white bg-blue-700 hover:bg-blue-800 transition cursor-pointer py-2 font-bold rounded-md"><i class="lni lni-facebook-original mr-1"></i> Facebook</div>

          <div className="max-w-3xl mx-auto mt-8">
            <Link href={'/'}>
              <a> <ChevronLeftIcon width={15} className='inline' />  Get back to Home</a>
            </Link>
          </div>

          {/* <div>Google</div>
          <div>Facebook</div> */}

          {/* <div className="form-container border w-96 mx-auto rounded-md bg-black 
          text-white py-8 mt-10 text-xl">
            <form onSubmit={handleSubmit}>
              <label className="block" htmlFor="username">User name</label>
              <input type="text" className="rounded-md py-1 px-2 text-black outline-none my-3" 
                placeholder="User name here"
                ref={usenameRef}
                />
              <label className="block" htmlFor="userpass">User password</label>
              <input type="password" className="rounded-md py-1 px-2 text-black outline-none my-3" 
                placeholder="User password here"
                ref={passwordRef}
                />
              <input className="block mx-auto mt-2 border border-white rounded-md py-1 px-3 cursor-pointer submit_button" type="submit" value={'Submit'}/>
            </form>
          </div> */}
        </section>
      </Layout>
   );
}
 
export default Login;

