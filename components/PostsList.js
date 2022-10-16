import Card from "./Card";

const PostsList = () => {
  return ( 
    <div className="max-w-3xl mx-auto md:mt-6">
      <div className="border-b flex justify-center md:justify-start mb-7">
        <ul className="flex">
          <li className="py-4 cursor-pointer mx-3 active">New</li>
          <li className="py-4 cursor-pointer mx-3">Book</li>
          <li className="py-4 cursor-pointer mx-3">Life</li>
          <li className="py-4 cursor-pointer mx-3">Random</li>
        </ul>
      </div>
      <div>
        <Card tamano={'small'}/>
        <Card tamano={'small'}/>
        <Card tamano={'small'}/>
        <Card tamano={'small'}/>
      </div>
    </div>
   );
}
 
export default PostsList;