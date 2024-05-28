import { Link } from "react-router-dom";
import SearchOrder from "../Features/order/SearchOrder";
import Username from "../Features/user/Username";

function Header() {
  return (
    <div className="flex items-center justify-between border-b border-stone-200 bg-yellow-400 px-4 py-3 uppercase sm:px-6">
      <Link to="/" className=" tracking-widest">
        Fast React Pizza.co
      </Link>
      <SearchOrder />
      <Username />
    </div>
  );
}

export default Header;
