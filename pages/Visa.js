import { AiOutlineAlignLeft } from "react-icons/ai";
import { BsCalendarEvent } from "react-icons/bs";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { MdOutlineArrowRight } from "react-icons/md";
import { HiArrowSmDown } from "react-icons/hi";
import { HiArrowSmUp } from "react-icons/hi";
import { RiArrowDropDownLine } from "react-icons/ri";
import Image from "next/image";
export default function Visa() {
  return (
    <>
   <div className="bg-[#F5F6F8]   w-screen  h-screen">
        <div className="w-full h-[20.5rem] bg-[#2C4860] ">
          <div className="flex flex-row justify-between text-white text-3xl">
            <AiOutlineAlignLeft className="ml-[1rem] mt-[1rem]" />
            <div>
              <BsCalendarEvent className="mr-[1rem] mt-[1rem]" />
            </div>
          </div>
          <div className="flex justify-center items-center mt-[1rem] ">
            <h5 className="text-lime-400">Available Balance</h5>
          </div>
          <div className="flex justify-center items-center flex-row">
            <RiMoneyDollarCircleFill className="text-2xl text-white" />
            <h1 className="text-3xl text-white"> $7,392.00 </h1>
          </div>
          <div className="flex justify-center items-center">
            <h5 className="text-[#CADEE7]">june 9, 2018</h5>
          </div>
          <div className="flex justify-center items-center pt-[1rem]">
          <div className=" bg-[#324E66] w-[80%] h-[6rem] border border-[#324E66] rounded-lg">
            <div  className=" flex flex-row justify-around items-center text-xl text-white pt-[1rem] ">
              <h1>42012</h1>
              <h1>3049</h1>
              <h1>2800</h1>
              <h1>9815</h1>
            </div>
            <div className="flex justify-between">
            <div className="flex  flex-row items-center text-white pl-[1rem] pt-[0.5rem]">
            <h1>EXPIRE</h1>
            <MdOutlineArrowRight/>
            <h1>02/22</h1>
            </div>
            <div className="flex  flex-row items-center text-white pr-[1rem] pt-[0.5rem]">
              <h1>CVC CODE</h1>
              <MdOutlineArrowRight/>
              <h1>230</h1>
            </div>
          </div>
          </div>

   </div>
   <div className="flex justify-center items-center pt-[1rem] ">
        <div className="w-[90%] h-[6.2rem] bg-[#fff] rounded-xl ">
          <div className="flex flex-row justify-center items-center">
            <div className="w-[5rem] h-[2rem] border border-slate-400 rounded-xl   mt-[1rem]">
              <h1 className="text-center">Income</h1>
            </div>
            <div className="w-[5rem] h-[2rem] border  border-slate-400 rounded-xl ml-[5rem]  mt-[1rem]">
              <h1 className="text-center">Expense</h1>
            </div>
          </div>
          <div className="flex flex-row justify-center items-center">
            <div className="pt-[1rem] text-xl text-[#27F487] flex flex-row ">
              <HiArrowSmDown className="text-4xl text-[#27F487]" />
              <h1> $9,302.00</h1>
            </div>
            <div className="pt-[1rem] text-xl text-[#F42727] flex flex-row pl-[3rem]">
              <HiArrowSmUp className="text-4xl text-[#F42727]" />
              <h1> $2,790.00</h1>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between text-[#2C4860] pl-[1rem] text-xl mt-[1.5rem]">
        <h1>Detail of movements</h1>
        <div className=" text-[#2C4860] pr-[1rem] flex flex-row items-center">
          <h1 className="text-sm" >Weekly</h1>
          <div className="text-3xl ">
                      <RiArrowDropDownLine   />
          </div>

        </div>
      </div>
      <div className="flex justify-center items-center pt-[1rem] flex-col">
        <div className="w-[90%] h-[4.5rem] bg-[#fff] rounded-xl ">
          <div className="flex flex-row items-center justify-between">
            <div className="pl-[1rem] pt-[0.7rem] flex flex-row  items-center">
              <Image src="/dish.png" alt="" width={40} height={40} />
              <div className="flex flex-col pl-[1rem]">
                <h1 className="font-bold text-md ">Restaurant Manhattan</h1>
                <h5>june 10, 2018</h5>
              </div>
            </div>

            <div className="flex justify-end pr-[1rem] pt-[1rem] items-center">
              <h1 className="text-xl text-[#F42727]">$170 </h1>
              <HiArrowSmUp className="text-4xl text-[#F42727]" />
            </div>
          </div>
        </div>
        <div className="w-[90%] h-[4.5rem] bg-[#fff] rounded-xl mt-[0.5rem]">
          <div className="flex flex-row items-center justify-between">
            <div className="pl-[1rem] pt-[0.7rem] flex flex-row ">
              <Image src="/save-money.png" alt="" width={40} height={40} />
              <div className="flex flex-col pl-[1rem]">
                <h1 className="font-bold text-md">Deposit Freelance</h1>
                <h5>june 7, 2018</h5>
              </div>
              </div>
              <div className="flex justify-center pr-[1rem] pt-[1rem]  items-center">
                <h1 className="text-xl text-[#27F487]">$800 </h1>
                <HiArrowSmDown className="text-4xl text-[#27F487]" />
              </div>
          
          </div>
        </div>
        <div className="w-[90%] h-[4.5rem] bg-[#fff] rounded-xl mt-[0.5rem]">
          <div className="flex flex-row items-center justify-between">
            <div className="pl-[1rem] pt-[0.7rem] flex flex-row ">
              <Image src="/paper-bags.png" alt="" width={40} height={40} />
              <div className="flex flex-col pl-[1rem]">
                <h1 className="font-bold text-md">Central Market</h1>
                <h5>june 6, 2018</h5>
              </div>
              </div>
              <div className="flex justify-end pr-[1rem] items-center">
                <h1 className="text-xl text-[#F42727]">$50 </h1>
                <HiArrowSmUp className="text-4xl text-[#F42727]" />
              </div>
        
          </div>
        </div>
        <div className="w-[90%] h-[4.5rem] bg-[#fff] rounded-xl  mt-[0.5rem]">
          <div className="flex flex-row items-center justify-between">
            <div className="pl-[1rem] pt-[0.7rem] flex flex-row ">
              <Image src="/money.png" alt="" width={40} height={40} />
              <div className="flex flex-col pl-[1rem]">
                <h1 className="font-bold text-md">Salary Deposit</h1>
                <h5>june 1, 2018</h5>
              </div>
              </div>
              <div className="flex justify-end pr-[1rem] items-center">
                <h1 className="text-xl text-[#27F487]">$4200 </h1>
                <HiArrowSmDown className="text-4xl text-[#27F487]" />
              </div>
      
          </div>
        </div>
        <div className="w-[90%] h-[4.5rem] bg-[#fff] rounded-xl mt-[0.5rem]">
          <div className="flex flex-row items-center justify-between">
            <div className="pl-[1rem] pt-[0.7rem] flex flex-row ">
              <Image src="/paper-bags.png" alt="" width={40} height={40} />
              <div className="flex flex-col pl-[1rem]">
                <h1 className="font-bold text-md">Central Market</h1>
                <h5>june 1, 2018</h5>
              </div>
              </div>
              <div className="flex justify-end pr-[1rem] items-center">
                <h1 className="text-xl text-[#F42727]">$37 </h1>
                <HiArrowSmUp className="text-4xl text-[#F42727]" />
              </div>
        
          </div>
        </div>
      </div>
        </div>
      </div>
    </>
  );
}
