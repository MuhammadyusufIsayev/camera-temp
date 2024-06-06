import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { CgMenu } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";

const Header = () => {
  return (
    <header className="mb-[20px]">
      <div className="container mx-auto">
        <nav className="flex justify-center items-center py-[20px] gap-[30px]">
          <div className="logo">Logo</div>
          <button className="w-[150px] h-[44px] rounded-lg bg-[#389be8] text-white flex items-center justify-center gap-3 hover:bg-[#2f80ed] transition-all duration-100">
            <CgMenu className="w-[24px] h-[24px]" /> Katalog
          </button>
          <div className="flex justify-between h-[44px] rounded-sm">
            <input
              className="w-[400px] h-[44px] border-[3px] border-[#389be8] border-r-0 rounded-l-lg px-[16px] outline-none"
              type="text"
              placeholder="Mahsulotlarni izlash"
            />
            <button className="bg-[#389be8] w-[50px] h-[44px] flex items-center justify-center rounded-r-lg hover:bg-[#2f80ed] transition-all duration-100">
              <IoSearch className="w-[24px] h-[24px] text-white" />
            </button>
          </div>
          <div className="flex flex-col items-center justify-center gap-[2px] hover:text-[#389be8] cursor-pointer transition-all duration-10">
            <MdOutlineShoppingCart className="w-[24px] h-[24px]" />
            <p className="text-[14px] text-[#505C6A]">Savat</p>
          </div>
          <div className="flex flex-col items-center justify-center gap-[2px] hover:text-[#389be8] cursor-pointer transition-all duration-10">
            <FaRegHeart className="w-[24px] h-[24px]" />
            <p className="text-[14px] text-[#505C6A]">Sevimlilar</p>
          </div>
          <button className="w-[80px] h-[44px] flex items-center justify-center gap-2 border-[3px] border-[#389be8] font-bold rounded-lg text-[14px] hover:bg-[#389be8] hover:text-white transition-all duration-300">
            Kirish
          </button>
          <select className="outline-none text-[20px] cursor-pointer">
            <option value="UZ">UZ</option>
            <option value="RU">RU</option>
          </select>
        </nav>
        <nav className="flex justify-center items-center gap-[50px]">
          {[
            "O'rnatish hizmati",
            "Kuzatuv kameralari",
            "Domofonlar",
            "Videoregistratorlar",
            "Monitorlar",
          ].map((text) => (
            <p
              key={text}
              className="text-[#505C6A] font-semibold hover:text-[#389be8] cursor-pointer hover:border-b-[2px] hover:border-b-[#389be8] transition-all duration-10 h-[25px] text-center"
            >
              {text}
            </p>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
