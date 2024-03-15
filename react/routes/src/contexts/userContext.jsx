import { createContext, useContext, useEffect, useState } from "react";

const initialValue = {
  name: "",
  email: "",
  cart: 0,
};

const UserContext = createContext();

function UserContextProvider({ children }) {
  const [userInfo, setUserInfo] = useState(initialValue);

  useEffect(() => {
    setTimeout(() => {
      setUserInfo((prev) => ({ ...prev, name: "Samuel" }));
    }, 3000);
  }, []);

  const value = {
    userInfo,
    setUserInfo,
  };

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}

function useUserContext() {
  const { userInfo, setUserInfo } = useContext(UserContext);
  return { userInfo, setUserInfo };
}

export { useUserContext, UserContextProvider };
