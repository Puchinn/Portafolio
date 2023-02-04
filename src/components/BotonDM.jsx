function BotonDM() {
    return (
        <>
            <label htmlFor="dark">
            <input type="checkbox" id="dark" className="peer" hidden/>
                <div className="p-1 inline-flex border bg-gray-200 rounded-md hover:cursor-pointer gap-x-2 peer-checked:[&>.first]:bg-white peer-checked:[&>.first]:opacity-100 peer-checked:[&>.first]:shadow 
                peer-checked:[&>.last]:opacity-30 peer-checked:[&>.last]:bg-transparent peer-checked:[&>.last]:shadow-none">
                        <div 
                        className="px-2 py-1  rounded  first opacity-30">
                            <svg fill="#000000" width="25" height="25" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"/>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/>
                                <g id="SVGRepo_iconCarrier">
                                <path d="M19.878,16.941A9.528,9.528,0,0,1,11.569,22,9.811,9.811,0,0,1,2,11.984,9.854,9.854,0,0,1,10.923,2a1.034,1.034,0,0,1,.912.458,1,1,0,0,1,.036,1.019,8.278,8.278,0,0,0-.72,1.785,1,1,0,1,1-1.929-.528c.037-.135.077-.269.119-.4A7.989,7.989,0,0,0,4,11.984,7.811,7.811,0,0,0,11.569,20a7.4,7.4,0,0,0,5.568-2.6,9.352,9.352,0,0,1-5.335-2.7,1,1,0,0,1,1.416-1.412,7.23,7.23,0,0,0,5.622,2.177,1.053,1.053,0,0,1,.957.453A1,1,0,0,1,19.878,16.941ZM20.5,13v-.5H21a1,1,0,0,0,0-2h-.5V10a1,1,0,0,0-2,0v.5H18a1,1,0,0,0,0,2h.5V13a1,1,0,0,0,2,0Zm-4-11a1,1,0,0,0-1,1v.5H15a1,1,0,0,0,0,2h.5V6a1,1,0,0,0,2,0V5.5H18a1,1,0,0,0,0-2h-.5V3A1,1,0,0,0,16.5,2Zm-6,10a1,1,0,0,0,1-1v-.5H12a1,1,0,0,0,0-2h-.5V8a1,1,0,0,0-2,0v.5H9a1,1,0,0,0,0,2h.5V11A1,1,0,0,0,10.5,12Z"/>
                                </g>
                            </svg>
                        </div>
                        <div className="px-2 py-1 bg-white rounded shadow last">
                            <svg width="25" height="25" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path 
                                d="M12 6V3M12 6C8.6863 6 6 8.68629 6 12M12 6C15.3137 6 18 8.68629 18 12M18 12H21M18 12C18 15.3137 15.3137 18 12 18M16.2426 7.75736L18.364 5.63604M12 21V18M12 18C8.6863 18 6 15.3137 6 12M3 12H6M5.63605 18.364L7.75737 16.2426M16.2426 16.2424L18.364 18.3638M5.63607 5.636L7.75739 7.75732" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                                />
                            </svg>
                        </div>
                    </div>
            </label>  
        </>
);
}

export default BotonDM;