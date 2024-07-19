import { useState } from "react";
import supabase from "../utils/supabase-client";

/* eslint-disable no-unused-vars */
function Tables(props) {
  const [delTodo, setDelTodo] = useState("");
  const onClickHandler = async (stuff) => {
    const response = await supabase.from("todo").delete().eq("todo", stuff);
    window.location.reload();
  };
  return (
    <>
      <div className="staticoverflow-x-auto shadow-md sm:rounded-lg overflow-y-hidden ">
        <table className="w-full text-sm text-left rtl:text-right ">
          <thead className="">
            <tr>
              {props.col_name.map((item, index) => (
                <th key={index} className="px-6 py-3 text-white text-center">
                  {item}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {props.data.map((item, index) => (
              <tr key={index} className="hover:divide-y">
                <td className="w-4 p-4">
                  <div className="flex justify-center  items-center">
                    <button
                      key={index}
                      className="bg-white text-black px-5 py-1.5 rounded-md text-sm"
                      onClick={() => {
                        onClickHandler(item.todo);
                      }}
                    >
                      Done
                    </button>
                  </div>
                </td>
                <th className="text-center mx-5 px-5 text-white">
                  {item.created_at}
                </th>
                <th className="text-center mx-5 px-5 text-white">
                  {item.todo}
                </th>
                <th className="text-center mx-5 px-5 text-white">
                  {item.completed_yet}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Tables;

// text-md text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400

// "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600
