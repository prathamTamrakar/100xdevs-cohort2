// https://www.figma.com/design/1QTpfgcJLng3SEHv3V7Nr4/Payouts-V2---2023?node-id=0-5723

// https://x.com/subhashchy/status/1744308069751025894

function Tailwind() {
    return (
        <>
            <div className="flex justify-between">
                <div className="bg-red-500 size-20">hi</div>
                <div className="bg-yellow-500 size-20">hi</div>
                <div className="bg-green-600 size-20">hi</div>
            </div>
            <br />
            <div className="grid grid-cols-10">
                <div className="bg-red-500 col-span-4">hi</div>
                <div className="bg-yellow-500 col-span-4">hi</div>
                <div className="bg-green-500 col-span-2">hi</div>
            </div>
            <br />
            <div className="flex">
                <div className="bg-red-500 w-[40%]">hi</div>
                <div className="bg-yellow-500 w-[40%]">hi</div>
                <div className="bg-green-500 w-[20%]">hi</div>
            </div>
            <br />
            <div className="bg-blue-500 md:bg-yellow-500 size-20">hi</div>
            <br />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
                <div className="bg-red-500">hi</div>
                <div className="bg-blue-500">hi</div>
                <div className="bg-green-500">hi</div>
            </div>
        </>
    )
}

export default Tailwind;