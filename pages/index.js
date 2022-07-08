import Layout from "../hocs/Layout";
import TypeIt from "typeit-react";
import Card from "../components/Card";
import PostsList from "../components/PostsList";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/outline";


export default function Home({ quote, authorName }) {
  return (
    <Layout title={'Home'}>
      <div className="text-4xl text-center my-5 quote_container center-box min-h-[150px]">
        <div className="container text-center">
          <p><TypeIt style={{"font-family": 'Titillium Web'}}
            options={{
              speed: 65, //75
              waitUntilVisible: true,
            }}>&ldquo;{quote.toUpperCase()}&rdquo;</TypeIt>
          </p>
        </div>
      </div>
      <Card size={'big'} />
      <PostsList />
      <div className="max-w-3xl mx-auto">
        <Link href={'/posts'}>
          <a>See all <ChevronRightIcon width={15} className='inline' /> </a>
        </Link>
      </div>
    </Layout>
  )
}

export async function getServerSideProps () {
  const url = `https://zenquotes.io/?api=quotes&key=f0df37523879208b5198b247db115a0afdff8d26`
  const data = await fetch(url).then(res => res.json());

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const randomQuote = data[getRandomInt(data.length)]

  return {
    props: {
      quote: randomQuote.q,
      authorName: randomQuote.a
    }
  }
}

