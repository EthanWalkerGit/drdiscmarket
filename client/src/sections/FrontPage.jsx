import { frontVinyls } from '../assets/images';

const FrontPage = () => {
  return (
    <div className="mt-24 flex flex-row justify-center">
      <div className="w-frImageW">
        <div className="font-poppins text-frSize text-white py-5">
          <h1>Windsor's One-Stop</h1>
          <h1 className="font-bold text-yellow">Music Source</h1>
        </div>
        <div>
          <button className="h-10 w-32 mr-7 bg-yellow text-black font-merriweather font-bold rounded-md">Shop</button>
          <button className="h-10 w-32 mr-7 border-2 border-yellow font-merriweather text-yellow rounded-md">About Us</button>
        </div>
      </div>
      <div>
        <img src={frontVinyls} className="w-frImageW h-frImageH" alt="vinyls" />
      </div>
    </div>
  )
}

export default FrontPage