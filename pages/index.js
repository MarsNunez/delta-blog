import Layout from "../hocs/Layout";
import TypeIt from "typeit-react";
import Card from "../components/Card";
import PostsList from "../components/PostsList";
import Link from "next/link";
import { ChevronRightIcon } from "@heroicons/react/outline";
import { getSession } from "next-auth/react";


export default function Home({ quote, authorName, session }) {
  console.log(session);

  return (
    <Layout title={'Home'} session={session}>
      <div className="text-4xl text-center my-5 quote_container center-box min-h-[150px]">
        <div className="container text-center">
          <p><TypeIt style={{"font-family": 'Titillium Web'}}
            options={{
              speed: 65,
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

export async function getServerSideProps (context) {
  // QUOTE
  const url = `https://zenquotes.io/?api=quotes&key=f0df37523879208b5198b247db115a0afdff8d26`
  const data = await fetch(url).then(res => res.json());

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  const randomQuote = data[getRandomInt(data.length)]

  // SESSION
  const session = await getSession(context);

  return {
    props: {
      quote: randomQuote.q,
      authorName: randomQuote.a,
      session
    }
  }
}

