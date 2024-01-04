import { useContext, useState } from "react"
import Context from "./context/createContext"
import { motion } from "framer-motion"

function Setting({ handleOpenSetting }) {
	const { handleChangeLanguage, handleChangeTheme } = useContext(Context)

	const [isLanguageOn, setIsLanguageOn] = useState(false)
	const [isThemeOn, setIsThemeOn] = useState(false)

	const toggleSwitchLanguage = () => {
		setIsLanguageOn(!isLanguageOn)
		handleChangeLanguage()
	}

	const toggleSwitchTheme = () => {
		setIsThemeOn(!isThemeOn)
		handleChangeTheme()
	}

	const spring = {
		type: "spring",
		stiffness: 700,
		damping: 30,
	}

	return (
		<motion.div
		initial={{opacity: 0,}}
		animate={{opacity: 1,}}
		transition={{duration: 0.3, delay: 0.1}}
		>
			<div className="w-64 lg:w-72 h-2/5 z-20 bg-gradient-to-bl from-[#1C4678] to-[#13121D] shadow-2xl text-[#ffff] rounded-xl fixed right-12 bottom-24 transition-all ">
				<button
					onClick={handleOpenSetting}
					className=" ml-[200px] lg:ml-[235px] pt-4 z-0"
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						className="w-18 h-10 hover:text-bluePrimary"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>

				<h4 className="mx-3 text-2xl font-semibold py-3">Configuracion</h4>

				<div className="text-base">
					<div className=" flex gap-4  py-4 px-3 ">
						<p
							className={`${
								isLanguageOn ? "text-[#ffff]" : "text-grayPrimary "
							}`}
						>
							Cambiar Lenguage:
						</p>
						<div
							className={`w-[58px] px-2 flex bg-[#13111C] items-center rounded-full py-[5px] cursor-pointer ${
								isLanguageOn ? "justify-end" : "justify-start"
							}`}
							onClick={toggleSwitchLanguage}
						>
							<motion.div
								className="w-5 h-5 rounded-full"
								layout
								transition={spring}
							>
								{
									isLanguageOn ?(
										<span>EN</span>
									) : (<span>ES</span>)
								}
							</motion.div>
						</div>
					</div>
					<div className=" flex gap-4  py-4 px-3 ">
						<p
							className={`${isThemeOn ? "text-[#ffff]" : "text-grayPrimary "}`}
						>
							Cambiar color:
						</p>
						<div
							className={`w-[58px] px-2 bg-[#13111C] flex items-center rounded-full py-[5px] cursor-pointer ${
								isThemeOn ? "justify-end " : "justify-start"
							}`}
							onClick={toggleSwitchTheme}
						>
							<motion.div
								className="w-5 h-5 rounded-full relative"
								layout
								transition={spring}
							>
								{isThemeOn ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-6 h-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										strokeWidth={1.5}
										stroke="currentColor"
										className="w-6 h-6"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"
										/>
									</svg>
								)}
							</motion.div>
						</div>
					</div>
				</div>
			</div>
		</motion.div>
	)
}

export default Setting
