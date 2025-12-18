import React,{useState} from 'react'
import axios from 'axios'
import Layout from '../component/Layout'

const Register = () => {

    const [user,setuser] = useState({
          name: "",
          email: "",
          password: "",
    })

    const handleChange = (e) => {
        const {name,value} = e.target;
        setuser({
            ...user,
            [name] : value
        })
    }

    const handleSubmit = async (e) => {

        e.preventDefault();

        const formdata = new FormData();
        formdata.append("name", user.name);
        formdata.append("email", user.email);
        formdata.append("password", user.password);

        try{
           await axios.post("http://localhost:4000/api/user/register", user, {withCredentials : true});
           alert("Successfully registered!");

           setuser({
            name: "",
            email: "",
            password: "",
           })
        }catch(e){
            alert("Registation failed!")
        }

    }

  return (

    <Layout>

    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">

        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Sign in to your account
          </h2>

        </div>

          <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          aria-hidden="true"
          className="absolute top-0 left-[max(50%,25rem)] h-256 w-512 -translate-x-1/2 mask-[radial-gradient(64rem_64rem_at_top,white,transparent)] stroke-gray-200"
        >
          <defs>
            <pattern
              x="50%"
              y={-1}
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)" width="100%" height="100%" strokeWidth={0} />
        </svg>
      </div>

     <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm"> 

    <form onSubmit={handleSubmit} className="space-y-6">

        <div>
        <label className="block text-sm/6 font-medium text-gray-900">Name</label>
        <div className="mt-2">
        <input type='text' name='name' value={user.name} onChange={handleChange} required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500 sm:text-sm/6"/>
        </div>
        </div>
        
        <div>
        <label className="block text-sm/6 font-medium text-gray-900">Email</label>
        <div className="mt-2">
        <input type='text' name='email' value={user.email} onChange={handleChange} required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500 sm:text-sm/6"/>
        </div>
        </div>

        <div>
        <label className="block text-sm/6 font-medium text-gray-900">Password</label>
        <div className="mt-2">
        <input type='text' name='password' value={user.password} onChange={handleChange} required className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-teal-500 sm:text-sm/6"/>
        </div>
        </div>

        <div>
        <button type='submit' className="flex w-full justify-center rounded-md bg-teal-500 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-teal-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-600">Sign up</button>
        </div>
      </form>

  <p className="mt-10 text-center text-sm/6 text-gray-500">
            Aalready a member?{' '}
            <a href="/login" className="font-semibold text-teal-600 hover:text-teal-500">
              Sign in
            </a>
          </p>

    </div>
    </div>

  

    </Layout>
  )
}

export default Register
