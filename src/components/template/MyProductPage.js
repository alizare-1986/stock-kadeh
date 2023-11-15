import AccountCard from "@/module/AccountCard";

function MyProductPage({products}) {
    return (
        <div className="flex flex-wrap justify-center items-center">
            {
                products.length? null:(
                    <p>هیچ آگهی ثبت شده ای ندارید</p>
                )
            }
            {
                products.map((i)=>(
                    <AccountCard key={i._id} data={JSON.parse(JSON.stringify(i))} />
                ))
            }
         
        </div>
    );
}

export default MyProductPage;