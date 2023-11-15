
function AccountPage({user}) {
    
    return (
        <div >
            <div className=" p-8 border mx-12 rounded-lg ">
            <div className=" font-normal text-1xl mt-5  ">
         <h2 className="text-blue-500">سلام</h2>
         <h4 className="text-gray-500">آکهی های خودر را در اینجا ثبت کنید </h4>
         </div>
         <div  className="flex mt-24 p-3 ">
            <h2 className="m-0 font-normal ml-2">
                تاریخ عضویت:
                
            </h2>
            <span className="text-blue-600">{new Date(user.createdAt).toLocaleDateString("fa-IR")}</span>
         </div>
         </div>
        </div>
    );
}

export default AccountPage;