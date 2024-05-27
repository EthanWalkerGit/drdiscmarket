import { Nav, Search, Body } from "./components";
import { Footer } from "./sections";

export default function App() {
  return (
<main className='relative bg-main h-screen w-screen flex flex-col justify-between'>
  <Nav />
  <section>
    <Search />
  </section>
  <section>
    <Body />
  </section>
  <div className="flex-grow" />
  <section className="bg-header w-screen">
    <Footer />
  </section>
</main>
  )
}