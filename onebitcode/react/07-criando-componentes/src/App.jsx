import StatusText from "./components/StatusText"
import { Subtitle } from "./components/Subtitle"
import Title from "./components/Title"

export default function App() {
  return (
    <div>
      <Title /> {/*Usando o componente criado */}
      <Subtitle />
      <StatusText />
      <p>{false && "Text"}</p>
      <p>{true && "Text"}</p>
    </div>
    
  )
}