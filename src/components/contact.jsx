import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";
import toast from 'react-hot-toast';
const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm()
      const onSubmit = async(data) => {
          const userInfo={
              name:data.name,
              email:data.email,
              message:data.message,
          }
          try{await axios.post("https://getform.io/f/agdymnqb", userInfo);
          toast.success("Your Message Has Been Sent");
        }
          catch (error){
              console.log(error);
              toast.error("Something Went Wrong");
          }
      }
    return (
        <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-20'>
            <h1 className='text-3xl text-white font-bold mb-5'>Contact me</h1>
            <span className="text-white">Have a Project in Mind? Let's Start the Conversation!</span>
            <div className="flex flex-col justify-center items-center mt-10">
                <form onSubmit={handleSubmit(onSubmit)} 
                // action="https://getform.io/f/agdymnqb" method="POST" 
                className="bg-slate-200 w-96 rounded-xl px-6 py-8">
                    <h1 className="text-xl font-semibold mb-4">Send Message</h1>
                    <div className="flex flex-col mb-4">
                        <label className="block text-gray-700">Full Name</label>
                        <input {...register("Name", { required: true })} className="shadow sppearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="name" placeholder="Enter Your Full Name" name="name" />
                        {errors.name && <span>This field is required</span>}

                    </div>
                    <div className="flex flex-col mb-4">
                        <label className="block text-gray-700">Email Address</label>
                        <input {...register("email", { required: true })} className="shadow sppearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" id="email" placeholder="Enter Your Email" name="email" />
                        {errors.email && <span>This field is required</span>}

                    </div>
                    <div {...register("message", { required: true })} className="flex flex-col mb-4">
                        <label className="block text-gray-700">Message</label>
                        <textarea className="shadow sppearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" id="message" placeholder="Enter Your Query" name="message" />
                        {errors.message && <span>This field is required</span>}
                    </div>
                    <button type="submit" className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300">Send</button>
                </form>
            </div>
            <hr className="mt-20" />
        </div>
    )
}

export default Contact
