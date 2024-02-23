import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo.svg";

function TopbarLogo() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div
      onClick={handleClick}
      className="flex flex-initial items-center cursor-pointer hover:brightness-125 acitve:opacity-75 min-w-[100px]"
    >
      <img src={logo} className="h-10 mr-3 w-[120px]" alt="Flowbite Logo" />
    </div>
  );
}

export default TopbarLogo;
