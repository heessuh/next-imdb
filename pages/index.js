import Head from "next/head"
import Header from "../components/Header.js"
import Navbar from "../components/Navbar.js"
import Results from "../components/Results.js"

export default function Home() {
  return (
    <div className="text-sm font-serif text-blue-600">
      <Head>
        <meta name="description" content="Generate head" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Navbar />
      <Results />
    </div>
  )
}
