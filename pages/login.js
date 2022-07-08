import Layout from "../hocs/Layout";

const Login = () => {
  return ( 
      <Layout title="Login">
        <section className="text-center login">
          <h2 className='text-5xl font-extrabold mt-10'>Login</h2>
          <div className="form-container border w-96 mx-auto rounded-md bg-black 
          text-white py-8 mt-10 text-xl">
            <form className="">
              <label className="block" htmlFor="username">User name</label>
              <input type="text" className="rounded-md py-1 px-2 text-black outline-none my-3" placeholder="User name here"/>
              <label className="block" htmlFor="userpass">User password</label>
              <input type="password" className="rounded-md py-1 px-2 text-black outline-none my-3" placeholder="User password here"/>
              <input className="block mx-auto mt-2 border border-white rounded-md py-1 px-3 cursor-pointer submit_button" type="submit" value={'Submit'}/>
            </form>
          </div>
        </section>
      </Layout>
   );
}
 
export default Login;

