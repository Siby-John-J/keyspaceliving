import { useContext } from "react"
import { modelContext } from "../context/ModelContext"
import Icon from '../assets/logo.png'

function Header() {
  const {isModel, SetIsModel} = useContext(modelContext)

  return (
    <div className="mainHeader flex flex-row justify-around items-center h-14 w-screen  ">
          <div className="title w-80 align-middle flex flex-row">
            <img className="p-0 m-0 ml-4 h-[3.8em] mt-3 filter" src={Icon} alt="" />
            {/* <h3 className="p-0 m-0 ml-4">KEYSPACELIVING</h3> */}
          </div>
          <ul className="headerList text-[13px] 3sm:text-[16px] container mx-auto flex flex-row justify-center ">
            <li className="hover:bg-black cursor-pointer hover:text-white rounded-2xl p-2 mr-3">
            <a href="https://marinaoneflatkochi.com/">Completed Projects</a></li>
            <li className="hover:bg-black cursor-pointer hover:text-white rounded-2xl p-2" onClick={() => {
              SetIsModel(!isModel)
            }}>Services</li>
          </ul>
    </div>
  )
}

export function Model() {
  const {isModel, SetIsModel} = useContext(modelContext)

  return (
    <div className="fixed z-10 w-full h-auto top-[7em] p-[2em] flex flex-row justify-center items-center">
      <div className="top-[7em] left-[50%] border border-black bg-white p-[2em] rounded-2xl flex flex-col justify-around items-center">
        <h1 className="font-semibold mb-6">
          Channel Partner Services for Builder
        </h1>
        <button className="bg-black text-white w-fit px-5 py-1 rounded-full" onClick={() => {
          SetIsModel(!isModel)
        }}>Ok</button>
      </div>
    </div>
  )
}

export default Header
