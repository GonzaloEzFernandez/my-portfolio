import { useContext } from "react"
import Context from "../context/createContext"

function AboutMe() {
	const { changeLanguage, changeTheme } = useContext(Context)

	return (
		<div className={`flex items-center justify-center py-10 px-3 h-full w-full lg:px-28 dark:bg-darkBluePrimary  dark:border-grayPrimary border-bluePrimary ${changeTheme === "dark"
		? "dark:bg-gradient-to-bl from-[#1f5088]  via-darkBluePrimary to-[#13111C]  dark:border-grayPrimary"
		: "bg-gradient-to-br from-[#FEFDFF] via-[#FEFDFF] to-[#e0f5ff] " }`}>
			<div className="md:w-1/2">
				<img
					className=" hidden md:block	 w-[600px] h-[600px] object-cover"
					src="./img/businessman-explain-pose-character-design-free-vector-removebg-preview.png"
					alt="front-pick"
				/>
			</div>
			<div className="flex md:w-1/2 ">
				<p className="dark:text-grayPrimary text-lg">
					{changeLanguage === "es" ? (
						<div className="flex flex-col gap-6 text-lg">
							<div className="flex items-center justify-center">
								<img
									className="rounded-full w-[100px] h-[150px] object-cover md:hidden"
									src="./img/businessman-explain-pose-character-design-free-vector-removebg-preview.png"
									alt="gonza-movil"
								/>
								<h3 className="text-5xl font-semibold dark:text-bluePrimary md:py-4">
									Sobre Mí
								</h3>
							</div>
							<p>
								🎓 Estudié desarrollo front-end y profundicé en algunas
								tecnologías backend.
							</p>
							<p>
								💻 Especializado en la elaboración de deliciosas interfaces de
								usuario y experiencias de usuario sin fisuras. Siempre
								explorando nuevas tecnologías y frameworks para estar a la
								vanguardia del desarrollo desarrollo web.
							</p>
							<p>
								🚀 Estudié desarrollo front-end y profundicé en algunas
								tecnologías backend.
							</p>
							<p>
								💪🏼 Estudié desarrollo front-end y profundicé en algunas
								tecnologías backend.
							</p>
						</div>
					) : (
						<div className="flex flex-col gap-6 text-lg">
							<h3 className="text-5xl font-semibold text-bluePrimary text-center py-4">
								About Me
							</h3>
							<p>
								🎓 Estudié desarrollo front-end y profundicé en algunas
								tecnologías backend.
							</p>
							<p>
								💻 Especializado en la elaboración de deliciosas interfaces de
								usuario y experiencias de usuario sin fisuras. Siempre
								explorando nuevas tecnologías y frameworks para estar a la
								vanguardia del desarrollo desarrollo web.
							</p>
							<p>
								🚀 Estudié desarrollo front-end y profundicé en algunas
								tecnologías backend.
							</p>
							<p>
								💪🏼 Estudié desarrollo front-end y profundicé en algunas
								tecnologías backend.
							</p>
						</div>
					)}
				</p>
			</div>
		</div>
	)
}

export default AboutMe
