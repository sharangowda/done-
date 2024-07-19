import { useEffect } from "react";
import Form from "./components/Form";
import { useState } from "react";
import Tables from "./components/Tables";
import getTodo from "./utils/fetchTodo";
import InsertTodo from "./utils/insertTodo";

function App() {
  const [todo, setTodo] = useState([]);
  const [addTodo, setAddTodo] = useState("");
  const col_name = ["Checkbox", "Created At", "Todo", "Status"];

  function formatDate(dateString) {
    const date = new Date(dateString);
    const year = date.getUTCFullYear();
    const month = (date.getUTCMonth() + 1).toString().padStart(2, "0");
    const day = date.getUTCDate().toString().padStart(2, "0");

    const formattedDate = `${day}-${month}-${year}`;

    return formattedDate;
  }

  const mappedArray = todo.map((item) => ({
    todo: item.todo,
    completed_bool: item.completed_bool,
    completed_yet: item.completed_yet,
    created_at: formatDate(item.created_at),
  }));

  const handleChange = (event) => {
    setAddTodo(event.target.value);
  };

  const handleAddButton = (e) => {
    e.preventDefault();
    window.location.reload();
    if (addTodo.trim() !== "") {
      InsertTodo(addTodo);
      setTodo("");
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      const response = await getTodo();
      setTodo(response.data);
    };
    fetchData();
  }, [addTodo]);

  return (
    <>
      <div className="bg-black h-screen">
        <div
          className="flex justify-center items-center py-12
       sm:flex sm:shrink-0 "
        >
          <Form handleChange={handleChange} handleClick={handleAddButton} />
          {/* <button
            onClick={handleClick}
            className="bg-white text-black px-5 py-1.5 rounded-md"
          >
            Click me
          </button> */}
        </div>
        <div className="justify-center items-center flex mt-10">
          <Tables col_name={col_name} data={mappedArray} />
        </div>
      </div>
    </>
  );
}

export default App;
