import { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UserType } from "../types";

type UserContextType = {
  user: UserType;
  userDetailsChange: (user: UserType) => void;
};

export const UserContext = createContext<UserContextType>({
  user: {
    email: "",
    firstName: "",
    lastName: "",
    expoPushT: "",
  },
  userDetailsChange: (user: UserType) => {},
});

export default function UserContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<UserType>({
    email: "",
    firstName: "",
    lastName: "",
    expoPushT: "",
  });

  const getUser = async () => {
    const user = await AsyncStorage.getItem("@user");

    if (user !== null) {
      setUser((prev) => JSON.parse(user));
    } else {
      console.log("User Is Empty");
    }
  };

  const userDetailsChange = async (newUser: UserType) => {
    setUser((prev) => newUser);

    await AsyncStorage.setItem("@user", JSON.stringify(newUser));
    await getUser();
  };

  const value = {
    user,
    userDetailsChange,
  };
  // @ts-ignore
  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
