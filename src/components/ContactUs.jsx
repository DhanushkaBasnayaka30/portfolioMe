import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

		emailjs
			.sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
				publicKey: "YOUR_PUBLIC_KEY",
			})
			.then(
				() => {
					console.log("SUCCESS!");
				},
				(error) => {
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
					className="lg:w-[90%] rounded bg-gray-200 float-start flex h-16 pl-2 gap-y-2 outline-none"
					placeholder="jonny max"
					type="text"
					name="user_name"
				/>
			</div>
			<div className="w-full flex flex-col justify-center gap-y-2">
				<label>Email</label>
				<input
					className="lg:w-[90%]  rounded bg-gray-200 flex h-16 pl-2 outline-none"
					type="email"
					name="user_email"
          placeholder="jonnymax@gmail.com"
				/>
			</div>
			<div className="w-full flex flex-col justify-center gap-y-2">
				<label>Message</label>
				<textarea
					className="lg:w-[90%] pt-2 rounded bg-gray-200 flex text-sm lg:text-base h-20 lg:h-40 pl-2 outline-none"
					name="message"
          placeholder="Enter your message"
				/>
			</div>
			<div className=" h-20 w-full cursor-pointer flex items-center justify-start ">
				<input className="px-12 text-center font-semibold text-white py-1 lg:py-2 bg-purple-500 rounded" type="submit" value="Send" />
			</div>
		</form>
	);
};
