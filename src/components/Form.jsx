function Form(props) {
  return (
    <>
      <input
        placeholder="Add Todo"
        onChange={props.handleChange}
        className="block rounded-md border-0 py-1.5 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
      />
      <button
        type="submit"
        value={props.value}
        onClick={props.handleClick}
        className="px-5 py-1.5 mx-2  bg-white text-black rounded-md"
      >
        Add
      </button>
    </>
  );
}

export default Form;
