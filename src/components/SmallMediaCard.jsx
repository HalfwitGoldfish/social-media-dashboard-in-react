const SmallMediaCard = (props) =>
{
    return (
        <div className={`${props.darkmode ? "bg-[#252B43]" : "bg-[#F0F3FA]"} ${props.darkmode ? "hover:bg-[#333A56]" : "hover:bg-[#E1E3F0]"} hover:cursor-pointer h-[125px] w-[255px] max-[590px]:w-[325px] rounded-[5px] overflow-hidden`}>
            <div className="flex flex-col justify-center h-[100%] mx-[25px]">

                <div className="flex justify-between gap-[10px]">
                  
                    <div className={`flex flex-col justify-center font-[600] ${props.darkmode ? "" : "text-[#646579]"}`}>
                        <p>{ props.mediaName }</p>
                    </div>

                    <div className="flex flex-col justify-center">
                        <img src={ props.mediaIcon } alt={ props.altTag } />
                    </div>

                </div>

                <div className="flex justify-between mt-[5px]">

                    <div className="flex justify-center my-[0px]">
                        <h2 className="font-[650] text-[35px]">{ props.followerCount }</h2>
                    </div>

                    <div className="flex justify-center">

                        <div className="flex flex-col justify-evenly pr-[4px]">
                            <img src={ props.upOrDownIcon } alt={ props.iconAlt } />
                        </div>

                        <div className={`${ props.textColor } flex flex-col justify-evenly font-[600]`}>
                            <p>{ props.rateText }</p>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    )
}

export default SmallMediaCard