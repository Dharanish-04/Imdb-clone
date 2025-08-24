import React from "react";

function Pagination({HandlePrev, HandleNext , pageNo}) {
  return (
    <div className="bg-gray-500 p-4 mt-8 flex justify-center">
      <div onClick={HandlePrev}className="px-8  hover:scale-130 duration-200  cursor-pointer">
        <i className="fa-solid fa-circle-left text-2xl"></i>    {/*this is font awesome website icon , u can use those icons this is for left arrow and similarly for right arrow as well  */}
      </div>

      <div className="font-bold text-1xl px-2">
        {pageNo}
      </div>

      <div  onClick={HandleNext}className="px-8 hover:scale-130 duration-200 cursor-pointer">
        <i className="fa-solid fa-circle-right text-2xl"></i>
      </div>
    </div>
  );
}

export default Pagination;
