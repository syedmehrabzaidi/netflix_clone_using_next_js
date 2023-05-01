import { NextApiRequest } from 'next'
import { getSession } from 'next-auth/react'
import prismadb from '@/libs/prismadb'

const serverAuth =async (req:NextApiRequest) => {
    const session = await getSession({ req });

    if (!session?.user?.email){
        throw new Error('Not sign IN'); }

    const currentUser = await prismadb.user.findUnique({
        where: {
            email: session.user.email,
    }
    });    

    if (!currentUser){
        throw new Error('Not signIn');
        
    }
    
    return { currentUser };
        

    };

 export default serverAuth;   


