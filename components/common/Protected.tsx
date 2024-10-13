import { FC, ReactNode } from "react";
import { loggedInAtom } from "../atom";
import { useRecoilValue } from "recoil";

import Unauthorized from "@src/pages/unauthorized";
interface Props {
  children: ReactNode;
}
const Protected: FC<Props> = ({ children }) => {
  const loggedIn = useRecoilValue(loggedInAtom);
  if (loggedIn) {
    return children;
  } else {
    return <Unauthorized />;
  }
};
export default Protected;
