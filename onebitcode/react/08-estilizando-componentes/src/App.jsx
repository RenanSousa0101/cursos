import StatusText from "./components/StatusText"
import Subtitle  from "./components/Subtitle"
import Title from "./components/Title"
import styles from "./App.module.css"

export default function App() {
  return (
    <div className = {styles.app}>
      <Title /> {/*Usando o componente criado */}
      <Subtitle />
      <StatusText />
      <p>{false && "Text"}</p>
      <p>{true && "Text"}</p>
    </div>
    
  )
}