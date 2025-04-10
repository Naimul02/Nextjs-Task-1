
'use client'



import Image from "next/image";
import { useState } from "react";
import { useForm } from "react-hook-form";


export default function FormWithValidation() {


  const {register  , formState : {errors} , handleSubmit , watch} = useForm();

  const [formData , setFormData] = useState(null);
  console.log('FormData : ' , formData)

  


  const onSubmit = (data) => {
    console.log("data" , data)
    setFormData(data)
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
          <div className="card border  bg-white   shadow-lg rounded-lg ">
            <form className="card-body lg:w-[700px]"onSubmit={handleSubmit(onSubmit)}>
              {/* personal information */}
              <div className="flex gap-12 flex-col lg:flex-row items-center bg-white rounded-lg py-5 px-4">
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
                <div className="form-control w-full">
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
              </div>

              <div className="flex gap-12 flex-col lg:flex-row items-center bg-white rounded-lg py-5 px-4">

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
                    placeholder="enter your phone number w-full"
                    className="border-b-2  border-[#005689] focus:border-b-2 focus:border-[#7baac5] outline-none w-full"
                    
                  />
                  {
                    errors?.phoneNumber && <p className="text-red-600 text-sm mt-1">{errors?.phoneNumber?.message}</p>
                  }

                </div>

                {/* Address Details */}
              <div className="form-control w-full">
                  <label className="label block mb-1">
                    <span className="text-base font-semibold text-[#005689]">
                     Street Address <span className="text-lg text-red-600"> *</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register('streetAddress' ,{required : 'Your street address is required'})}
                    placeholder="street address"
                    className="border-b-2  border-[#005689] focus:border-b-2 focus:border-[#7baac5] outline-none w-full"
                    
                  />
                  {
                    errors?.streetAddress && <p className="text-red-600 text-sm mt-1">{errors?.streetAddress?.message}</p>
                  }
                </div>
              </div>
              

              <div className="flex gap-12 flex-col lg:flex-row items-center bg-white rounded-lg py-5 px-4">

              <div className="form-control w-full">
                  <label className="label block mb-1">
                    <span className="text-base font-semibold text-[#005689]">
                    City <span className="text-lg text-red-600"> *</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register('city' ,{required : "Your city is required"})}
                    placeholder="city"
                    className="border-b-2  border-[#005689] focus:border-b-2 focus:border-[#7baac5] outline-none w-full"
                    
                  />
                  {
                    errors?.city &&  <p className="text-red-600 text-sm mt-1">{errors?.city?.message}</p>
                  }
                </div>
              <div className="form-control w-full">
                  <label className="label block mb-1">
                    <span className="text-base font-semibold text-[#005689]">
                    Zip Code <span className="text-lg text-red-600"> *</span>
                    </span>
                  </label>
                  <input
                    type="number"
                    {...register('zipCode' ,{required : 'Zip code is required' , minLength : {
                      value : 5,
                      message : 'Zip code must be at least 5 digits'
                    }})}
                    placeholder="zip code"
                    className="border-b-2 w-full  border-[#005689] focus:border-b-2 focus:border-[#7baac5] outline-none"
                    
                  />
                  {
                    errors?.zipCode &&  <p className="text-red-600 text-sm mt-1">{errors?.zipCode?.message}</p>
                  }
                </div>

              </div>
              

              <div className="flex gap-12 flex-col lg:flex-row items-center bg-white rounded-lg py-5 px-4">

                  {/* Account Setup */}
              <div className="form-control w-full">
                  <label className="label block mb-1">
                    <span className="text-base font-semibold text-[#005689]">
                     User Name <span className="text-lg text-red-600"> *</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register('userName' ,{required : 'User name is required' , minLength : {
                      value : 4,
                      message : 'Username must be at least 4 characters'  
                    }})}
                    placeholder="user name"
                    className="border-b-2  w-full border-[#005689] focus:border-b-2 focus:border-[#7baac5] outline-none"
                    
                  />
                  {
                    errors?.userName && <p className="text-red-600 text-sm mt-1">{errors?.userName?.message}</p>
                  }
                </div>
              <div className="form-control w-full">
                  <label className="label block mb-1">
                    <span className="text-base font-semibold text-[#005689]">
                     Password <span className="text-lg text-red-600"> *</span>
                    </span>
                  </label>
                  <input
                    type="password"
                    {...register('password' ,{required : 'password is required' , minLength : {
                      value : 6,
                      message : 'Password must be at least 6 characters'
                    }})}
                    placeholder="password"
                    className="border-b-2 w-full  border-[#005689] focus:border-b-2 focus:border-[#7baac5] outline-none"
                    
                  />
                  {
                    errors?.password && <p className="text-red-600 text-sm mt-1">{errors?.password?.message}</p>
                  }
                </div>


              </div>


              <div className="form-control w-full py-5 px-4">
                  <label className="label block mb-1">
                    <span className="text-base font-semibold text-[#005689]">
                     Confirm Password <span className="text-lg text-red-600"> *</span>
                    </span>
                  </label>
                  <input
                    type="password"
                    {...register('confirmPassword' ,{required : 'Please confirm your password' , 
                        validate : (value) => value === watch('password') || 'passwords do not match'

                    })}
                    placeholder="confirm password"
                    className="border-b-2  border-[#005689] focus:border-b-2 focus:border-[#7baac5] outline-none w-full"
                    
                  />
                  {
                    errors?.confirmPassword && <p className="text-red-600 text-sm mt-1">{errors?.confirmPassword?.message}</p>
                  }
                </div>

              

              

              

              <div className="form-control mt-6 bg-white rounded-lg py-5 px-4">
                <button
                  className={`bg-[#006589] hover:bg-[#466875] w-full py-3 text-white rounded-md cursor-pointer`}
                  type="submit"
                  
                >
                  Submit
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
