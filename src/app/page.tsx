"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { MdOutlineShoppingCart } from "react-icons/md";
import { ClipLoader } from "react-spinners";
import { IoIosArrowForward } from "react-icons/io";

interface BannerItem {
  id: number;
  img: string;
}

interface Camera {
  id: number;
  name: string;
  des: string;
  des2: string;
  price: number;
  discountPrice: number;
  images: {
    img: string;
  };
}

interface Intercom {
  id: number;
  name: string;
  price: number;
  discountPrice: number;
  images: {
    img: string;
  };
}

const Home: React.FC = () => {
  const [banners, setBanners] = useState<BannerItem[]>([]);
  const [cameras, setCameras] = useState<Camera[]>([]);
  const [intercoms, setIntercoms] = useState<Intercom[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const bannersData = await fetchBanners();
        const camerasData = await fetchCameras();
        const intercomsData = await fetchIntercoms();
        setBanners(bannersData);
        setCameras(camerasData);
        setIntercoms(intercomsData);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const fetchBanners = async () => {
    try {
      const response = await fetch("https://simple-backend-api-ten.vercel.app/api/banner", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Basic " + btoa("admin:admin123"),
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch banners");
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching banners:", error);
      return [];
    }
  };

  const fetchCameras = async () => {
    try {
      const response = await fetch("https://simple-backend-api-ten.vercel.app/api/camera", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Basic " + btoa("admin:admin123"),
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch cameras");
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching cameras:", error);
      return [];
    }
  };

  const fetchIntercoms = async () => {
    try {
      const response = await fetch("https://simple-backend-api-ten.vercel.app/api/domofon", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Basic " + btoa("admin:admin123"),
        },
      });

      if (!response.ok) {
        throw new Error("Failed to fetch intercoms");
      }

      return await response.json();
    } catch (error) {
      console.error("Error fetching intercoms:", error);
      return [];
    }
  };

  const truncateName = (name: string, maxLength: number) => {
    return name.length > maxLength ? `${name.substring(0, maxLength)} ...` : name;
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gray-100">
        <div className="flex flex-col items-center">
          <ClipLoader size={60} color={"#389be8"} loading={loading} />
          <p className="mt-4 text-lg text-gray-600">Loading, please wait...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <div className="pt-[10px]">
        <Swiper
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 3500 }}
          pagination={{ clickable: true }}
          modules={[Autoplay, Pagination, Navigation]}
          className="rounded-[25px]"
        >
          {banners.map((item: BannerItem) => (
            <SwiperSlide key={item.id}>
              <img className="w-full h-[550px] object-cover" src={item.img} alt={`Banner ${item.id}`} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="my-[50px] flex flex-col gap-4">
        <h1 className="w-[385px] select-none text-[35px] font-semibold flex items-center gap-3 cursor-pointer">Kuzatuv kameralari <IoIosArrowForward className="text-[34px] pt-1"/></h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[50px]">
          {cameras.slice(0, 10).map((camera: Camera) => (
            <div key={camera.id} className="card p-[10px] bg-white shadow-md rounded-lg flex flex-col cursor-pointer">
              <div className="flex items-center justify-center">
                <img className="w-[90%] h-[170px] object-cover rounded-t-lg p-4" src={camera.images.img} alt={camera.name} />
              </div>
              <div className="p-[10px] pt-[20px] flex flex-col gap-3">
                <h2 className="text-[15px]">{truncateName(camera.name, 17)}</h2>
                <div className="flex flex-col gap-1">
                  <p className="text-lg line-through text-gray-500">$ {camera.price}</p>
                  <p className="text-[28px] font-bold text-[#389be8]">$ {camera.discountPrice}</p>
                </div>
                <button className="flex items-center justify-center gap-2 w-full h-[44px] bg-[#389be8] text-white rounded-lg hover:bg-[#2f80ed] transition-all duration-300">
                  <MdOutlineShoppingCart className="w-[24px] h-[24px]" /> Savatga
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="my-[50px] flex flex-col gap-4">
        <h1 className=" select-none w-60 text-[35px] font-semibold flex items-center gap-3 cursor-pointer">Domofonlar <IoIosArrowForward className="text-[34px] pt-1"/></h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[50px]">
          {intercoms.slice(10, 20).map((intercom: Intercom) => (
            <div key={intercom.id} className="card p-[10px] bg-white shadow-md rounded-lg flex flex-col cursor-pointer">
              <div className="flex items-center justify-center">
                <img className="w-[90%] h-[170px] object-cover rounded-t-lg p-4" src={intercom.images.img} alt={intercom.name} />
              </div>
              <div className="p-[10px] pt-[20px] flex flex-col gap-3">
                <h2 className="text-[15px]">{truncateName(intercom.name, 17)}</h2>
                <div className="flex flex-col gap-1">
                  <p className="text-lg line-through text-gray-500">$ {intercom.price}</p>
                  <p className="text-[28px] font-bold text-[#389be8]">$ {intercom.discountPrice}</p>
                </div>
                <button className="flex items-center justify-center gap-2 w-full h-[44px] bg-[#389be8] text-white rounded-lg hover:bg-[#2f80ed] transition-all duration-300">
                  <MdOutlineShoppingCart className="w-[24px] h-[24px]" /> Savatga
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
