import House from '../assets/city4.jpg'

function Banner() {
  return (
    <div className="mainBanner flex justify-center">
        <div className="absolute mt-20 rounded-lg" style={{ background: 'rgba(0, 0, 0, 0.7)' }}>
          <h1 className="text-white ml-12 text-6xl lg:w-[58rem] font-medium">
              Find the Perfect Property to Suit Your Lifestyle
          </h1>
        </div>
        <img src={House} alt="" className='object-cover h-[70vh] lg:w-[80vw] lg:mt-6' />
    </div>
  )
}

export default Banner