import Link from "next/link";
import { LoginBtn } from "../auth/loginBtn";
import { Button } from "../ui/button";

const Header = () => {
  return (
    <header className="w-full border-b">
      <div className="max-w-7xl lg:mx-auto p-5 md:px-10 xl:px-0 w-full flex items-center justify-between">
        <Link href="/" className="w-36">
          Home
        </Link>
        <LoginBtn>
          <Button variant="secondary" className="w-36">
            Login
          </Button>
        </LoginBtn>
      </div>
    </header>
  );
};

export default Header;
