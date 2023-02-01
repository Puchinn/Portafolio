function Proyecto ({src,titulo,desc,}){

    return(

        <>
            <div className="bg-white bg-opacity-60 shadow-md  rounded-3xl p-4 w-10/12 h-5/6">

                <div className="h-full flex flex-col">

                    <img src={src} className="w-full object-cover h-60 rounded-2xl" />
                    <div className="flex flex-col w-full h-full py-2">

                        <div className="py-2">
                            <h2 className="text-lg font-medium">{titulo}</h2>
                            <div className="flex text-sm text-gray-500">
                                <div className="flex-1 inline-flex items-center">
                                    <p className="">{desc}</p>
                                </div>
                            </div>
                        </div>

                        <div className="h-full flex flex-col justify-end">
                            <div className="flex text-sm font-medium justify-self-end justify-end pt-4 pb-2 border-t border-gray-200 ">
                                    <button
                                        className="md:mb-0 bg-white px-4 py-2 shadow-sm tracking-wider border text-gray-600 rounded-full hover:bg-gray-100 inline-flex items-center space-x-2 ">
                                        <span>Code</span>
                                    </button>
                                    <button
                                        className="md:mb-0 bg-gray-900 px-5 py-2 shadow-sm tracking-wider text-white rounded-full hover:bg-gray-800"
                                        type="button" aria-label="like"
                                        >
                                        Demo
                                    </button>
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>

    )
}

export default Proyecto