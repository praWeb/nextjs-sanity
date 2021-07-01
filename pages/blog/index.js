import Link from 'next/link'

function Home() {
  return (
    <>
    <div>Welcome!! blog</div>
    <Link href="/">
      <a> Go back home</a>
    </Link>
    </>
  )
}

export default Home