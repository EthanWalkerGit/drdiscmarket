import { Nav, Footer  } from "./components";
import { ContactFooter, FrontPage, Weekly } from "./sections";

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
        <ContactFooter />
      </section>
    </main>
  )
}