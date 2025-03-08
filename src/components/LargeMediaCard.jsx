const LargeMediaCard = (props) =>
{
    return (
        <div className={`${props.darkmode ? "bg-[#252B43]" : "bg-[#F0F3FA]"} ${props.darkmode ? "hover:bg-[#333A56]" : "hover:bg-[#E1E3F0]"} hover:cursor-pointer h-[220px] w-[255px] max-[590px]:w-[325px] rounded-[5px] overflow-hidden`}>
            <div className={`${ props.lineColor } h-[2%]`}></div>
            <div className="flex flex-col justify-center h-[100%]">
                <div className="flex justify-center gap-[10px]">
                  
                    <div>
                        <img src={ props.mediaIcon } alt={ props.altTag } />
                    </div>

                    <div className={`font-[600] ${props.darkmode ? "" : "text-[#646579]"}`}>
                        <p>{ props.mediaName }</p>
                    </div>

                </div>

                <div className="flex flex-col mb-[15px] mt-[5px]">

                    <div className="flex justify-center my-[0px] h-[80px]">
                        <h2 className="font-[650] text-[60px]">{ props.followerCount }</h2>
                    </div>

                    <div className="flex justify-center text-[15px] opacity-[50%]">
                        <p>{ props.countTitle }</p>
                    </div>

                </div>

                <div className="flex justify-center">

                    <div className="flex flex-col justify-evenly pr-[4px]">
                        <img src={ props.upOrDownIcon } alt={ props.iconAlt } />
                    </div>

                    <div className={`${props.textColor} font-[600]`}>
                        <p>{ props.rateText }</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default LargeMediaCard