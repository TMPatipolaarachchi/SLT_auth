import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import Layout from '../component/Layout'
import ss from '../assets/ss.png'

export default function Home() {
  return (

    <Layout>
    <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
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
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base/7 font-semibold text-teal-600">Deploy faster</p>
              <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                A better System
              </h1>
             <p className="mt-6 text-xl/8 text-gray-700">
  A secure and reliable authentication system is essential for protecting user data and ensuring authorized access to your application. Our system integrates smoothly with modern frameworks and offers robust protection mechanisms.
</p>
</div>
</div>
</div>
<div className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
  <img
    alt="Authentication system interface"
    src={ss}
    className="w-3xl max-w-none rounded-xl bg-gray-900 shadow-xl ring-1 ring-gray-400/10 sm:w-228"
  />
</div>
<div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
  <div className="lg:pr-4">
    <div className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg">
      <p>
        Our authentication system supports secure login, password hashing, session management, and role-based access control. Designed to be scalable and flexible, it ensures that your users' data is handled with utmost security and compliance.
      </p>
      <ul role="list" className="mt-8 space-y-8 text-gray-600">
        <li className="flex gap-x-3">
          <CloudArrowUpIcon aria-hidden="true" className="mt-1 size-5 flex-none text-teal-600" />
          <span>
            <strong className="font-semibold text-gray-900">Easy Integration.</strong> Seamlessly integrates with React, Node.js, and other modern frameworks. Easily connect to your existing backend services.
          </span>
        </li>
        <li className="flex gap-x-3">
          <LockClosedIcon aria-hidden="true" className="mt-1 size-5 flex-none text-teal-600" />
          <span>
            <strong className="font-semibold text-gray-900">Secure by Design.</strong> Implements industry-standard security practices like bcrypt hashing, CSRF protection, and secure cookies.
          </span>
        </li>
        <li className="flex gap-x-3">
          <ServerIcon aria-hidden="true" className="mt-1 size-5 flex-none text-teal-600" />
          <span>
            <strong className="font-semibold text-gray-900">Session & Token Support.</strong> Offers both session-based and token-based (JWT) authentication for flexibility in frontend and mobile apps.
          </span>
        </li>
      </ul>
      <p className="mt-8">
        Built with developers in mind, the system is highly customizable and can be extended to support features like two-factor authentication, OAuth, and more. Whether you are building a startup MVP or scaling a production app, our auth system has you covered.
      </p>
      <h2 className="mt-16 text-2xl font-bold tracking-tight text-gray-900">No server? No problem.</h2>
      <p className="mt-6">
        Our solution also supports serverless architectures. Deploy on platforms like Vercel, Netlify, or Firebase Functions with ease. Authentication logic works seamlessly in both traditional and serverless setups.
      </p>

            </div>
          </div>
        </div>
      </div>
    </div>

    </Layout>
  )
}
