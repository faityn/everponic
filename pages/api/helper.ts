import getToken from "@src/helper/getToken";
const token = getToken();
export const getJsonHeader = () => {
  const headerOptions = {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };

  return headerOptions;
};
