import Product from "@/models/Product";
import AddProductPage from "@/template/AddProductPage";
import connectDb from "@/utils/connectDb";

async function Edit({params:{productId}}) {  
    await connectDb()
  const product =await Product.findOne({_id:productId})
  if(!product) return <h2>...مشکلی پیش آمده است!!!</h2>
    return (
      <AddProductPage data={JSON.parse(JSON.stringify(product))}/>
    );
}

export default Edit;