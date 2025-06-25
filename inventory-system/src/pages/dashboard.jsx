import React from "react";

const Dashboard = () => {
    return (
        <>
        <div className="h-screen w-full flex items-center justify-center bg-slate-900">
            <div className="grid h-full w-full grid-cols-2 grid-rows-4 gap-3 p-20
            xl:m-64 
            lg:m-32
            md:m-16
            ">
                <div className="col-span-1 row-span-1 rounded-xl bg-gradient-to-r from-green-500 to-green-700">
                    <h1>P 1,3586.23</h1>
                    <h1>Daily Sales Report</h1>
                </div>
                <div className="col-span-1 row-span-1 rounded-xl bg-gradient-to-r from-red-500 to-red-700">
                    <h1>P 2,3562.02</h1>
                    <h1>Total Lending Report</h1>
                </div>
                <div className="col-span-1 row-span-1 rounded-xl bg-gradient-to-r from-green-500 to-green-700">
                    <h1>357</h1>
                    <h1>Stocks Report</h1>
                </div>
                <div className="col-span-1 row-span-1 rounded-xl bg-gradient-to-r from-red-500 to-red-700">
                    <h1>P 635.57</h1>
                    <h1>Net Profit Report (Admin Only)</h1>
                </div>
                <div className="col-span-2 row-span-2 rounded-xl bg-gradient-to-r from-red-500 to-red-700">
                    <h1>Graph here</h1>
                </div>
            </div>
        </div>
        </>
    );
}


export default Dashboard;