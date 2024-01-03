import { useState } from "react"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function ProyectSection({ description, images, proyectsImages, inverted }) {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		ltr: true,
		autoplaySpeed: 3500,
	}

	const [isHover, setIsHover] = useState(false)

	const handleLinkOver = () => {
		setIsHover(true)
	}

	const handleLinkLeave = () => {
		setIsHover(false)
	}

	return (
		<div
			className={`flex items-center justify-center w-full flex-col mb-10 rounded-xl shadow lg:flex-row  ${
				inverted
					? "bg-gray-200/75 dark:bg-gradient-to-r from-darkBluePrimary  to-[#13111C] border-double border-bluePrimary border-l-[8px] "
					: "bg-gray-200/75 dark:bg-gradient-to-r from-[#13111C] to-darkBluePrimary border-double border-bluePrimary border-r-[8px]"
			}`}
		>
			<div
				className={`lg:w-1/2 flex justify-center relative lg:px-10 py-4 ${
					inverted ? "lg:order-2" : "lg:order-1"
				}`}
			>
				<div
					onMouseEnter={handleLinkOver}
					onMouseLeave={handleLinkLeave}
					className="border-double w-full flex items-center justify-center relative rounded-lg "
				>
					<Slider className="w-[290px] sm:w-[600px] lg:w-full" {...settings}>
						{proyectsImages.map((proyectImage, index) => (
							<div className="w-full h-full" key={index}>
								<img
									className="w-full h-full object-cover rounded-lg "
									src={proyectImage.src}
									alt={proyectImage.alt}
								/>
							</div>
						))}
					</Slider>
					<div className=" flex justify-center items-center absolute inset-0  backdrop-blur-sm  opacity-0 transition-opacity hover:opacity-90 rounded-lg">
						{isHover && (
							<Link
								className="py-6 px-10 absolute text-ms rounded-md z-10 text-gray-300 hover:text-[#FFFF] hover:text-[18px] transition-all font-semibold dark:bg-[#13111C]"
									
							>
								Visitar Proyecto
							</Link>
						)}
					</div>
				</div>
			</div>
			<div
				className={`lg:w-1/2 px-8 py-2 text-center dark:text-grayPrimary ${
					inverted ? "lg:order-1" : "lg:order-2"
				}`}
			>
				{description}
				<div className="flex gap-4 items-center justify-center py-6">
					{images.map((image, index) => (
						<img
							key={index}
							src={image.src}
							alt={image.alt}
							className={image.className}
						/>
					))}
				</div>
			</div>
		</div>
	)
}

export default ProyectSection
