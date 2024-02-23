import { PropsWithChildren } from "react";
import Topbar from "../Topbar";
import Footer from "../Footer";

const PageWrapper: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-screen">
      <Topbar />
      {children}
      <Footer />
    </div>
  );
};

export default PageWrapper;
