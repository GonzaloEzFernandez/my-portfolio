import { useState } from "react"
import { Link } from "react-router-dom"

function NavBarMovil() {
	const [expand, setExpand] = useState(false)

	const handleToggle = () => {
		setExpand(!expand)
	}

	const handleClose = () => {
		setExpand(!expand)
	}
	return (
		<div className="lg:hidden">
			<button onClick={handleToggle}>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={1.5}
					stroke="currentColor"
					className="w-8 h-8"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
					/>
				</svg>
			</button>

			{expand && (
				<div className="h-screen w-screen fixed z-20 top-0 right-0 backdrop-blur-sm"></div>
			)}

			{expand && (
				<div className="text-xl font-semibold  h-screen w-64 bg-darkBluePrimary fixed right-0 top-0 -transale-x-100 z-20 transition-all ease-in-out">
					<button onClick={handleClose} className="ml-[265px] pt-4">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-8 h-8"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6 18L18 6M6 6l12 12"
							/>
						</svg>
					</button>
					<div className="flex flex-col my-6 ">
						<Link className="hover:bg-gradient-to-t from-[#1C2942] to-[#08111B] py-5 pl-8 ">Inicio</Link>
						<Link className="hover:bg-gradient-to-t from-[#1C2942] to-[#08111B] py-5 pl-8 ">Trabajos</Link>
						<Link className="hover:bg-gradient-to-t from-[#1C2942] to-[#08111B] py-5 pl-8 ">Sobre Mí</Link>
					</div>
				</div>
			)}
		</div>
	)
}

export default NavBarMovil
