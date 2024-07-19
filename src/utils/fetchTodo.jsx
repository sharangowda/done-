import supabase from "./supabase-client";

const getTodo = async () => {
  const response = await supabase.from("todo").select();
  return response;
};

export default getTodo;
