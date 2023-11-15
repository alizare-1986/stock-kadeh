import Link from "next/link";
import { categories } from "src/constant/strings";

function Sidebar({ data }) {
    

  return (
    <div className=" flex flex-row border justify-between mx-12 mt-2 rounded-xl p-7 max-sm:flex-col max-sm:mx-16 ">
      <p className=" text-2xl">دسته بندی</p>
      <Link className=" text-lg text-blue-800" href={"/buy-products"}>همه</Link>
      {
        Object.keys(categories).map((i)=>(
            <Link key={i} href={{
                pathname:"/buy-products",
                query:{category:i}
            }}  >{categories[i]}</Link>
        ))
      }
    
            
    </div>
  );
}

export default Sidebar;
