import Image from 'next/image'
import {
  HomeIcon,
  PlayIcon,
  SearchIcon,
  StarIcon,
} from '@heroicons/react/solid'
import { signIn, signOut, useSession } from 'next-auth/react'

const Header=()=> {
  const { data: session } = useSession()
  return (
    <>
      <header className="sticky top-0 z-[1000] mt-5 flex h-16 w-full bg-[#040714] px-10 md:px-12 ">
        <Image
          src="/images/logo.svg"
          width={80}
          height={80}
          className="cursor-pointer"
        />
        {session && (
          <div className="ml-10 hidden items-center space-x-6 md:flex">
            <a href="" className="header-link group">
              <HomeIcon className="h-4" />
              <span className="span">Home</span>
            </a>
            <a href="" className="header-link group">
              <SearchIcon className="h-4" />
              <span className="span">Search</span>
            </a>
            <a href="" className="header-link group">
              <PlayIcon className="h-4" />
              <span className="span">Watchlist</span>
            </a>
            <a href="" className="header-link group">
              <StarIcon className="h-4" />
              <span className="span">Originals</span>
            </a>
            <a href="" className="header-link group">
              <img src="/images/movie-icon.svg" alt="" className="h-5" />
              <span className="span">Movies</span>
            </a>
            <a href="" className="header-link group">
              <img src="/images/series-icon.svg" alt="" className="h-5" />
              <span className="span">Series</span>
            </a>
          </div>
        )}
        {!session ? (
          <button
            className="ml-auto mt-6 rounded border px-4 font-medium uppercase tracking-wide transition duration-300 hover:bg-white hover:text-black"
            onClick={signIn}
          >
            Login
          </button>
        ) : (
          <div className="ml-auto">
            <p
              className="ml-auto mt-5 cursor-pointer rounded border px-4 font-medium uppercase tracking-wide transition duration-300 hover:bg-white hover:text-black"
              onClick={signOut}
            >
              SIGNOUT
            </p>
          </div>
        )}
      </header>
    </>
  )
}
export default Header
