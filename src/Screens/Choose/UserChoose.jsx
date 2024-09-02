import React, { useState } from "react"
import * as Yup from "yup"
import { Link } from "react-router-dom"
import { useFormik } from "formik"
import { useNavigate } from "react-router-dom"
import IMG from "../../Assets/Images/puri_flyer.jpg"
import LOGO from "../../Assets/Images/purdcs.png"
import { routePaths } from "../../Assets/Data/Routes"
import VError from "../../Components/VError"
import TDInputTemplate from "../../Components/TDInputTemplate"
import axios from "axios"
import { Spin } from "antd"
import { LoadingOutlined } from "@ant-design/icons"
import { url } from "../../Address/BaseUrl"
import { Message } from "../../Components/Message"
import { motion } from "framer-motion"

function UserChoose() {
	const navigate = useNavigate()

	return (
		<div
			className="bg-red-800 p-20 flex justify-center min-h-screen min-w-screen"
			style={{
				backgroundImage: `url(${IMG})`,
				backgroundSize: "cover",
				backgroundRepeat: "no-repeat",
			}}
		>
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 0.5, type: "spring" }}
				className="grid grid-cols-2 gap-0 h-auto w-5/6"
			>
				{/* <div className="sm:p-5 sm:block rounded-l-3xl bg-gradient-to-r from-white from-60% via-sky-500 via-30% to-[#ffffff8c] to-10%"> */}
				<div className="sm:p-5 sm:block rounded-l-3xl bg-gradient-to-r from-yellow-50 from-10% via-gray-50 via-70% to-[#ffffff8c] to-90%">
					<div className="h-auto w-auto mx-auto bg-transparent rounded-lg p-1">
						<img src={LOGO} className="h-40 w-40" />
					</div>
				</div>
				<div
					className={`sm:p-5 sm:rounded-r-3xl border-white border-l-0 border-2 grid grid-cols-2 gap-4`}
					style={{
						backgroundColor: "rgba(255, 255, 255, 0.55)",
						backdropFilter: "blur(8px)",
					}}
				>
					<div className="sm:col-span-1">
						<button className="h-48 w-48 self-center bg-red-600 rounded-lg p-1">
							Icon Goes Here
						</button>
					</div>
					<div className="sm:col-span-1">
						<button className="h-48 w-48 self-center bg-red-600 rounded-lg p-1">
							Icon Goes Here
						</button>
					</div>
				</div>
			</motion.div>

			{/* Mobile View */}
			{/* <div className={`block w-80 sm:hidden h-auto space-y-5 rounded-3xl`}>
				<div className={`flex-col items-center justify-center mt-7 p-10`}>
					<div className="flex-col items-center justify-center">
						<motion.h2
							className="text-red-800 text-4xl mt-14 mx-24 font-bold"
							initial={{ opacity: 1 }}
							animate={{ opacity: 0, y: -20 }}
							transition={{ delay: 4, type: "tween" }}
						>
							Welcome
						</motion.h2>
						<motion.img
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ delay: 4, type: "spring" }}
							src={LOGO}
							className="h-20 -mt-16 -ml-4 sm:ml-9 2xl:ml-7 2xl:h-24"
							alt="Flowbite Logo"
						/>
					</div>

					<div>Login form template mobile was here...</div>
				</div>
			</div> */}
		</div>
	)
}

export default UserChoose
