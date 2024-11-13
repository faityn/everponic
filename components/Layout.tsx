import { FC, ReactNode } from "react";
import FooterNav from "./FooterNav";

import HeaderNew from "./HeaderNew";

interface Props {
  children: ReactNode;
  type?: string;
}

const Layout: FC<Props> = ({ children, type }) => {
  return (
    <>
      <div className={`text-white bg-cover bg-no-repeat  relative break-keep`}>
        <HeaderNew type={type} />
        {children}
        <FooterNav />
      </div>
    </>
  );
};

export default Layout;
