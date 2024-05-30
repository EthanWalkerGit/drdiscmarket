import { Nav, Footer  } from "./components";
import { FrontPage, Search, Grid, Weekly } from "./sections";

export default function App() {
  return (
    <main className='relative bg-black h-screen w-full flex flex-col justify-between overflow-y-scroll'>
      <section className="fixed w-full">
        <Nav />
      </section>
      <section>
        <FrontPage />
      </section>
      <section>
        <Weekly />
      </section>
      <section>
        <Search />
      </section>
      <section className="mx-auto w-4/5 border-2 border-red-500 border-solid">
        <Grid />
      </section>
      <div className="flex-grow" />
      <section>
        <Footer />
      </section>
    </main>
  )
}