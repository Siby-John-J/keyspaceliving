import City from '../assets/city3.jpg'

function Banner2() {
  return (
    <div className="banner2 mt-14">
        <div className="content object-cover absolute w-screen">
            <h1 className='text-4xl  text-white font-medium text-center mt-[3em] leading-[1.4em]'>Authorized channel partner for builders across Kerala</h1>
        </div>
        <img src={City} className='object-cover lg:h-[auto] h-[60vh]' />
    </div>
  )
}

export default Banner2