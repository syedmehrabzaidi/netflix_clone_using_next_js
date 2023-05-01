import { NextPageContext  } from "next"
import { getSession, signOut } from "next-auth/react"
import useCurrentUser from "@/hooks/useCurrentUser";
import useMovieList from "@/hooks/useMovieList";
import useFavorites from "@/hooks/useFavorites";
import Navbar from "@/components/Navbar"
import Billboard from "@/components/Billboard";
import MovieList from "@/components/MovieList";


export async function getServerSideProps(context:NextPageContext) {
 const session = await getSession(context);
 
 if (!session){
  return {
    redirect:{
      destination: '/auth',
      permanent: false,
    }
  }
 }
 return {props: {}}
}

export default function Home() {

  const {data : user } = useCurrentUser();
  const { data: favorites = [] } = useFavorites();
  const { data: movies = [] } = useMovieList();
  console.log('===main==user name---',user?.name)
  console.log('===main==movies-data',movies)
  return (
    <>
      <Navbar/>
      <Billboard/>

      <div  className="pb-40">
        <MovieList title='Trending Now' data={movies} />
        <MovieList title='Favorites' data={favorites} />
      </div>


    {/* <h1 className="text-2xl text-gray-500">Netflix</h1>

    <p className="text-white" >Logged as :{user?.name}</p>
    <button className="h-10 w-full bg-white" onClick={() => signOut()}>SignOUT</button> */}
    </>
  )
}
