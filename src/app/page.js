'use client'
import { useState } from 'react';
import styles from './page.module.css'

export default function Home() {
  {/* code explanation regarding (state) of other vedio */ }
  const [name, setName] = useState("anuj")
  const apple = (variety) => {
    alert(variety);
    setName("Dushyant")
  }

  const Innercomp = () => {
    return (
      <h1>Calling component inside other component</h1>
    )
  }

  return (
    <main className={styles.main}>
      <h1>function, events and state</h1>
      <h3>{name}</h3>
      <button onClick={() => apple("Great")}>Click Me!</button>

      {/* code explanation regarding (props) of other vedio */}
      <h1>home page</h1>
      <User greeting="Welcome" />

      <Innercomp />

    </main>
  )
}

const User = (props) => {
  return (
    <div>
      <h2>{props.greeting} User to the world of next.js</h2>
    </div>
  )
}