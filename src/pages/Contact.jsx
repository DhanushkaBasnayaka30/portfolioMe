import { ContactUs } from "../components/ContactUs"

function Contact() {
  return (
    <div className="w-full h-full "> 
      <div className="w-full flex flex-col items-center justify-center mt-20 ">
        <p className="text-4xl uppercase font-semibold ">Contact</p>
        <div className="w-12 border-2 border-purple-500  mt-2"></div>
      </div>
      <p className="lg:w-[40%] w-[90%] lg:text-base text-sm mx-auto text-center mt-12 ">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible </p>
      <div className="lg:w-[50%] w-[90%] lg:px-10 shadow-gray-300 bg-white shadow-xl  mx-auto mt-12 ">
        <ContactUs/>
      </div>
    </div>
  )
}

export default Contact
