import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

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
				<label>Name</label>
				<input
					required
					className="lg:w-[90%] rounded bg-gray-200 float-start flex h-16 pl-2 gap-y-2 outline-none"
					placeholder="jonny max"
					type="text"
					name="from_name"
				/>
			</div>
			<div className="w-full flex flex-col justify-center gap-y-2">
				<label>Email</label>
				<input
					required
					className="lg:w-[90%]  rounded bg-gray-200 flex h-16 pl-2 outline-none"
					type="email"
					name="from_email"
					placeholder="jonnymax@gmail.com"
				/>
			</div>
			<div className="w-full flex flex-col justify-center gap-y-2">
				<label>Message</label>
				<textarea
					required
					className="lg:w-[90%] pt-2 rounded bg-gray-200 flex text-sm lg:text-base h-20 lg:h-40 pl-2 outline-none"
					name="message"
					placeholder="Enter your message"
				/>
			</div>
			<div className=" h-20 w-full cursor-pointer flex items-center justify-start ">
				<input className="px-12 text-center font-semibold cursor-pointer text-white py-1 lg:py-2 bg-purple-500 rounded" type="submit" value="Send Message" />
			</div>
		</form>
	);
};
