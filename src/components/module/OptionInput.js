
function OptionInput({product,setProduct}) {
    const {category}=product
    const changeHandler= (e)=>{
       const { name, value } = e.target;
        setProduct({...product,[name]:value})
    }
    return (
        <div className="flex flex-col items-center ">
            <p>دسته بندی</p>
            <select
            className="border rounded-md w-44 shadow-lg shadow-violet-500"
            value={category}
           name='category'
            onChange={changeHandler}
          >
            <option>یک گزینه انتخاب کنید</option>
            <option   value="apple">apple</option>
            <option  value="samsung">samsung</option>
            <option  value="xiaomi">xiaomi</option>
            <option  value="otherbrand">otherbrand</option>
          </select>
        </div>
    );
}

export default OptionInput;