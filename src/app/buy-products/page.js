import Product from "@/models/Product";
import BuyProductsPage from "@/template/BuyProductsPage";
import connectDb from "@/utils/connectDb";

async function BuyProducts({searchParams}) {
await connectDb()
let product =await Product.find()
if(searchParams.category){
    product=product.filter((i)=>i.category=== searchParams.category)
}
    return (
        <BuyProductsPage data={product}/>
    );
}

export default BuyProducts;