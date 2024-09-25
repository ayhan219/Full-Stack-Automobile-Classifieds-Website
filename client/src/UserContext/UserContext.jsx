import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const getCurrentUser = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/auth/getcurrent",
        {
          withCredentials: true,
        }
      );
      
      setCurrentUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);

  return (
    <UserContext.Provider value={{ currentUser }}>
      {children}
    </UserContext.Provider>
  );
};
