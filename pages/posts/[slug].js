import { ChevronRightIcon } from "@heroicons/react/solid";
import Image from "next/image";
import Link from "next/link";
import Info from "../../components/Info";
import PostsList from "../../components/PostsList";
import Layout from "../../hocs/Layout";

const Post = () => {
  return ( 
    <Layout title={'Posts'}>
      <div className="max-w-3xl mx-auto pt-5">
        <h1 className="title">When they used to ration food ft. 雪衣豆沙</h1>
        <Info />
        <div className="post-content pt-6">
          <p className="post-text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur nec neque non ex finibus consectetur ac nec eros. Ut non dapibus mi. Vestibulum ac lorem ipsum. Mauris vel sem efficitur, mollis ante eget, scelerisque metus. Quisque vel dolor tempor, elementum ante vitae, pellentesque ante. Integer mattis nisi vitae neque bibendum, sit amet venenatis nisi condimentum. Suspendisse vel mi ligula. Duis interdum pulvinar nibh a tempus. Praesent feugiat pharetra nibh. Duis vulputate orci eu metus molestie, ut ultricies nisi volutpat. Aenean a metus lectus.
          
          Proin eu lectus eu nunc elementum rhoncus quis sed mi. Nulla sed odio viverra, pulvinar velit a, volutpat tellus. Fusce ullamcorper nulla nec libero ultrices, et lacinia lorem vehicula. Fusce ante nisi, vulputate a nisl in, mattis bibendum est. Vivamus velit elit, ultrices sodales sodales nec, faucibus in lorem. Suspendisse fringilla posuere leo ac accumsan. Praesent vitae commodo turpis. Vivamus non vehicula ante. Nam maximus congue turpis, non vulputate ipsum lobortis aliquet. Proin sollicitudin, elit eu lacinia ullamcorper, turpis neque scelerisque sem, laoreet aliquet arcu leo vitae nisl.
          
          Proin porta nunc sed massa commodo dictum. Quisque lacinia, justo a fringilla vulputate, purus diam imperdiet odio, vel ornare nisi felis vitae leo. In non gravida est. Nullam nec tincidunt odio. Vestibulum blandit tristique elementum. Fusce id feugiat diam, eget hendrerit velit. Proin sed euismod turpis. Maecenas ultricies tincidunt elit, ut maximus eros convallis vitae.
          
          Sed in finibus diam. Cras vestibulum eros faucibus, cursus lectus vitae, tempus tellus. Integer eget molestie nibh. Aenean scelerisque urna eget lacus porttitor tristique. Aliquam interdum nec turpis sed interdum. Pellentesque faucibus placerat dolor, condimentum pellentesque elit rutrum quis. Fusce id molestie augue. Aliquam eu magna eu risus semper sagittis a in lacus. Vestibulum egestas mauris eu nisl auctor, id molestie libero malesuada. Donec neque mi, porta a euismod in, aliquet in lectus. Aenean sit amet sollicitudin nunc, a luctus lorem. Nam eget magna sed dolor tempus pretium at quis sem. Nam vitae lectus tempus purus gravida suscipit. Quisque a varius velit, at fermentum libero.
          
          Praesent id diam scelerisque, suscipit velit eu, sagittis mauris. Fusce at varius magna, in fermentum orci. Suspendisse potenti. Sed mi leo, porttitor et rhoncus non, feugiat sit amet nisi. Maecenas consequat lacinia dictum. Suspendisse nibh metus, facilisis sed volutpat fermentum, interdum id metus. Vestibulum dignissim aliquam dapibus. Suspendisse ante justo, gravida ac sollicitudin a, dapibus in urna. Proin non scelerisque erat. Sed sed facilisis nisi. Nulla facilisi. Vivamus augue arcu, aliquam vitae dui eget, laoreet iaculis urna. In quis maximus felis.
          </p>
          <div className="content-image flex justify-center pt-7">
            <Image src='/img/mine.jpeg' width={500} height={320} className='rounded'/>
          </div>
          <p className="text-center text-gray-500 mt-3 text-sm">What a beautiful image</p>
          <PostsList />
          <div className="max-w-3xl mx-auto pl-5 md:pl-0">
            <Link href={'/posts'}>
              <a>See all <ChevronRightIcon width={15} className='inline' /> </a>
            </Link>
          </div>
        </div>

      </div>
    </Layout>
   );
}
 
export default Post;