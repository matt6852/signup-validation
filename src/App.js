import { useState } from "react";
import "./App.css";
import Form from "./Form";
import FormSuccess from "./FormSuccess";

function App() {
  const [data, setData] = useState({});
  return (
    <>
      {Object.keys(data).length > 0 ? (
        <FormSuccess data={data} />
      ) : (
        <Form setData={setData} />
      )}
    </>
  );
}

export default App;
