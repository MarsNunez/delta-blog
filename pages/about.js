import Layout from "../hocs/Layout";

const About = () => {
  return ( 
    <Layout title={'About'}>
      <section className="about">
        <div className="faq max-w-3xl mx-auto px-10">
          <h2 className="text-5xl font-extrabold mt-16">Why?</h2>
          <p className="mt-8">This proyect was created to mapping my goals and express myself to the world.
            I just wanted to have a place to me and my thougts and I thought, "I suppose internet is a good place to do that" 🤔
          </p>

          <h2 className="text-3xl font-extrabold mt-8">What in the world is this?</h2>
          <p className="mt-8">It's just a blog that will help me to improve in life and achive my goals, that's the "why" of the this site name, 
            I chose "delta" cuz is the greek symbol for "change" of "diference" (what I'm looking for to me with this proyect).
            Pushing myself to a better me 𝚫
          </p>

          <h2 className="text-3xl font-extrabold mt-8">Updates of the blog?</h2>
          <p className="mt-8">Let me ask to my mind-crewmates 🧠
          </p>
        </div>

        <div className="flex flex-col md:flex-row md:px-5 align-middle center-box mb-16 mt-12">
          <div className="lore_box_image ">
            <img src="img/me.png" alt="me-image" className="rounded-md"/>
          </div>

          <div className="lore_box_about text-left px-5 mt-10">
            <h3 className="mb-4 text-lg font-extrabold uppercase">Sebastian Nunez <br /> June 12 - 2001</h3>
            <p><i class="text-xs font-extrabold lni lni-chevron-right"></i>Software Engineer 💻</p>
            <p><i class="text-xs font-extrabold lni lni-chevron-right"></i>Books & Manga Reader 📚</p>
            <p><i class="text-xs font-extrabold lni lni-chevron-right"></i>I hate to express me, that's why questions above are so god deam simples, but this proyect is for that, to push myself to a better me 🙂</p>
            <p><i class="text-xs font-extrabold lni lni-chevron-right"></i>I preffer listen and read instead talk 💬</p>
            <p><i class="text-xs font-extrabold lni lni-chevron-right"></i>Its just my laptop and me, all day and night inside my room with windows closed 🧑‍💻</p>
            <p><i class="text-xs font-extrabold lni lni-chevron-right"></i>West from Warriors 🌉 & East from Celtics ☘️</p>
            <p><i class="text-xs font-extrabold lni lni-chevron-right"></i>Rain & animals lover 💚</p>
          </div>
        </div>
      </section>
    </Layout>
   );
}
 
export default About;

