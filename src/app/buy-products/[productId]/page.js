import Product from "@/models/Product";
import DetailsPage from "@/template/DetailsPage";
import connectDb from "@/utils/connectDb";

async function ProductDetails({params:{productId}}) {
   await connectDb()
   const product =await Product.findOne({_id:productId})
   if(!product) return <h2>مشکلی پیش آمده است</h2>
   
    return (
        <DetailsPage data={product}/>
    );
}

export default ProductDetails;
export const generateMetadata=async({params:{productId}})=>{
    await connectDb()
    const product =await Product.findOne({_id:productId})
    return {
        title:product.title,
        description:product.description
    }

}