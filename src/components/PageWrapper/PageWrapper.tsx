import { PropsWithChildren } from "react";
import Topbar from "../Topbar";
import Footer from "../Footer";
import { ToastContainer } from "react-toastify";

const PageWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
      <div className="flex flex-col justify-between h-screen">
        <ToastContainer theme="dark"/>
        <Topbar />
        {children}
        <Footer />
      </div>
  );
};

export default PageWrapper;
