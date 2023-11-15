import { TiDelete } from "react-icons/ti";
import { MdPlaylistAddCheckCircle} from "react-icons/md";
function TextList({ desc, title, product, setProduct }) {
  const changeHandler = (e, index) => {
    const { value } = e.target;
    const list = [...product[desc]];
    list[index] = value;
    setProduct({ ...product, [desc]: list });
  };
  const addHandler = () => {
    setProduct({ ...product, [desc]: [...product[desc], ""] });
  };
  const deleteHandler = (index) => {
    const list = [...product[desc]];
    list.splice(index, 1);
    setProduct({ ...product, [desc]: list });
  };
  return (
    <div className="flex flex-col items-center">
      <p>{title}</p>
      {product[desc].map((i, index) => (
        <div key={index} className="flex flex-row border w-72 rounded-lg  shadow-green-500 shadow-lg ">
          <textarea
          className=" w-64 mx-1"
            type="text"
            value={i}
            onChange={(e) => changeHandler(e, index)}
          />
          <button className=" m-2 " onClick={() => deleteHandler(index)}>
            <TiDelete className=" text-red-600 text-2xl " />
          </button>
        </div>
      ))}
      <button className=" mt-2 " onClick={addHandler}>
        <MdPlaylistAddCheckCircle className=" text-blue-800 text-2xl " />
      </button>
    </div>
  );
}

export default TextList;
