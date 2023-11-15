import Card from "@/module/Card";
import Sidebar from "@/module/Sidebar";

function BuyProductsPage({data}) {
    return (
        <div className=" flex flex-col">
            <div>
                <Sidebar data={data}/>
            </div>
            
      <div className="flex flex-wrap justify-center items-center">
        {data.length ? null : (
          <p >هیچ آگهی ثبت نشده است</p>
        )}
        {data.map((product) => (
          <Card key={product._id} data={product} />
        ))}
      </div>
        </div>
    );
}

export default BuyProductsPage