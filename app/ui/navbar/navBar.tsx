import UserSession from "@/app/utils/userSession";
import NavBars from "./nav-Responsive";

export default function NavBar() {
  return (
    <nav className="rounded-lg shadow shadow-black">
      <div>
        <NavBars />
        <UserSession />
        {/* <BarsImage /> */}
      </div>
    </nav>
  );
}
