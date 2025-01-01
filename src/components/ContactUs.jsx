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
			<div className="w-full flex flex-col justify-center gap-y-2">
				<label>Name</label>
				<input
					className="w-[90%] float-start flex h-16 pl-2 gap-y-2 outline-none"
					placeholder="jonny max"
					type="text"
					name="user_name"
				/>
			</div>
			<div className="w-full flex flex-col justify-center gap-y-2">
				<label>Email</label>
				<input
					className="w-[90%] float-start  flex h-16 pl-2 outline-none"
					type="email"
					name="user_email"
          placeholder="jonnymax@gmail.com"
				/>
			</div>
			<div className="w-full flex flex-col justify-center gap-y-2">
				<label>Message</label>
				<textarea
					className="w-[90%] float-start flex h-40 pl-2 outline-none"
					name="message"
          placeholder="Enter your message"
				/>
			</div>
			<div className=" h-20 w-full cursor-pointer flex items-center justify-start ">
				<input className="px-12 text-center font-semibold text-white py-2 bg-purple-500 rounded-md" type="submit" value="Send" />
			</div>
		</form>
	);
};
