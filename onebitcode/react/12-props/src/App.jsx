import Card from "./components/Card"
import posterImg from "./assets/sw-poster.jpg"
import posterImg2 from "./assets/esb-poster.jpg"
import posterImg3 from "./assets/rotj-poster.jpg"

export default function App() {
  return (
    <>
      <h1>Exercício 2</h1>
      <Card title="Pôster: Star Wars (1977)" poster={posterImg} />
      <Card title="Pôster: Empire Strikes Back (1980)" poster={posterImg2} />
      <Card title="Pôster: Return of the Jedi (1983)" poster={posterImg3} />
    </>
  )
}