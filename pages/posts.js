import PostsList from '../components/PostsList'
import Layout from "../hocs/Layout";

const Posts = () => {
  return ( 
    <Layout title={'Posts'}>
      <PostsList />
    </Layout>
   );
}
 
export default Posts;