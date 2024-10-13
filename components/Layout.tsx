import { FC, ReactNode } from "react";
import FooterNav from "./FooterNav";

import HeaderNew from "./HeaderNew";

interface Props {
    children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
    return (
        <>
            <div className={`  text-white bg-cover bg-no-repeat  relative`}>
                <HeaderNew />
                {children}
                <FooterNav />
            </div>
        </>
    );
};

export default Layout;
