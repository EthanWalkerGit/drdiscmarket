import { Nav, Search, Grid } from "./components";
import { Footer } from "./sections";

export default function App() {
  return (
<main className='relative bg-main h-full w-full flex flex-col justify-between'>
  <Nav />
  <section>
    <Search />
  </section>
  <section className="mx-auto w-4/5 border-2 border-red-500 border-solid">
    <Grid />
  </section>
  <div className="flex-grow" />
  <section className="bg-header w-full">
    <Footer />
  </section>
</main>
  )
}