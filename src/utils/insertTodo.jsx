import supabase from "./supabase-client";

const InsertTodo = async (todo) => {
  // eslint-disable-next-line no-unused-vars
  const insert = await supabase.from("todo").insert({ todo: todo });
};

export default InsertTodo;
