import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './componets/Navigation/Navigation'
import Contact from './componets/contactHeader/Contact'
import ContactForm from './componets/ContactForm/ContactForm';
function App() {
  const [count, setCount] = useState(0)

  return (
   <div>
    <Navigation/>
    <Contact/>
    <ContactForm/>
   </div>
  )
}

export default App
