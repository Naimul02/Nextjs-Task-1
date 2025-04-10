
'use client'



import Image from "next/image";
import { useForm } from "react-hook-form";


export default function FormWithValidation() {


  const {register  , formState : {errors} , handleSubmit} = useForm();


  const onSubmit = (data) => {
    console.log("data" , data)
  }
  return (
    <main>
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
              <div className="flex gap-16 flex-col lg:flex-row items-center bg-white rounded-lg py-5 px-4">
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
                    
                    className="border-b-2  border-[#005689] focus:border-b-2 focus:border-[#7baac5] outline-none"
                  />
                  {
                    errors?.fullName && <p className="text-red-600 text-sm mt-1">{errors?.fullName?.message}</p>
                  }
                </div>
                <div className="form-control w-full">
                  <label className="label">
                    <span className="text-base font-semibold text-[#005689]">
                     email <span className="text-lg text-red-600"> *</span>
                    </span>
                  </label>
                  <input
                    type="email"
                    {...register('email' , {required : true})}
                    placeholder="enter your email"
                    className="border-b-2  border-[#005689] focus:border-b-2 focus:border-[#7baac5] outline-none"
                    
                  />
                </div>
              </div>
              <div className="form-control w-full">
                  <label className="label">
                    <span className="text-base font-semibold text-[#005689]">
                     Phone Number <span className="text-lg text-red-600"> *</span>
                    </span>
                  </label>
                  <input
                    type="number"
                    {...register('phoneNumber' ,{min : 10, required : true})}
                    placeholder="enter your phone number"
                    className="border-b-2  border-[#005689] focus:border-b-2 focus:border-[#7baac5] outline-none"
                    
                  />
                </div>

                {/* Address Details */}
              <div className="form-control w-full">
                  <label className="label">
                    <span className="text-base font-semibold text-[#005689]">
                     Street Address <span className="text-lg text-red-600"> *</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register('streetAddress' ,{required : true})}
                    placeholder="street address"
                    className="border-b-2  border-[#005689] focus:border-b-2 focus:border-[#7baac5] outline-none"
                    
                  />
                </div>
              <div className="form-control w-full">
                  <label className="label">
                    <span className="text-base font-semibold text-[#005689]">
                    City <span className="text-lg text-red-600"> *</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register('city' ,{required : true})}
                    placeholder="city"
                    className="border-b-2  border-[#005689] focus:border-b-2 focus:border-[#7baac5] outline-none"
                    
                  />
                </div>
              <div className="form-control w-full">
                  <label className="label">
                    <span className="text-base font-semibold text-[#005689]">
                    Zip Code <span className="text-lg text-red-600"> *</span>
                    </span>
                  </label>
                  <input
                    type="number"
                    {...register('zipCode' ,{required : true , min : 5})}
                    placeholder="zip code"
                    className="border-b-2  border-[#005689] focus:border-b-2 focus:border-[#7baac5] outline-none"
                    
                  />
                </div>

              {/* Account Setup */}
              <div className="form-control w-full">
                  <label className="label">
                    <span className="text-base font-semibold text-[#005689]">
                     User Name <span className="text-lg text-red-600"> *</span>
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register('userName' ,{required : true , minLength : 4})}
                    placeholder="user name"
                    className="border-b-2  border-[#005689] focus:border-b-2 focus:border-[#7baac5] outline-none"
                    
                  />
                </div>
              <div className="form-control w-full">
                  <label className="label">
                    <span className="text-base font-semibold text-[#005689]">
                     Password <span className="text-lg text-red-600"> *</span>
                    </span>
                  </label>
                  <input
                    type="password"
                    {...register('password' ,{required : true , minLength : 6})}
                    placeholder="password"
                    className="border-b-2  border-[#005689] focus:border-b-2 focus:border-[#7baac5] outline-none"
                    
                  />
                </div>
              <div className="form-control w-full">
                  <label className="label">
                    <span className="text-base font-semibold text-[#005689]">
                     Confirm Password <span className="text-lg text-red-600"> *</span>
                    </span>
                  </label>
                  <input
                    type="password"
                    {...register('confirmPassword' ,{required : true , minLength : 6})}
                    placeholder="confirm password"
                    className="border-b-2  border-[#005689] focus:border-b-2 focus:border-[#7baac5] outline-none"
                    
                  />
                </div>

              

              

              

              <div className="form-control mt-6 bg-white rounded-lg py-5 px-4">
                <button
                  className={`bg-[#006589] hover:bg-[#1c3eaf] w-full py-3 text-white rounded-md cursor-pointer`}
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
