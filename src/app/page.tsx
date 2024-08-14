import React from "react";
import Navbar from "@/components/nav-bar";
import Component from "@/components/slider";
import Popularservice from "@/components/popularservice";
import Cards from "@/components/cards";
import Howtoapply from "@/components/how-to-apply";
import { FaArrowRight } from "react-icons/fa6";
import { Rating, RatingStar } from "flowbite-react";
import Footer from "@/components/footer";
import Image from "next/image";
export default function Home() {
  return (
    <div className="bg-[#f6f6f6]">
      <div className="grid ">
        <Navbar />
        <div>
          <Component />
        </div>
        <div className="mx-10 grid gap-20">
          <Cards />
          <Popularservice />
        </div>
        <Howtoapply />
        <div className="mx-10 grid py-8 mt-20 gap-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-medium">Popular category</h1>
            <button className="flex items-center gap-2 border border-blue-200 p-1 px-3 text-[#0A65CC]">
              View All <FaArrowRight className="text-[#0A65CC]" />
            </button>
          </div>
          <div className="flex justify-around items-center">
            <div className="flex items-center gap-4 hover:shadow-xl p-4 hover:border">
              <Image
                src="/produce-shop-keeper-fruit-and-vegetables-retail-business-owner-working-in-his-own-store-flat-illustration-eps-10-vector-2C3WFHW.jpg"
                width={48}
                height={48}
                alt=""
                className="w-12 h-12 rounded-lg"
              />
              <div>
                <h1 className="text-lg font-medium">Shop keeper</h1>
                <p className="text-sm">357 Open position</p>
              </div>
            </div>
            <div className="flex items-center gap-4 hover:shadow-xl p-4 hover:border">
              <Image
                src="/warehouse-worker111.jpg"
                width={48}
                height={48}
                alt=""
                className="w-12 h-12 rounded-lg"
              />
              <div>
                <h1 className="text-lg font-medium">Helper</h1>
                <p className="text-sm">357 Open position</p>
              </div>
            </div>
            <div className="flex items-center gap-4 hover:shadow-xl p-4 hover:border">
              <Image
                src="/Computer-Operator-Jobs.jpg"
                alt=""
                width={48}
                height={48}
                className="w-12 h-12 rounded-lg"
              />
              <div>
                <h1 className="text-lg font-medium">Computer operater</h1>
                <p className="text-sm">357 Open position</p>
              </div>
            </div>
            <div className="flex items-center gap-4 hover:shadow-xl p-4 hover:border">
              <Image
                src="/images.jpeg"
                alt=""
                width={48}
                height={48}
                className="w-12 h-12 rounded-lg"
              />
              <div>
                <h1 className="text-lg font-medium">Shef</h1>
                <p className="text-sm">357 Open position</p>
              </div>
            </div>
          </div>
          <div className="flex justify-around items-center">
            <div className="flex items-center gap-4 hover:shadow-xl p-4 hover:border">
              <Image
                src="/security-guard-1.jpg"
                alt=""
                width={48}
                height={48}
                className="w-12 h-12 rounded-lg"
              />
              <div>
                <h1 className="text-lg font-medium">security guard</h1>
                <p className="text-sm">357 Open position</p>
              </div>
            </div>
            <div className="flex items-center gap-4 hover:shadow-xl p-4 hover:border">
              <Image
                src="/2-min-scaled.jpg"
                alt=""
                width={48}
                height={48}
                className="w-12 h-12 rounded-lg"
              />
              <div>
                <h1 className="text-lg font-medium">Driver</h1>
                <p className="text-sm">357 Open position</p>
              </div>
            </div>
            <div className="flex items-center gap-4 hover:shadow-xl p-4 hover:border">
              <Image
                src="/trusted_local_gardeners_gardening_service.jpg.600x370_q85_crop-smart_upscale.jpg"
                alt=""
                width={48}
                height={48}
                className="w-12 h-12 rounded-lg"
              />
              <div>
                <h1 className="text-lg font-medium">Gardner</h1>
                <p className="text-sm">357 Open position</p>
              </div>
            </div>
            <div className="flex items-center gap-4 hover:shadow-xl p-4 hover:border">
              <Image
                src="/male-tailer-with-measuring-tape-vector-18009563.jpg"
                alt=""
                width={48}
                height={48}
                className="w-12 h-12 rounded-lg"
              />
              <div>
                <h1 className="text-lg font-medium">Tailer</h1>
                <p className="text-sm">357 Open position</p>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-6 py-8 mt-4 bg-[#F1F2F4]">
          <h1 className="text-3xl font-medium">Clients Testimonial</h1>
          <div className="flex justify-center gap-4 items-center">
            <div className="w-fit h-full p-6 bg-white grid gap-2">
              <span>
                <Rating>
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                </Rating>
              </span>
              <p className="w-[350px] text-[#767E94]">
                “Ut ullamcorper hendrerit tempor. Aliquam in rutrum dui.
                Maecenas ac placerat metus, in faucibus est.”
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src="/Default_pfp.jpg"
                  alt=""
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h1 className="text-[#191F33] font-medium">Robert Fox</h1>
                  <p className="text-[#767E94] text-sm">UI/UX Designer</p>
                </div>
              </div>
            </div>
            <div className="w-fit h-full p-6 bg-white grid gap-2">
              <span>
                <Rating>
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                </Rating>
              </span>
              <p className="w-[350px] text-[#767E94]">
                “Mauris eget lorem odio. Mauris convallis justo molestie metus
                aliquam lacinia. Suspendisse ut dui vulputate augue condimentum
                ornare. Morbi vitae tristique ante”
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src="/Default_pfp.jpg"
                  alt=""
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h1 className="text-[#191F33] font-medium">Bessie Cooper</h1>
                  <p className="text-[#767E94] text-sm">Creative Director</p>
                </div>
              </div>
            </div>
            <div className="w-fit h-full p-6 bg-white grid gap-2">
              <span>
                <Rating>
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                  <RatingStar />
                </Rating>
              </span>
              <p className="w-[350px] text-[#767E94]">
                “Class aptent taciti sociosqu ad litora torquent per conubia
                nostra, per inceptos himenaeos. Suspendisse et magna quis nibh
                accumsan venenatis sit amet id orci. Duis vestibulum bibendum
                dapibus.”
              </p>
              <div className="flex items-center gap-3">
                <Image
                  src="/Default_pfp.jpg"
                  alt=""
                  width={48}
                  height={48}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h1 className="text-[#191F33] font-medium">Jane Cooper</h1>
                  <p className="text-[#767E94] text-sm">Photographer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
