import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Paris", "Rome", "Milan", "Turin"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
      <Alert>
        Hello <span>World</span>
      </Alert>

      <Button color={"danger"} onClick={() => console.log("Clicked")}>
        My Button
      </Button>
    </div>
  );
}

export default App;
