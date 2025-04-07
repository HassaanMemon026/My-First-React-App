import { useState, useEffect, useRef } from "react";
import './App.css'
import Navbar from './components/Navbar'
import Card from './components/Card'
import Footer from "./components/Footer";


const App = () => {
  const [count, setCount] = useState(0)
  const [notHide, setNotHide] = useState(true)
  const [cards, setCards] = useState([])

  const countRef = useRef(0)
  const colorRef = useRef(null)

  useEffect(() => {
    console.log("Welcom to MY First REACT APP")
    async function fatchData() {
      let response = await fetch('https://jsonplaceholder.typicode.com/posts')
      let data = await response.json()
      setCards(data)
    }
    fatchData()
  }, [])

  useEffect(() => {
    console.log("The component is changed")
  })

  useEffect(() => {
    // useref is used to store the value of the variable without re-rendering the component
    countRef.current = countRef.current + 1
    console.log("The value of counter is changed to ", countRef.current)
    colorRef.current.classList.toggle("bg-gradient-to-r");
    colorRef.current.classList.toggle("bg-gradient-to-l");

  }, [count])



  return (
    <div className="bg-[#101828]  w-full text-white flex  flex-col">
      <Navbar />
      <div className="flex mt-9 flex-grow items-center justify-center">
        {/* {notHide?<button ref={colorRef} onClick={() => setCount(count + 1)} className="px-10 py-5 text-2xl font-bold text-white bg-gradient-to-r from-blue-500 to-purple-800 rounded-2xl shadow-xl transition-all transform hover:scale-110 hover:shadow-3xl">
          Counter is {count}
        </button>: is bracket k under k koai bhe aik used karo("" / null)} */}
        {/* or */}
        {notHide && <button ref={colorRef} onClick={() => setCount(count + 1)} className="px-10 py-5 text-2xl font-bold text-white bg-gradient-to-r from-blue-500 to-purple-800 rounded-2xl shadow-xl transition-all transform hover:scale-110 hover:shadow-3xl">
          Counter is {count}
        </button>}

      </div>
      <div className="flex mt-6 mb-9 flex-grow items-center justify-center">
        <button onClick={() => setNotHide(!notHide)} className="mt-6 px-8 py-4 bg-gradient-to-r from-red-500 to-pink-600 text-white text-lg font-bold rounded-full shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl">✨ Hide Button ✨</button>
      </div>
      <div className="flex flex-wrap justify-center gap-5 p-5">
        {/* <Card title="sunt aut facere repellat provident occaecati excepturi optio reprehenderit" body="quia et suscipitnsuscipit recusandae consequuntur expedita et cum nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto" userId="1" id="1" />
        <Card title="sunt aut facere repellat provident occaecati excepturi optio reprehenderit" body="quia et suscipitnsuscipit recusandae consequuntur expedita et cum nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto" userId="1" id="1" />
        <Card title="sunt aut facere repellat provident occaecati excepturi optio reprehenderit" body="quia et suscipitnsuscipit recusandae consequuntur expedita et cum nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto" userId="1" id="1" />
        <Card title="sunt aut facere repellat provident occaecati excepturi optio reprehenderit" body="quia et suscipitnsuscipit recusandae consequuntur expedita et cum nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto" userId="1" id="1" /> */}
        {/* {cards.map((card) => (
          <Card key={card.id} title={card.title} body={card.body} userId={card.userId} id={card.id} />
        ))} */}




        {cards.map(card => (<Card key={card.id} card={card} />))}
      </div>
      <Footer />
    </div>

  )
}

export default App
