import { useCallback, useState } from 'react';
import { NextPageContext } from 'next';
import axios from 'axios';
import { signIn } from 'next-auth/react'
import Input from '@/components/input';
// import { useRouter } from 'next/router';
import { FcGoogle } from 'react-icons/fc';
import { FaGithub } from 'react-icons/fa';



const Auth = (res:any) => {
  // const router = useRouter();
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

    const [variant, setVariant] = useState('login');
    const toggleVariant = useCallback(() => {
        setVariant((currentVariant) => currentVariant === 'login' ? 'register' : 'login');
      }, []);

      //LOGIN CODE

      const login = useCallback(async () => {
        try {
          await signIn('credentials', {
            email,
            password,
            // redirect: false,
            callbackUrl: '/profiles'
          });
          console.log('________________>>>>>','SUCCESSFULLY  LOGIN')
          // router.push('/');
        } catch (error) {
          console.log(error);
        }
      }, [email, password,]);

      // user register
      const register = useCallback(async () => {
        try {
          await axios.post('/api/register', {
            email,
            name,
            password
          });
          console.log(register,'--<<-----------------------API HITeD------------------------------------',email,name,password)
          // login();
        } catch (error) {
            console.log('EEEEEror------',res.statusCode);
          //   if (context.res) {
          //     context.res.writeHead(err.status)
          //   }
          //   return { err: { statusCode: err.status } }
          // }}
        }
      }, [email, name, password]);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="bg-black w-full h-full lg:bg-opacity-50">
        <nav className="px-12 py-5">
          <img src="/images/logo.png" className="h-12" alt="Logo" />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-md rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">
                {variant == 'login' ? 'Sign in' : 'Register'}
            </h2>
            <div className="flex flex-col gap-4">
               {variant === 'login' ? '': (
                <Input
                  id="name"
                  
                  label="Username"
                  value={name}
                  onChange={(e: any) => setName(e.target.value)} 
                />
               )}
              <Input
                id="email"
                
                label="Email address or phone number"
                value={email}
                onChange={(e: any) => setEmail(e.target.value)} 
              />
              <Input
                
                id="password" 
                label="Password" 
                value={password}
                onChange={(e: any) => setPassword(e.target.value)} 
              />
            </div>
            <button onClick={variant === 'login' ? login : register} className='bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition'>
                {variant === 'login' ? 'login' : 'Signup'}
            </button>
            <div className='flex flex-row items-center gap-4 mt-8 justify-center'>
                {/* GOOGLE button */}
                <div onClick={() => signIn('google', {callbackUrl:'/profiles'})} 
                className='w-10 h-10 bg-white
                rounded-full flex items-center justify-center cursor-pointer
                hover:opacity-80 translate 
                '><FcGoogle size={30}/></div>

                {/* GITHUB button */}
                <div onClick={() => signIn('github',{callbackUrl:'/profiles'})} 
                className='w-10 h-10 bg-white
                rounded-full flex items-center justify-center cursor-pointer
                hover:opacity-80 translate 
                '><FaGithub size={30}/></div>
            </div>
            <p className="text-neutral-500 mt-12">
                {variant === 'login'?'First time using Netflix?':'Already have an account?'}
              <span onClick={toggleVariant} className="text-white ml-1 hover:underline cursor-pointer">
                {variant === 'login'?'Create and account':'SignIn'}
              </span>
              .
            </p>
                {/* <div>{variant === status(422)?'SUCCESS':'ERROR'}</div> */}

          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;