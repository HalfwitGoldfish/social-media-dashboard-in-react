import { useEffect, useState } from 'react'
import './App.css'
import LargeMediaCard from './components/LargeMediaCard'
import SmallMediaCard from './components/SmallMediaCard'
import { fetchData } from './dataContext/dataContext'

import SocialData from '../data.json'

function App()
{
  const [darkmode, setDarkmode] = useState(true);
  const [data, setData] = useState(SocialData);

  const darkmodeToggle = () =>
  {
    if ( darkmode === true )
    {
      setDarkmode( false );
    }else
    {
      setDarkmode( true );
    }
  }

  const getData = async () =>
  {
    // setData(await fetchData());

  }

  useEffect(() =>
  {
    getData();
  },[])

  return (
    <div className={`${darkmode ? "text-white" : "text-black"} h-[100vh] max-[1160px]:h-[1350px] max-[590px]:h-[2500px] ${darkmode ? "bg-[#1D2029]" : "bg-[#FFFFFF]"} Inter`}>

      <div className={`${darkmode ? "bg-[#20222F]" : "bg-[#F8F9FE]"} h-[33%] max-[590px]:h-[11%] rounded-b-[25px]`}>
      <div className="flex justify-center">
        <div className="flex flex-col justify-evenly h-[100vh] max-[1160px]:h-[1350px] max-[590px]:h-[2500px] w-[1110px] max-[1160px]:w-[535px] max-[590px]:w-[325px]">

          {/* Top Row Start */}
          <div className="grid mb-[20px]">

            <div className="row-start-1 col-start-1">
              <h2 className="font-[700] text-[30px] max-[590px]:text-[20px]">Social Media Dashboard</h2>
            </div>

            <div className={`row-start-2 col-start-1 font-[600] ${darkmode ? "text-[#9298B8]" : "text-[#646579]"} max-[590px]:border-b-[1px] max-[590px]:border-[#373A4D] max-[590px]:pb-[20px] max-[590px]:text-[13px]`}>
              <p>{`Total Followers: ${data?.MediaData[0].totalFollowers}`}</p>
            </div>

            <div className="row-start-1 col-start-2 flex gap-[10px] justify-end max-[590px]:row-start-3 max-[590px]:col-start-1 max-[590px]:mt-[20px]">

              <div className="font-[600] max-[590px]:flex max-[590px]:justify-start max-[590px]:w-[265px] max-[590px]:text-[#9298B8] max-[590px]:text-[13px]">
                <p>Dark Mode</p>
              </div>

              <div onClick={darkmodeToggle} className="toggleBGColor w-[50px] h-[25px] rounded-full flex flex-col justify-center hover:cursor-pointer">
                <button onClick={darkmodeToggle} className={`${darkmode ? "bg-[#373857]" : "bg-[#EFF3FC]"} w-[20px] h-[21px] ${darkmode ? "ml-[2px]" : "ml-[28px]"} rounded-full hover:cursor-pointer`}></button>
              </div>

            </div>

          </div>
          {/* Top Row End */}

          {/* Middle Row Start */}
          <div className="grid justify-center gap-[30px] max-[1160px]:gap-[25px]">

            <div>
              <LargeMediaCard
                darkmode={darkmode}
                lineColor={data?.MediaData[0].lineColor}
                mediaIcon={data?.MediaData[0].mediaIcon}
                altTag={data?.MediaData[0].altTag}
                mediaName={data?.MediaData[0].mediaName}
                followerCount={data?.MediaData[0].followerCount}
                countTitle={data?.MediaData[0].countTitle}
                upOrDownIcon={data?.MediaData[0].upOrDownIcon}
                iconAlt={data?.MediaData[0].iconAlt} 
                textColor={data?.MediaData[0].textColor}
                rateText={data?.MediaData[0].rateText}
              />
            </div>
            
            <div className="row-start-1 col-start-2 max-[590px]:row-start-2 max-[590px]:col-start-1">
              <LargeMediaCard
                darkmode={darkmode}
                lineColor={data?.MediaData[1].lineColor}
                mediaIcon={data?.MediaData[1].mediaIcon}
                altTag={data?.MediaData[1].altTag}
                mediaName={data?.MediaData[1].mediaName}
                followerCount={data?.MediaData[1].followerCount}
                countTitle={data?.MediaData[1].countTitle}
                upOrDownIcon={data?.MediaData[1].upOrDownIcon}
                iconAlt={data?.MediaData[1].iconAlt} 
                textColor={data?.MediaData[1].textColor}
                rateText={data?.MediaData[1].rateText}
              />
            </div>

            <div className="row-start-1 col-start-3 max-[1160px]:row-start-2 max-[1160px]:col-start-1 max-[590px]:row-start-3 max-[590px]:col-start-1">
              <LargeMediaCard
                darkmode={darkmode}
                lineColor={data?.MediaData[2].lineColor}
                mediaIcon={data?.MediaData[2].mediaIcon}
                altTag={data?.MediaData[2].altTag}
                mediaName={data?.MediaData[2].mediaName}
                followerCount={data?.MediaData[2].followerCount}
                countTitle={data?.MediaData[2].countTitle}
                upOrDownIcon={data?.MediaData[2].upOrDownIcon}
                iconAlt={data?.MediaData[2].iconAlt} 
                textColor={data?.MediaData[2].textColor}
                rateText={data?.MediaData[2].rateText}
              />
            </div>

            <div className="row-start-1 col-start-4 max-[1160px]:row-start-2 max-[1160px]:col-start-2 max-[590px]:row-start-4 max-[590px]:col-start-1">
              <LargeMediaCard
                darkmode={darkmode}
                lineColor={data?.MediaData[3].lineColor}
                mediaIcon={data?.MediaData[3].mediaIcon}
                altTag={data?.MediaData[3].altTag}
                mediaName={data?.MediaData[3].mediaName}
                followerCount={data?.MediaData[3].followerCount}
                countTitle={data?.MediaData[3].countTitle}
                upOrDownIcon={data?.MediaData[3].upOrDownIcon}
                iconAlt={data?.MediaData[3].iconAlt} 
                textColor={data?.MediaData[3].textColor}
                rateText={data?.MediaData[3].rateText}
              />
            </div>

          </div>
          {/* Middle Row End */}

          {/* Title Row Start */}
          <div className="grid mt-[20px]">

            <div className="row-start-1 col-start-1">
              <h2 className={`${darkmode ? "" : "text-[#646579]"} font-[700] text-[25px]`}>Overview - Today</h2>
            </div>

          </div>
          {/* Title Row End */}

          {/* Bottom Row Start */}
          <div className="grid justify-center gap-[30px] max-[1160px]:gap-[25px]">

            {/* Row One */}
            <div>
              <SmallMediaCard
                darkmode={darkmode}
                mediaIcon={data?.MediaData[4].mediaIcon}
                altTag={data?.MediaData[4].altTag}
                mediaName={data?.MediaData[4].mediaName}
                followerCount={data?.MediaData[4].followerCount}
                upOrDownIcon={data?.MediaData[4].upOrDownIcon}
                iconAlt={data?.MediaData[4].iconAlt}
                textColor={data?.MediaData[4].textColor}
                rateText={data?.MediaData[4].rateText}
              />
            </div>

            <div className="row-start-1 col-start-2 max-[590px]:row-start-2 max-[590px]:col-start-1">
              <SmallMediaCard
                darkmode={darkmode}
                mediaIcon={data?.MediaData[5].mediaIcon}
                altTag={data?.MediaData[5].altTag}
                mediaName={data?.MediaData[5].mediaName}
                followerCount={data?.MediaData[5].followerCount}
                upOrDownIcon={data?.MediaData[5].upOrDownIcon}
                iconAlt={data?.MediaData[5].iconAlt}
                textColor={data?.MediaData[5].textColor}
                rateText={data?.MediaData[5].rateText}
              />
            </div>

            <div className="row-start-1 col-start-3 max-[1160px]:row-start-2 max-[1160px]:col-start-1 max-[590px]:row-start-3 max-[590px]:col-start-1">
              <SmallMediaCard
                darkmode={darkmode}
                mediaIcon={data?.MediaData[6].mediaIcon}
                altTag={data?.MediaData[6].altTag}
                mediaName={data?.MediaData[6].mediaName}
                followerCount={data?.MediaData[6].followerCount}
                upOrDownIcon={data?.MediaData[6].upOrDownIcon}
                iconAlt={data?.MediaData[6].iconAlt}
                textColor={data?.MediaData[6].textColor}
                rateText={data?.MediaData[6].rateText}
              />
            </div>
            
            <div className="row-start-1 col-start-4 max-[1160px]:row-start-2 max-[1160px]:col-start-2 max-[590px]:row-start-4 max-[590px]:col-start-1">
              <SmallMediaCard
                darkmode={darkmode}
                mediaIcon={data?.MediaData[7].mediaIcon}
                altTag={data?.MediaData[7].altTag}
                mediaName={data?.MediaData[7].mediaName}
                followerCount={data?.MediaData[7].followerCount}
                upOrDownIcon={data?.MediaData[7].upOrDownIcon}
                iconAlt={data?.MediaData[7].iconAlt}
                textColor={data?.MediaData[7].textColor}
                rateText={data?.MediaData[7].rateText}
              />
            </div>
            {/* Row One */}

            {/* Row Two */}
            <div className="max-[1160px]:row-start-3 max-[1160px]:col-start-1 max-[590px]:row-start-5 max-[590px]:col-start-1">
              <SmallMediaCard
                darkmode={darkmode}
                mediaIcon={data?.MediaData[8].mediaIcon}
                altTag={data?.MediaData[8].altTag}
                mediaName={data?.MediaData[8].mediaName}
                followerCount={data?.MediaData[8].followerCount}
                upOrDownIcon={data?.MediaData[8].upOrDownIcon}
                iconAlt={data?.MediaData[8].iconAlt}
                textColor={data?.MediaData[8].textColor}
                rateText={data?.MediaData[8].rateText}
              />
            </div>

            <div className="row-start-2 col-start-2 max-[1160px]:row-start-3 max-[1160px]:col-start-2 max-[590px]:row-start-6 max-[590px]:col-start-1">
              <SmallMediaCard
                darkmode={darkmode}
                mediaIcon={data?.MediaData[9].mediaIcon}
                altTag={data?.MediaData[9].altTag}
                mediaName={data?.MediaData[9].mediaName}
                followerCount={data?.MediaData[9].followerCount}
                upOrDownIcon={data?.MediaData[9].upOrDownIcon}
                iconAlt={data?.MediaData[9].iconAlt}
                textColor={data?.MediaData[9].textColor}
                rateText={data?.MediaData[9].rateText}
              />
            </div>

            <div className="row-start-2 col-start-3 max-[1160px]:row-start-4 max-[1160px]:col-start-1 max-[590px]:row-start-7 max-[590px]:col-start-1">
              <SmallMediaCard
                darkmode={darkmode}
                mediaIcon={data?.MediaData[10].mediaIcon}
                altTag={data?.MediaData[10].altTag}
                mediaName={data?.MediaData[10].mediaName}
                followerCount={data?.MediaData[10].followerCount}
                upOrDownIcon={data?.MediaData[10].upOrDownIcon}
                iconAlt={data?.MediaData[10].iconAlt}
                textColor={data?.MediaData[10].textColor}
                rateText={data?.MediaData[10].rateText}
              />
            </div>
            
            <div className="row-start-2 col-start-4 max-[1160px]:row-start-4 max-[1160px]:col-start-2 max-[590px]:row-start-8 max-[590px]:col-start-1">
              <SmallMediaCard
                darkmode={darkmode}
                mediaIcon={data?.MediaData[11].mediaIcon}
                altTag={data?.MediaData[11].altTag}
                mediaName={data?.MediaData[11].mediaName}
                followerCount={data?.MediaData[11].followerCount}
                upOrDownIcon={data?.MediaData[11].upOrDownIcon}
                iconAlt={data?.MediaData[11].iconAlt}
                textColor={data?.MediaData[11].textColor}
                rateText={data?.MediaData[11].rateText}
              />
            </div>
            {/* Row Two */}

          </div>
          {/* Bottom Row End */}

        </div>
      </div>

      </div>

    </div>
  )
}

export default App
