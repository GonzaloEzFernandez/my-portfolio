import Input from "./Input"
import { useRef, useState, useContext } from "react"
import emailjs from "@emailjs/browser"
import Context from "../context/createContext"

function Contact() {
	const { changeLanguage, changeTheme } = useContext(Context)

	const [, setReset] = useState("")

	const form = useRef()

	const sendEmail = e => {
		e.preventDefault()

		emailjs
			.sendForm(
				"service_zoj9bve",
				"template_o05hteh",
				form.current,
				"b2rbKt5oCKAqlYq4x",
			)
			.then(
				result => {
					console.log(result.text)
				},
				error => {
					console.log(error.text)
				},
			)

		setReset()
	}

	return (
		<div
			className={`flex flex-col justify-start items-center h-auto dark:text-white w-full lg:p-8  border-bluePrimary ${
				changeTheme === "dark"
				? "dark:bg-gradient-to-tr from-[#31132A] via-[#13111C] to-darkBluePrimary  dark:border-grayPrimary"
				: "bg-gradient-to-tl from-slate-100 to-slate-500/50"
			} `}
		>
			<form
				ref={form}
				onSubmit={sendEmail}
				className="w-screen h-full lg:w-4/6 px-16 py-8 rounded-lg lg:border-double border-[6px] lg:border-bluePrimary dark:bg-darkBluePrimary"
			>
				<h3 className="text-5xl text-center font-semibold py-4 dark:text-bluePrimary">
					{changeLanguage === "es" ? "Contactame" : "Contact"}
				</h3>
				<div className="flex gap-4 ">
					<Input type="text" name="user_name" placeholder="Nombre" />
					<Input type="text" name="user_lastname" placeholder="Apellido" />
				</div>

				<Input type="email" name="user_email" placeholder="Email" />

				<textarea
					className="outline-none px-4 py-4 bg-gray-200/75 dark:bg-[#1D253D] rounded-lg block w-full my-4"
					name="message"
					rows="4"
					placeholder="Escribe tu petición..."
				></textarea>
				<button
					type="submit"
					className="text-center  font-semibold bg-gray-200/75 dark:bg-darkBluePrimary rounded-lg w-full py-4 dark:text-bluePrimary dark:hover:bg-bluePrimary/90 dark:hover:text-white hover:bg-bluePrimary/70 hover:text-white transition-colors"
				>
					Enviar
				</button>
			</form>
		</div>
	)
}

export default Contact
