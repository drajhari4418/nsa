import Link from "next/link"


export default function About() {
  return (
    <div>
      <h1>About page</h1>
      <br></br>
      <Link href="/">Go to home page</Link>

      <br />
      <br />

      <br />

      <Link href="/about/aboutcollege">Go to College</Link>
      <br />
      <br />
      <Link href="/about/aboutstudent">Go to Students Section</Link>
    </div>
  )
}
