import { Nav, Search, Body, Footer } from "./components";

export default function App() {
  return (
      <main className='relative bg-main h-screen w-screen'>
        <section>
          <Nav />
        </section>
        <section>
          <Search />
        </section>
        <section>
          <Body />
        </section>
        <section>
          <Footer />
        </section>
      </main>
  )
}