import { createContext, useContext, useEffect, useState } from "react";
const Context = createContext();
export const ContextProvider = ({ children }: any) => {
  const [otp, setotp] = useState(null);
  const [number, setnumber] = useState(null);
  const [user, setuser] = useState(null);
  const [temoData, settemoData] = useState(null);
  return (
    <Context.Provider
      value={{
        otp,
        setotp,
        number,
        setnumber,
        user,
        setuser,
        temoData,
        settemoData,
      }}
    >
      {children}
    </Context.Provider>
  );
};
export const userContext = () => useContext(Context);
