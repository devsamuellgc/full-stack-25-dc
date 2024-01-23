import ListItem from "./ListItem";
import { TextName } from "./TextName";

function App() {
  const items = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"];
  const nomes = ["Nome 1", "Nome 2", "Nome 3", "Nome 4", "Nome 5"];

  return (
    <ul>
      {items.map((item, index) => (
        <ListItem key={index} text={item} />
      ))}
      {nomes.map((nome, index) => (
        <TextName key={index} name={nome} />
      ))}
    </ul>
  );
}

export default App;
