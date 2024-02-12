import UserSession from "@/app/utils/userSession";
import NavBars from "./nav-Responsive";
import userAstroSvg from "@/public/svg/userAstronaut.svg";
import Image from "next/image";

export default function NavBar() {
  return (
    <nav>
      <div className=" flex justify-around pt-10 bg-white h-[4rem] items-center">
        <h1 className="text-xl font-Roboto">NextShop</h1>
        <div className="flex flex-col justify-center items-center ">
          <div className="bg-purple-400 h-[4rem] flex  justify-center items-center w-[4rem] rounded-full">
            <Image src={userAstroSvg} alt="user" width={40} />
          </div>
          <UserSession />
        </div>
      </div>
      <div>
        <NavBars />
      </div>
    </nav>
  );
}
