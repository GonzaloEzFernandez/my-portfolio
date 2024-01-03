import { useContext, useState } from "react"
import Context from "./context/createContext"
import { motion } from "framer-motion"

function Setting({ handleOpenSetting }) {
	const {
		handleChangeLanguage,
		handleChangeTheme,
	} = useContext(Context)

	const [isLanguageOn, setIsLanguageOn] = useState(false)
	const [isThemeOn, setIsThemeOn] = useState(false)

	const toggleSwitchLanguage = () => {
		setIsLanguageOn(!isLanguageOn);
		handleChangeLanguage(); // Llamar a la función al cambiar el estado
	}

	const toggleSwitchTheme = () => {
		setIsThemeOn(!isThemeOn);
		handleChangeTheme(); // Llamar a la función al cambiar el estado
	}

	const spring = {
		type: "spring",
		stiffness: 700,
		damping: 30,
	}

	return (
		<div>
			<div className="w-80 h-2/3 bg-gradient-to-t from-[#1C2942] to-[#08111B] shadow-xl text-bluePrimary rounded fixed right-0 bottom-0 z-20 ">
				<button onClick={handleOpenSetting} className="ml-[245px] pt-5 z-0">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-18 h-10"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
				<h4 className="text-center text-2xl font-semibold py-3">
					Configuracion
				</h4>
				<div className="text-base font-semibold">
					<div className=" flex gap-4  py-4 px-3 ">
						<p>Cambiar Lenguage:</p>
						<div
							className={`w-14 px-1 bg-red-500 flex items-center rounded-full py-1 cursor-pointer ${
								isLanguageOn ? "justify-end" : "justify-start"
							}`}
							onClick={toggleSwitchLanguage}
						>
							<motion.div
								className="w-5 h-5 bg-white rounded-full"
								layout
								transition={spring}
							/>
						</div>
					</div>
					<div className=" flex gap-4  py-4 px-3 ">
						<p>Cambiar color:</p>
						<div
							className={`w-14 px-1 bg-black flex items-center rounded-full py-1 cursor-pointer ${
								isThemeOn ? "justify-end" : "justify-start"
							}`}
							onClick={toggleSwitchTheme}
						>
							<motion.div
								className="w-5 h-5 bg-white rounded-full"
								layout
								transition={spring}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Setting
