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
			className={`flex px-3 h-[100vh] w-full dark:text-grayPrimary  md:px-10 lg:px-32 md:items-center relative ${
				changeTheme === "dark"
					? "dark:bg-gradient-to-bl from-[#1f5088]  via-darkBluePrimary  to-[#13111C]"
					: "bg-gradient-to-bl from-[#E9F6FE] from via-[#E9F6FE] via to-[#FEFDFF]"
			}`}
		>
			<motion.div
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.4, delay: 0.2 }}
				className="flex flex-col gap-4 w-full dark:text-[#FFFF] justify-center md:w-1/2"
			>
				<div className=" font-bold text-5xl hidden md:block">
					{changeLanguage === "es" ? (
						<h1>
							Hola todos!👋 Soy Gonzalo Fernández
							<span className=" text-bluePrimary">.</span>
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
						src="./img/businessman-explain-pose-character-design-free-vector-removebg-preview.png"
						alt="gonza-movil"
					/>
				</div>
				<div className="dark:text-grayPrimary text-gray-600 text-xl">
					{changeLanguage === "es" ? (
						<p>
							Entusiasta de la programacion y del aprendizaje continuo.
							<strong className="text-[#000] dark:text-grayPrimary "> Desarrollador front-end, </strong>
							<em className="text-bluePrimary">
								rumbo a desarrollador full stack.
							</em>
						</p>
					) : (
						<p>
							Enthusiastic about programming and countinuus learning.
							<strong> Front-end developer, </strong>
							<em className="text-bluePrimary">
								on the way to full stack developer
							</em>
							.
						</p>
					)}
				</div>
				<div className="flex w-[300px] items-center justify-start gap-6 text-lg text-gray-600/50 dark:text-gray-200/50 font-semibold">
					<Link
						to="https://www.linkedin.com/in/gonzalo-fern%C3%A1ndez-a67596299/"
						className="px-4 border-x-2 border-bluePrimary hover:text-bluePrimary "
					>
						Linked In
					</Link>
					<Link
						to="https://github.com/GonzaloEzFernandez"
						className=" pr-4 border-r-2 border-bluePrimary hover:text-bluePrimary "
					>
						Git Hub
					</Link>
				</div>
			</motion.div>
			<div className="flex md:w-1/2">
				<img
					className=" hidden md:block	 w-[600px] h-[600px] object-cover "
					src="./img/businessman-explain-pose-character-design-free-vector-removebg-preview.png"
					alt="front-pick"
				/>
			</div>
			<div className="relative">
				<motion.button
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.9 }}
					onClick={handleOpenSetting}
					className="fixed bottom-10 right-10 bg-[#ffff] text-darkBluePrimary p-2 rounded-full group transition-colors  "
				>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={1.5}
						stroke="currentColor"
						dataSlot="icon"
						className="w-9 h-9 group-hover:scale-100"
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
