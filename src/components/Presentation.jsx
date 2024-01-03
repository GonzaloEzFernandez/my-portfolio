import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import Context from "../context/createContext"
import Setting from "../Setting"
import { motion } from "framer-motion"
function Presentation() {
	const { changeLanguage, changeTheme } = useContext(Context)

	const [openSetting, setOpenSettin] = useState(false)

	const handleOpenSetting = () => {
		setOpenSettin(!openSetting)
	}

	return (
		<div
			className={`flex px-3 h-[75vh] w-full  border-bluePrimary dark:text-gray-90000 md:px-10 lg:px-32 md:items-center lg:h-[98vh] md:h-auto relative ${
				changeTheme === "dark"
					? "dark:bg-gradient-to-bl from-[#1f5088]  via-darkBluePrimary  to-[#13111C]  dark:border-grayPrimary"
					: "bg-gradient-to-tr from-[#e0f5ff] from-20% via-[#FEFDFF] via-30% to-[#e0f5ff] to-90%"
			}`}
		>
			<motion.div
				initial={{ y: 80, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.4, delay: 0.1 }}
				className="flex flex-col gap-4 w-full dark:text-[#FFFFFF]  justify-center md:w-1/2"
			>
				<div className=" font-bold text-5xl hidden md:block">
					{changeLanguage === "es" ? (
						<h1>
							Hola todos!👋 Soy Gonzalo Fernández{" "}
							<span className=" text-bluePrimary">.</span>{" "}
						</h1>
					) : (
						<h1>Hi there!👋 I`am Gonzalo Fernández</h1>
					)}
				</div>
				<div className="flex w-full items-center justify-center md:hidden">
					<h1 className="font-bold text-4xl ">
						{changeLanguage === "es"
							? "Hola todos!👋 \nSoy Gonzalo Fernández"
							: "Hi there!👋 \nI'am Gonzalo Fernández"}
					</h1>
					<img
						className="rounded-full w-[120px] h-[150px] object-cover md:hidden"
						src="src/img/businessman-explain-pose-character-design-free-vector-removebg-preview.png"
						alt="gonza-movil"
					/>
				</div>
				<div className="dark:text-grayPrimary text-xl">
					{changeLanguage === "es" ? (
						<p>
							Entusiasta de la programacion y del aprendizaje continuo.
							<strong> Desarrollador front-end, </strong>
							<em className="text-bluePrimary">
								rumbo a desarrollador full stack.
							</em>
						</p>
					) : (
						<p>
							Enthusiastic about programming and countinuus learning.
							<strong> Front-end developer, </strong>{" "}
							<em className="text-bluePrimary">
								on the way to full stack developer
							</em>
							.
						</p>
					)}
				</div>
				<div className="flex w-[300px] items-center justify-start gap-6 text-lg text-gray-600/50 dark:text-gray-200/50 font-semibold">
					<Link className="pr-4 border-r-2 border-bluePrimary hover:text-bluePrimary ">
						Linked In
					</Link>
					<Link className=" pr-4 border-r-2 border-bluePrimary hover:text-bluePrimary  ">
						Git Hub
					</Link>
					<Link className="hover:text-bluePrimary pr-4">Email</Link>
				</div>
			</motion.div>
			<div className="flex md:w-1/2">
				<img
					className=" hidden md:block	 w-[600px] h-[600px] object-cover "
					src="src/img/businessman-explain-pose-character-design-free-vector-removebg-preview.png"
					alt="front-pick"
				/>
			</div>
			<div className="relative">
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={handleOpenSetting}
					className="fixed bottom-10 right-10 bg-gray-200 p-2 rounded-full  "
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						dataSlot="icon"
						className="w-9 h-9 text-darkBluePrimary  hover:text-bluePrimary"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
						/>
					</svg>
				</motion.button>

				{openSetting && <Setting handleOpenSetting={handleOpenSetting} />}
			</div>
		</div>
	)
}

export default Presentation
