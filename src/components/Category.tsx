
function Category() {
  return (
    <div className=" flex flex-row justify-around mt-9">
        {Content()}
        {Content()}
        {Content()}
        {Content()}
    </div>
  )
}

function Content() {
    return (
        <div className="content w-[25em] h-[30em] border-b-teal-400 bg-red-400">
            <img src="" alt="" />
            <h1>Apartment</h1>
            <label>House</label>
        </div>
    )
}

export default Category