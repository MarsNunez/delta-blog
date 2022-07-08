import Layout from "../../hocs/Layout";
import { MoonIcon } from '@heroicons/react/outline'
import Link from 'next/link';
import Image from "next/image";

const Post = () => {
  return ( 
    <Layout title={'Posts'}>
      <h1>Nested Page</h1>
    </Layout>
   );
}
 
export default Post;