import { ContactUs } from "../components/ContactUs"

function Contact() {
  return (
    <div className="w-full h-full "> 
      <div className="w-full flex flex-col items-center justify-center mt-20">
        <p className="text-4xl uppercase font-semibold">Contact</p>
        <div className="w-12 border-2 border-purple-500  mt-2"></div>
      </div>
      <p className="w-[40%] mx-auto text-center mt-12">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible </p>
      <div className="w-[50%] px-10 bg-gray-200  mx-auto mt-12">
        <ContactUs/>
      </div>
    </div>
  )
}

export default Contact
