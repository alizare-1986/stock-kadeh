import AdminCard from "@/module/AdminCard";

function AdminPage({product}) {
    return (
        <div>
            {
                product.length ?null:(
                    <p>آگهی در انتظار تایید وجود ندارد</p>
                )
            }
            {
                product.map((i)=>(
                    <AdminCard key={i._id} data={JSON.parse(JSON.stringify(i))}/>
                ))
            }
        </div>
    );
}

export default AdminPage