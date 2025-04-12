
'use client'




import Image from "next/image";
import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";


export default function FormWithValidation() {

  const router = useRouter()
  const {register  , formState : {errors} , handleSubmit , watch} = useForm();

  const [formData , setFormData] = useState(null);
  console.log('FormData : ' , formData);

  
  

  
  // const [darkMode , setDarkMode] = useState();
  // const [theme ,setTheme] = useState();
  
  // console.log(darkMode , theme)

  // useEffect(() => {
  //     if(darkMode){
          
  //         localStorage.setItem('theme' , 'dark')
  //         setTheme(localStorage.getItem('theme'))
  //     }
  //     else{
        
  //       localStorage.setItem('theme' , 'white')
  //       setTheme(localStorage.getItem('theme'))
  //     }
  // } , [darkMode])



  const onSubmit = (data) => {
    console.log("data" , data)
    // setFormData(data)

    router.push(`/secondStep?data=${encodeURIComponent(JSON.stringify(data))}`)

  }


  
  return (

    <main className="max-w-[720px] mx-auto">


      {/* form */}

      <div className="py-5">
      <div className="">
        <h2 className="text-xl text-center font-bold mt-8 mb-3 text-[#006589]">Multi step Form with validation</h2>
      </div>
      
      <div className="">
        
      
        <div className="">
          
          <div className="card border     shadow-lg rounded-lg">
            
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
                    className="border-b-2  border-[#005689] focus:border-b-2 focus:border-[#7baac5] outline-none w-full"
                    
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


                
          <div className="form-control  rounded-lg absolute right-4 bottom-4">
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

    {/* <footer className={`${theme === 'dark' ? 'border-t border-white' : theme === 'white' ? 'bg-base-300 text black' : ''} footer sm:footer-horizontal footer-center   p-4`}>
  <aside>
    <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
  </aside>
</footer> */}
    </main>
  );
}
