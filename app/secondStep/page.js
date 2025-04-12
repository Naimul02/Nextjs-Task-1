
'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import React from 'react'
import { useForm } from 'react-hook-form';


export default function SecondStep() {
    const {register  , formState : {errors} , handleSubmit , watch} = useForm();
    const router = useRouter();
    
    const searchParams = useSearchParams();
const firstStepdata = JSON.parse(searchParams.get('data'));
console.log(firstStepdata);



const onSubmit = (data) => {
    console.log("data" , data)
    // setFormData(data)
    const firstAndSecondStepData ={
        fullName : firstStepdata?.fullName,
        email : firstStepdata?.email,
        phoneNumber : firstStepdata?.phoneNumber,
        streetAddress : data?.streetAddress,
        city : data?.city,
        zipCode : data?.zipCode
    }
    console.log("firstAndSecondStepData" , firstAndSecondStepData)

    router.push(`/thirdStep?data=${encodeURIComponent(JSON.stringify(firstAndSecondStepData))}`)

  }
  return (
    <div className='max-w-[720px] mx-auto'>


<div className="my-5 lg:my-16 w-full ">
        <div className="  lg:w-[720px]">
          <div className="card border   shadow-lg rounded-lg relative w-full">
            <form className="card-body lg:w-[700px] min-h-[320px] "onSubmit={handleSubmit(onSubmit)} >
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
              
              

          

              <div className="form-control my-1 w-full">
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
              <div className="form-control  bg-white rounded-lg absolute right-4 bottom-0 mb-4 mt-4">
              
                <button
                  className={`bg-[#006589] hover:bg-[#466875] max-w-[320px] px-4 py-2  text-white rounded-md cursor-pointer text-sm`}
                  type="submit"
                  
                >
                  Next Step
                </button>
                
              </div>
              </form>
              <button type="submit"
                  className={`bg-[#006589] hover:bg-[#466875] max-w-[320px] px-4 py-2  text-white rounded-md cursor-pointer absolute right-28 h-[37px] text-sm bottom-4`}
                  onClick={() => router?.back()}
                  
                >
                  Previous Step
                </button>
              
              </div>
              </div>
              </div>
    </div>
  )
}
