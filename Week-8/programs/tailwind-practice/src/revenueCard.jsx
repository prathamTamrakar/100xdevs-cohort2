const RevenueCard = ({
    title,
    orderCount,
    amount
})=>{
    return(
        <div className="bg-white rounded shadow-md p-5 w-80">
            <div className="text-sm text-gray-700">
                {title}
                ?
            </div>
            <div className="flex justify-between items-center pt-4">
            <div className="text-xl font-medium">
                ₹ {amount}
            </div>
            {orderCount ? <div className="text-sm underline text-blue-900 font-medium">
                {orderCount} order(s) {">"}
                </div>:null    
            }
            </div>
        </div>
    )
}
export default RevenueCard;