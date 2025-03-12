import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { BsSend } from "react-icons/bs";
import { toast } from "react-toastify";
import { IoSendSharp } from "react-icons/io5";

export const ContactUs = () => {
	const emailJsKey = import.meta.env.VITE_EMAILJS_KEY;
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("service_aesyacd", "template_w4sdgbg", form.current, {
				publicKey: emailJsKey,
			})
			.then(
				() => {
					console.log("SUCCESS!");
					toast.success("Message Send Successfuly")
					form.current.reset(); // Reset form fields
				},
				(error) => {
					toast.error(error.text)
					console.log("FAILED...", error.text);
				}
			);
	};

	return (
		<form
			ref={form}
			onSubmit={sendEmail}
			className="flex items-center justify-center flex-col w-full gap-y-8 p-4 ">
			<div className="w-full flex flex-col justify-center gap-y-2 text-sm lg:text-base">
				<label className="text-blue-800">Name</label>
				<input
					required
					className="lg:w-[90%] rounded bg-gray-200 float-start flex h-16 pl-2 gap-y-2 outline-none"
					placeholder="jonny max"
					type="text"
					name="from_name"
				/>
			</div>
			<div className="w-full flex flex-col justify-center gap-y-2">
				<label className="text-blue-800">Email</label>
				<input
					required
					className="lg:w-[90%]  rounded bg-gray-200 flex h-16 pl-2 outline-none"
					type="email"
					name="from_email"
					placeholder="jonnymax@gmail.com"
				/>
			</div>
			<div className="w-full flex flex-col justify-center gap-y-2">
				<label className="text-blue-800">Message</label>
				<textarea
					required
					className="lg:w-[90%] pt-2 rounded bg-gray-200 flex text-sm lg:text-base h-20 lg:h-40 pl-2 outline-none"
					name="message"
					placeholder="Enter your message"
				/>
			</div>
			<div className=" h-20 w-full cursor-pointer flex items-center justify-start ">
				<div>

				</div>
				<div className="bg-blue-800  px-6 gap-x-2 rounded flex justify-center items-center">

				<input className="text-center font-semibold cursor-pointer  py-3 lg:py-2 text-[#c9f07b] " type="submit" value="Send Message" />
				<IoSendSharp   size={20} color="#c9f07b"/>
			</div>
				</div>
		</form>
	);
};
