import { useEffect, useState } from "react"
import Context from "./createContext"

const Idioma = ({ children }) => {
	const [changeLanguage, setChangeLanguage] = useState("es");
	const [changeTheme, setChangeTheme] = useState("dark"); // Inicias con dark para tener el negro como primario
	const [transform, setTransform] = useState(false);
  
	const handleChangeLanguage = () => {
	  const newLanguage = changeLanguage === "es" ? "en" : "es";
	  setChangeLanguage(newLanguage);
	};
  
	const handleChangeTheme = () => {
	  const newTheme = changeTheme === "light" ? "dark" : "light";
	  setChangeTheme(newTheme);
	};
  
	const handleTransform = () => {
	  setTransform(!transform);
	};
  
	useEffect(() => {
	  document.querySelector("html").classList.toggle("dark", changeTheme === "dark");
	}, [changeTheme]);
  
	return (
	  <Context.Provider
		value={{
		  handleChangeLanguage,
		  changeLanguage,
		  setChangeLanguage,
		  handleTransform,
		  transform,
		  handleChangeTheme,
		  changeTheme,
		}}
	  >
		{children}
	  </Context.Provider>
	);
  };
  

export default Idioma
