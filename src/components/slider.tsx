import { Carousel } from "flowbite-react";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

export function Component() {
  return (
    <div className="relative h-56 sm:h-64 xl:h-[500px] 2xl:h-96 rounded-none">
      <div className="absolute z-10 w-[50%] left-24 bottom-44 p-4 flex flex-col gap-4 items-start">
        <h1 className="abc text-6xl font-medium text-white drop-shadow-xl shadow-white">
          Find a job that suits your interest & skills.
        </h1>
        <p className="text-lg font-medium text-white">
          Aliquam vitae turpis in diam convallis finibus in at risus. Nullam in
          scelerisque leo, eget sollicitudin velit bestibulum.
        </p>
        <button className="flex items-center gap-3 bg-white  hover:bg-slate-100 p-2 px-4 rounded-md font-medium hover:text-blue-600">
          Start Now
          <FaArrowRight className="hover:text-blue-600" />
        </button>
      </div>
      <Carousel indicators={false}>
        <Image
          src="https://media.istockphoto.com/id/1498981757/photo/crm-mockup-or-man-in-a-telemarketing-call-center-helping-talking-or-networking-online-via.webp?b=1&s=170667a&w=0&k=20&c=JEbbDDrTLwYVdmdkO6A_h9aQN7vs_8pAWaPpTNrmuU4="
          className="w-[80rem] h-[35rem] hover:brightness-50 brightness-75"
          width={1280}
          height={560}
          alt="..."
        />
        <Image
          src="https://c0.wallpaperflare.com/preview/550/573/147/business-concept-consulting-illustration.jpg"
          className="w-[80rem] h-[35rem] hover:brightness-50 brightness-75"
          width={1280}
          height={560}
          alt="..."
        />
        <Image
          src="https://t3.ftcdn.net/jpg/08/08/57/14/360_F_808571477_hhooQEwnCNN1hvTssIgXANUyYdrJxMsE.jpg"
          alt="..."
          className="w-[80rem] h-[35rem] hover:brightness-50 brightness-75"
          width={1280}
          height={560}
        />
        <Image
          src="/chart-graph-business-finance.jpg"
          className="w-[80rem] h-[35rem] hover:brightness-50 brightness-75"
          width={1280}
          height={560}
          alt="..."
        />
        <Image
          src="/service.jpeg"
          alt="..."
          className="hover:brightness-50 brightness-75"
          width={1280}
          height={560}
        />
      </Carousel>
    </div>
  );
}
export default Component;
