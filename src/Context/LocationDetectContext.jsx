import { createContext, useState } from "react";

export const DetectLocationContext = createContext();

export const LocationFunProvider = ({ children }) => {
    const [location, setLocation] = useState("Add Location");
  const [openBox, setOpenBox] = useState(false);

    async function getLocation({ longitude, latitude }) {
  try {
    let response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
    );
    let data = await response.json();
    setLocation(data.address);
    setOpenBox((prev) => !prev);
  } catch (error) {
    console.log(error);
  }
}

async function ExactLonLattValue() {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        resolve({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        });
      },
      (error) => {
        reject(error.message);
      },
    );
  });
}
  return (
    <DetectLocationContext.Provider value={{location,getLocation,ExactLonLattValue,setOpenBox,openBox,location}}>
      {children}
    </DetectLocationContext.Provider>
  );
};
