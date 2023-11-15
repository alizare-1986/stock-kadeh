import { p2e } from "@/utils/replaceNumber";

function TextInput({ title, name, product, setProduct }) {
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: p2e(value) });
  };
  return (
    <div className="flex flex-col items-center ">
      <p className="mt-7">{title}</p>
      <input 
      className="border rounded-sm  m-2 shadow-lg shadow-emerald-400 text-base w-72"
        type="text"
        name={name}
        value={product[name]}
        onChange={changeHandler}
      />
    </div>
  );
}

export default TextInput;
