import Image from 'next/image'
const Catergories=()=> {
  return (
    <section className="mx-auto mt-10 flex max-w-[1400px] flex-col items-center justify-center gap-6 px-8 md:flex-row">
      <div className="catergories group relative h-44 w-44">
        <Image src="/images/disnep.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden rounded-lg object-cover group-hover:inline"
        >
          <source src="/video/disney.mp4" type='video/mp4' />
        </video>
      </div>
      <div className="catergories group relative h-44 w-44">
        <Image src="/images/pixar.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden rounded-lg object-cover group-hover:inline"
        >
          <source src="/video/pixar.mp4" type='video/mp4' />
        </video>
      </div>
      <div className="catergories group relative h-44 w-44">
        <Image src="/images/marvel.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden rounded-lg object-cover group-hover:inline"
        >
          <source src="/video/marvel.mp4" type='video/mp4' />
        </video>
      </div>
      <div className="catergories group relative h-44 w-44">
        <Image src="/images/starwars.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden rounded-lg object-cover group-hover:inline"
        >
          <source src="/video/star-wars.mp4" type='video/mp4' />
        </video>
      </div>
      <div className="catergories group relative h-44 w-44">
        <Image src="/images/national-geographic.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          playsInline
          className="hidden rounded-lg object-cover group-hover:inline"
        >
          <source src="/video/national-geographic.mp4" type='video/mp4' />
        </video>
      </div>
    </section>
  )
}

export default Catergories
