import React from 'react'
import { PhoneIcon, BeakerIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";
type Inputs = {
    name: string,
    email: string,
    subject: string,
    message: string,
  };
type Props = {}

function ContactMe({}: Props) {
    const { register, handleSubmit } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href=`mailto:nevilnicks4321@gmail?subject=${formData.subject}&body=Hi, my name is ${formData.name}.${formData.message}(${formData.email})`;
    };
  return (
    <div className=" h-screen flex relative flex-col text-center md:text-left md:flex-row  max-w-7xl px-10 justify-evenly mx-auto  items-center">
        <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">Contact Me</h3>
        <div className="flex-col space-y-10">
            <h4 className="lg:text-4xl text-2xl font-semibold text-center">
                I have got just what you need.{" "}<span className="underline decoration-[#bd93f9]/50">{"Let's talk"}</span>
            </h4>
            <div className="space-y-10">
                <div className="flex items-center space-x-5 justify-center">
                    <PhoneIcon className="text-[#bd93f9] h-7 w-7 animate-pulse"/>
                    <p className="text-2xl">+91{" "}9207932070</p>
                </div>
                <div className="flex items-center space-x-5 justify-center">
                    <EnvelopeIcon className="text-[#bd93f9] h-7 w-7 animate-pulse"/>
                    <p className="text-2xl">nevilnicks4321@gmail.com</p>
                </div>
                <div className="flex items-center space-x-5 justify-center">
                    <MapPinIcon className="text-[#bd93f9] h-7 w-7 animate-pulse"/>
                    <p className="text-2xl">Wadakkanchery</p>
                </div> 
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col space-y-2  mx-auto ">
                    <input  {...register('name')} placeholder="Name" className="contactInput" type="text" />
                    <input {...register('email')} placeholder="Email" className="contactInput" type="email" />
                <input {...register('subject')} placeholder="Subject" className="contactInput" type="text" />
                <textarea {...register('message')} placeholder="Message" className="contactInput"/>
                <button type="submit" className="bg-[#bd93f9] py-5 px-10 rounded-md text-black font-bold text-sm xl:text-lg ">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default ContactMe