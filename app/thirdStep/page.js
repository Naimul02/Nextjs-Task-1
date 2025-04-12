
'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import toast, { Toaster } from 'react-hot-toast';


export default function ThirdStep() {
    const {register  , formState : {errors} , handleSubmit , watch} = useForm();

    const searchParams = useSearchParams();
    const firstAndSecondStepData = JSON.parse(searchParams.get('data'))
    const router = useRouter();
    
  // // live preview
  
  const watchConfirmPassword = watch('confirmPassword');
  const livePreviewData = {
    fullName : firstAndSecondStepData?.fullName,
        email : firstAndSecondStepData?.email,
        phoneNumber : firstAndSecondStepData?.phoneNumber,
        streetAddress : firstAndSecondStepData?.streetAddress,
        city : firstAndSecondStepData?.city,
        zipCode : firstAndSecondStepData?.zipCode,
  
        
  }
  
    



    const [submitedData , setSubmitedData] = useState(null);
    console.log('Submited Data' , submitedData);

    const onSubmit = (data) => {
    
    
    
    const firstSecondAndThirdStepData ={
        fullName : firstAndSecondStepData?.fullName,
        email : firstAndSecondStepData?.email,
        phoneNumber : firstAndSecondStepData?.phoneNumber,
        streetAddress : firstAndSecondStepData?.streetAddress,
        city : firstAndSecondStepData?.city,
        zipCode : firstAndSecondStepData?.zipCode,
        userName : data?.userName,
        password: data?.password,
        confirmPassword : data?.confirmPassword
        

    }
    setSubmitedData(firstSecondAndThirdStepData);
    toast.success('Your form has been submitted successfully.')
    
  }


  return (
    <div className=''>
        
    <div className='max-w-6xl mx-auto my-5 flex items-center  lg:my-16 '>
        <div className="flex flex-col lg:flex-row w-full  gap-3">
        <div className="">
          <div className="card border w-full lg:w-[700px]    shadow-lg rounded-lg ">
            <form className="card-body w-full  lg:w-[700px] min-h-[300px]  relative"onSubmit={handleSubmit(onSubmit)} >
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
              <div className="form-control w-full my-1">
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


              


              <div className="form-control w-full my-2">
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
                <div className="form-control  bg-white rounded-lg absolute right-0 bottom-12">
                <button
                  className={`bg-[#006589] hover:bg-[#466875] max-w-[320px] px-4 py-2  text-white rounded-md cursor-pointer absolute right-4`}
                  type="submit"
                  
                >
                  Submit
                </button>
              </div>


         </form>
         <button type="submit"
                  className={`bg-[#006589] hover:bg-[#466875] max-w-[320px] px-4 py-2  text-white rounded-md cursor-pointer absolute right-24 h-[37px] text-sm bottom-3`}
                  onClick={() => router?.back()}
                  
                >
                  Previous Step
                </button>
              </div>
              </div>

              <div className='w-full'>
                    {
                      watch('userName') &&         <div className="card border lg:w-96  shadow-sm">
                      <div className="card-body">
                        <span className="badge badge-lg  badge-warning">Live Preview</span>
                        
                        <ul className="mt-6 flex flex-col gap-2 text-xs">
                          <li>
                            
                            <span className='font-bold'>Your Full Name </span>
                            <p className='text-base'>{livePreviewData?.fullName}</p>
                          </li>
                          <li>
                            
                            <span className='font-bold'>Email</span>
                            <p className='text-base'>{livePreviewData?.email}</p>
                          </li>
                          <li>
                            
                            <span className='font-bold'>Phone Number</span>
                            <p className='text-base'>{livePreviewData?.phoneNumber}</p>
                          </li>
                          <li>
                            
                            <span className='font-bold'>Street Address</span>
                            <p className='text-base'>{livePreviewData?.streetAddress}</p>
                          </li>
                          <li>
                            
                            <span className='font-bold'>City</span>
                            <p className='text-base'>{livePreviewData?.city}</p>
                          </li>
                          <li>
                            
                            <span className='font-bold'>Zip Code</span>
                            <p className='text-base'>{livePreviewData?.zipCode}</p>
                          </li>
                          <li>
                            
                            <span className='font-bold'>User Name</span>
                            <p className='text-base'>{watch('userName')}</p>
                          </li>
                          
                          
                        </ul>
                        
                      </div>
                    </div>
                    }
                </div>     
                </div>
              </div> 

              
              <Toaster />    
    </div>
  )
}
