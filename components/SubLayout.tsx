import { FC, ReactNode } from "react";
import FooterNav from "./FooterNav";
import HeaderWhite from "./HeaderWhite";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  return (
    <>
      <div className={`  text-white bg-cover bg-no-repeat  relative`}>
        <HeaderWhite />
        {children}
        <FooterNav />
      </div>
    </>
  );
};

export default Layout;
