import { useCallback, useState } from 'react';
import { NextPageContext } from 'next';

import Input from '@/components/input';


const Auth = () => {

  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');


  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" className="h-12" alt="Logo" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
            </h2>
            <div className="flex flex-col gap-4">
                <Input
                  id="name"
                  type="text"
                  label="Username"
                  value={name}
                  onChange={(e: any) => setName(e.target.value)} 
                />
              <Input
                id="email"
                type="email"
                label="Email address or phone number"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)} 
              />
              <Input
                type="password" 
                id="password" 
                label="Password" 
                value={password}
                onChange={(e: any) => setPassword(e.target.value)} 
              />
            </div>
      
            <p className="text-neutral-500 mt-12">
              <span  className="text-white ml-1 hover:underline cursor-pointer">
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;