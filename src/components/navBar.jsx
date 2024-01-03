import { Link } from "react-router-dom"
import NavBarMovil from "./NavBarMovil"
import { useContext } from "react"
import Context from "../context/createContext"
import { motion } from "framer-motion"
function NavBar() {
	const { changeLanguage, changeTheme } = useContext(Context)

	return (
		<motion.div
			initial={{ y: -80, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.4, delay:0.1  }}
			className={`fixed px-8 md:px-10 flex items-center  w-full justify-between h-[70px] dark:text-grayPrimary  lg:px-32 z-20 ${
				changeTheme === "light" && "bg-bluePrimary  text-black"
			}`}
		>
			<div>
				<Link to="/">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-9 h-9 dark:hover:text-bluePrimary"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
						/>
					</svg>
				</Link>
			</div>
			<div className="relative">
				<div className="hidden lg:flex lg:items-center  ">
					<Link className="  dark:hover:text-bluePrimary px-[23px] font-semibold text-[17px]">
						{changeLanguage === "es" ? "Inicio" : "Home"}
					</Link>
					<Link className="  dark:hover:text-bluePrimary  p-[23px] font-semibold text-[17px]">
						{changeLanguage === "es" ? "Proyectos" : "Proyects"}
					</Link>
					<Link className="  dark:hover:text-bluePrimary  p-[23px] font-semibold text-[17px]">
						{changeLanguage === "es" ? "Sobre Mí" : "About Me"}
					</Link>
				</div>
				<NavBarMovil />
			</div>
		</motion.div>
	)
}

export default NavBar
