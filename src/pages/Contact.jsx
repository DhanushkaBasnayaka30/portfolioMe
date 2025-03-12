import { ContactUs } from "../components/ContactUs"

function Contact() {
  return (
    <div className="w-full h-full bg-blue-800"> 
      <div className="w-full flex  mt-20 ">
        <p className="text-3xl  sm:text-4xl w-full sm:mt-12  text-center capitalize font-semibold text-[#c9f07b] mt-16 ">Contact Me .</p>
        {/* <div className="w-12 border-2 pl-2 border-[#c9f07b]  mt-2"></div> */}
      </div>
      <p className="lg:w-[40%] w-[90%] text-white  lg:text-lg text-base mx-auto text-center mt-12 ">Feel free to Contact me by submitting the form below and I will get back to you as soon as possible </p>
      <div className="lg:w-[50%] w-[90%] lg:px-10 bg-white  rounded-md shadow-xl  mx-auto mt-12 ">
        <ContactUs/>
      </div>
    </div>
  )
}

export default Contact
