
'use client'




import Image from "next/image";
import { useRouter } from "next/navigation";

import { useState } from "react";
import { useForm } from "react-hook-form";


export default function FormWithValidation() {

  const router = useRouter()
  const {register  , formState : {errors} , handleSubmit , watch} = useForm();

  const [formData , setFormData] = useState(null);
  console.log('FormData : ' , formData);
  

  


  const onSubmit = (data) => {
    console.log("data" , data)
    // setFormData(data)

    router.push(`/secondStep?data=${encodeURIComponent(JSON.stringify(data))}`)

  }


  
  return (
    <main>

    <div>
        <h2>{formData?.fullName}</h2>
    </div>


      {/* form */}

      <div className="my-5">
      <div className="text-center heebo">
        <h2 className="text-2xl font-bold mt-8 text-[#006589]">Form</h2>
      </div>
      <div className="hero   min-h-screen">
        <div className="hero-content">
          <div className="card border  bg-white shadow-lg rounded-lg">
            <form className="card-body lg:w-[700px] min-h-[320px] relative"onSubmit={handleSubmit(onSubmit)} >
              {/* personal information */}
         
                <div className="form-control w-full ">
                  <label className="label block" >
                    <span className="text-base font-semibold text-[#005689]">
                      Full Name <span className="text-lg text-red-600"> *</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register('fullName' , {required : 'Your full name is required'} )}
                    
                    placeholder="enter your full name"
                    
                    className="border-b-2  border-[#005689] focus:border-b-2 focus:border-[#7baac5] outline-none w-full"
                  />
                  {
                    errors?.fullName && <p className="text-red-600 text-sm mt-1">{errors?.fullName?.message}</p>
                  }
                </div>
                <div className="form-control my-2 w-full">
                  <label className="label block mb-1">
                    <span className="text-base font-semibold text-[#005689]">
                     email <span className="text-lg text-red-600"> *</span>
                    </span>
                  </label>
                  <input
                    type="email"
                    {...register('email' ,  {required : 'Email is required' , pattern :  {
                        value : /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message : 'Please enter a valid format email address'
                    } })}
                    placeholder="enter your email"
                    className="border-b-2  borde w-fullr-[#005689] focus:border-b-2 focus:border-[#7baac5] outline-none w-full"
                    
                  />
                  {
                    errors?.email && <p className="text-red-600 text-sm mt-1">{errors?.email?.message}</p>
                  }
                </div>
          <div className="form-control w-full">
                  <label className="label block mb-1">
                    <span className="text-base font-semibold text-[#005689]">
                     Phone Number <span className="text-lg text-red-600"> *</span>
                    </span>
                  </label>
                  <input
                    type="number"
                    {...register('phoneNumber' ,{minLength : {
                    value :   10,
                    message : "Phone number must be at least 10 digits"
                    
                    }, required : 'Phone number is required'})}
                    placeholder="enter your phone number"
                    className="border-b-2  border-[#005689] focus:border-b-2 focus:border-[#7baac5] outline-none w-full"
                    
                  />
                  {
                    errors?.phoneNumber && <p className="text-red-600 text-sm mt-1">{errors?.phoneNumber?.message}</p>
                  }

                </div>


                
          <div className="form-control  bg-white rounded-lg absolute right-4 bottom-4">
                <button
                  className={`bg-[#006589] hover:bg-[#466875] max-w-[320px] px-4 py-2  text-white rounded-md cursor-pointer`}
                  type="submit"
                  
                >
                  Next Step
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    </main>
  );
}
