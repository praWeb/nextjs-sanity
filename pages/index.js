import { useRouter } from 'next/router'

function Home() {

  const router = useRouter()
  const handleClick = (e) => {
    e.preventDefault()

    router.push('/pokemon')
  }
  return (
    <>
      <div>Welcome!!</div>
      <button onClick={handleClick}>
        Click me!
      </button>
    </>
  )
}

export default Home