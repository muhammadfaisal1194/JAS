import React, { useEffect, useRef } from "react";
import { IoSearch } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { IoPersonOutline } from "react-icons/io5";
import { FileInput, Label } from "flowbite-react";
import { FiPlusCircle } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import Ganderdropdown from "@/components/dropdowns/ganderdropdown";
import Dropdown from "@/components/dropdowns/dropdown";
import Businesstype from "@/data/businesstype.json";
import { TiDeleteOutline } from "react-icons/ti";

interface Clientdashboardtab7Props {
  openTab: number;
  setOpenTab: React.Dispatch<React.SetStateAction<number>>;
}

const Clientdashboardtab7: React.FC<Clientdashboardtab7Props> = ({
  openTab,
  setOpenTab,
}) => {
  const [openTab2, setOpenTab2] = React.useState(1);
  const [isOpen, setIsOpen] = React.useState(false);
  const [isOpen2, setIsOpen2] = React.useState(false);
  const [isOpen3, setIsOpen3] = React.useState(false);
  const catMenu3 = useRef<HTMLDivElement | null>(null);

  const closeOpenMenus3 = (e: MouseEvent) => {
    if (
      isOpen3 &&
      catMenu3.current &&
      !catMenu3.current.contains(e.target as Node)
    ) {
      setIsOpen3(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeOpenMenus3);
    return () => {
      document.removeEventListener("mousedown", closeOpenMenus3);
    };
  }, [, isOpen3]);

  const toggleDropdown3 = () => {
    setIsOpen3(!isOpen3);
  };

  return (
    <div>
      <div className={openTab === 7 ? "block" : "hidden"} id="link2">
        <div>
          <ul className="flex items-center gap-6 ps-4">
            <button
              className={
                "flex items-center w-fit gap-1 p-2 " +
                (openTab2 === 1
                  ? "text-blue-800 border-b-2 border-blue-800"
                  : "text-gray-500")
              }
              onClick={(e) => {
                setOpenTab2(1);
              }}
            >
              <IoPersonOutline className="text-lg" />
              company info
            </button>
            <button
              className={
                "flex items-center gap-1 p-2 w-fit " +
                (openTab2 === 2
                  ? "text-blue-800 border-b-2 border-blue-800"
                  : "text-gray-500")
              }
              onClick={(e) => {
                setOpenTab2(2);
              }}
            >
              <CgProfile className="text-lg" />
              Founding info
            </button>
            <button
              className={
                "flex items-center gap-1 p-2 w-fit " +
                (openTab2 === 3
                  ? "text-blue-800 border-b-2 border-blue-800"
                  : "text-gray-500")
              }
              onClick={(e) => {
                setOpenTab2(3);
              }}
            >
              <TbWorld className="text-lg" />
              Social Media Profile
            </button>
            <button
              className={
                "flex items-center gap-1 p-2 w-fit " +
                (openTab2 === 4
                  ? "text-blue-800 border-b-2 border-blue-800"
                  : "text-gray-500")
              }
              onClick={(e) => {
                setOpenTab2(4);
              }}
            >
              <p className="text-lg">@</p>
              Contact
            </button>
          </ul>
          <hr />
        </div>
        <div className="py-2">
          <div className={openTab2 === 1 ? "block" : "hidden"}>
            <div className="grid gap-4 p-6">
              <div className="flex items-center gap-6">
                <div className="grid gap-2">
                  <h1 className="text-sm text-slate-700">Upload Logo</h1>
                  <div className="flex w-[300px] items-center justify-center">
                    <Label
                      htmlFor="dropzone-file"
                      className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div className="flex flex-col items-center justify-center pb-6 pt-5">
                        <svg
                          className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <FileInput id="dropzone-file" className="hidden" />
                    </Label>
                  </div>
                </div>
                <div className="grid gap-2 w-full">
                  <h1 className="text-sm text-slate-700">Banner image</h1>
                  <div className="flex w-full items-center justify-center">
                    <Label
                      htmlFor="dropzone-file"
                      className="flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-600 dark:bg-gray-700 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                    >
                      <div className="flex flex-col items-center justify-center pb-6 pt-5">
                        <svg
                          className="mb-4 h-8 w-8 text-gray-500 dark:text-gray-400"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 16"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                          />
                        </svg>
                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                          <span className="font-semibold">Click to upload</span>{" "}
                          or drag and drop
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          SVG, PNG, JPG or GIF (MAX. 800x400px)
                        </p>
                      </div>
                      <FileInput id="dropzone-file" className="hidden" />
                    </Label>
                  </div>
                </div>
              </div>
              <hr className="my-6" />
              <div className="grid gap-2 w-full">
                <h1 className="text-sm text-slate-700">Company Name</h1>
                <input
                  type="text"
                  className="w-full border border-gray-400 rounded-md"
                  placeholder="Company Name"
                />
              </div>
              <div className="grid gap-2 w-full">
                <h1 className="text-sm text-slate-700">About Us</h1>
                <textarea
                  className="rounded-md border-gray-400 text-sm"
                  rows={8}
                  cols={50}
                  name="comment"
                  form="usrform"
                  placeholder="Write down about your company here. Let the candidate know who we are..."
                ></textarea>
              </div>
              <button className="p-2 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-md w-fit">
                Save Changes
              </button>
            </div>
          </div>
          <div className={openTab2 === 2 ? "block" : "hidden"}>
            <div className="grid gap-4 p-6">
              <div className="flex items-center gap-6">
                <div className="grid gap-2 w-full">
                  <h1 className="text-sm text-slate-700">Organization Type</h1>
                  <Ganderdropdown isOpen2={isOpen2} setIsOpen2={setIsOpen2} />
                </div>
                <div className="grid gap-2 w-full">
                  <h1 className="text-sm text-slate-700">Industry Types</h1>
                  <div ref={catMenu3} className="relative">
                    <button
                      type="button"
                      className="gap-4 w-full border px-2 rounded-md border-gray-400 p-3 text-gray-400 bg-white font-medium text-sm inline-flex items-center"
                      onClick={toggleDropdown3}
                    >
                      Select...
                    </button>

                    {isOpen3 && (
                      <div className="absolute left-0 mt-2 h-96 w-full overflow-y-auto  rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                        <div className="fixed z-10 bg-white h-20">
                          <div className="flex m-4 bg-white gap-2 rounded-xl border items-center px-2 p-1">
                            <IoSearch />
                            <input
                              type="search"
                              className="p-2 w-[420px] inline-block bg-white focus:outline-none rounded-xl border-none"
                              placeholder="search"
                            />
                          </div>
                        </div>
                        <ul className="relative p-4 w-full">
                          <div className="mt-14">
                            {Businesstype.map((item) => (
                              <li
                                className="p-2 hover:bg-gray-100"
                                key={item.name}
                              >
                                {item.name}
                              </li>
                            ))}
                          </div>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="grid gap-2 w-full">
                  <h1 className="text-sm text-slate-700">Team Size</h1>
                  <Dropdown isOpen={isOpen} setIsOpen={setIsOpen} />
                </div>
                <div className="grid gap-2 w-full">
                  <h1 className="text-sm text-slate-700">
                    Year of Establishment
                  </h1>
                  <input
                    type="date"
                    className="border px-2 rounded-md border-gray-400"
                    placeholder="city..."
                  />
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="grid gap-2 w-full">
                  <h1 className="text-sm text-slate-700">Company Website</h1>
                  <input
                    type="text"
                    className="border px-2 rounded-md border-gray-400"
                    placeholder="website URL...."
                  />
                </div>
              </div>
              <div className="grid gap-2 w-full">
                <h1 className="text-sm text-slate-700">Biography</h1>
                <textarea
                  className="rounded-md border-gray-400 text-sm"
                  rows={8}
                  cols={50}
                  name="comment"
                  form="usrform"
                  placeholder="Write down your biography here. Let the employers know who you are..."
                ></textarea>
              </div>
              <button className="p-2 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-md w-fit">
                Save Changes
              </button>
            </div>
          </div>
          <div className={openTab2 === 3 ? "block" : "hidden"}>
            <div className="p-6">
              <div className="grid gap-2">
                <h1 className="font-medium">Social Links</h1>
                <div className="grid gap-8 w-full">
                  <div className="flex items-center gap-2 w-full">
                    <span className="flex items-center gap-2 pr-2">
                      <FaFacebookF className="text-2xl text-blue-600" />
                      Facebook
                    </span>
                    <input
                      type="text"
                      className="w-full border px-2 rounded-md border-gray-400 placeholder:text-sm"
                      placeholder="Profile Link/URL"
                    />
                    <div className="flex gap-2">
                      <button className="bg-gray-100 hover:bg-gray-200 rounded-md p-2 px-8">
                        Remove
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center w-full gap-2">
                    <span className="flex items-center gap-2 pr-7">
                      <FaTwitter className="text-2xl text-[#1c96e8]" />
                      Twitter
                    </span>
                    <input
                      type="text"
                      className="w-full border px-2 rounded-md border-gray-400 placeholder:text-sm"
                      placeholder="Profile Link/URL"
                    />
                    <div className="flex gap-2">
                      <button className="bg-gray-100 hover:bg-gray-200 rounded-md p-2 px-8">
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <span className="flex items-center gap-2 pr-4">
                      <IoLogoYoutube className="text-2xl text-red-600" />
                      Youtube
                    </span>
                    <input
                      type="text"
                      className="w-full border px-2 rounded-md border-gray-400 placeholder:text-sm"
                      placeholder="Profile Link/URL"
                    />
                    <div className="flex gap-2">
                      <button className="bg-gray-100 hover:bg-gray-200 rounded-md p-2 px-8">
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center w-full gap-2">
                    <span className="flex items-center gap-2 pr-4">
                      <TbWorld className="text-2xl text-blue-600" />
                      Website
                    </span>
                    <input
                      type="text"
                      className="w-full border px-2 rounded-md border-gray-400 placeholder:text-sm"
                      placeholder="Profile Link/URL"
                    />
                    <div className="flex gap-2">
                      <button className="bg-gray-100 hover:bg-gray-200 rounded-md p-2 px-8">
                        Remove
                      </button>
                    </div>
                  </div>
                  <button className="bg-gray-200 hover:bg-gray-300 p-3 rounded-md flex items-center justify-center gap-2">
                    <FiPlusCircle className="text-xl" /> Add New Social Link
                  </button>

                  <button className="p-2 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-md w-fit">
                    Save Changes
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className={openTab2 === 4 ? "block" : "hidden"}>
            <div className="p-6">
              <div className="grid gap-2">
                <h1 className="font-medium text-lg">Contact Info</h1>
                <div className="grid gap-6 w-full">
                  <div className="grid gap-2">
                    <p className="text-sm">Map Location</p>
                    <input
                      type="text"
                      className="w-full border px-2 rounded-md border-gray-400 placeholder:text-sm"
                      placeholder="Location"
                    />
                  </div>
                  <div className="grid gap-2">
                    <p className="text-sm">Phone</p>
                    <input
                      type="text"
                      className="w-full border px-2 rounded-md border-gray-400 placeholder:text-sm"
                      defaultValue={"+92"}
                    />
                  </div>
                  <div className="grid gap-2">
                    <p className="text-sm">Email</p>
                    <input
                      type="email"
                      className="w-full border px-2 rounded-md border-gray-400 placeholder:text-sm"
                      placeholder="example@gmail.com"
                    />
                  </div>
                  <button className="p-2 px-4 bg-blue-700 hover:bg-blue-800 text-white rounded-md w-fit">
                    Save Changes
                  </button>
                  <hr className="my-6" />
                  {/* Change password */}
                  <div className="grid gap-6">
                    <h1 className="text-lg font-medium">Change Password</h1>
                    <div className="flex items-center gap-6">
                      <div className="grid gap-2 w-full">
                        <h1 className="text-sm text-slate-700">
                          Current Password
                        </h1>
                        <input
                          type="Password"
                          className="border px-2 rounded-md border-gray-400"
                          placeholder="Password"
                        />
                      </div>
                      <div className="grid gap-2 w-full">
                        <h1 className="text-sm text-slate-700">New Password</h1>
                        <input
                          type="Password"
                          className="border px-2 rounded-md border-gray-400"
                          placeholder="Password"
                        />
                      </div>
                      <div className="grid gap-2 w-full">
                        <h1 className="text-sm text-slate-700">
                          Confirm Password
                        </h1>
                        <input
                          type="Password"
                          className="border px-2 rounded-md border-gray-400"
                          placeholder="Password"
                        />
                      </div>
                    </div>
                    <div className="flex justify-start">
                      <button className="bg-blue-700 hover:bg-blue-800 text-white rounded-md w-fit p-2 px-6">
                        Save Changes
                      </button>
                    </div>
                  </div>
                  <hr className="my-6" />
                  {/* delete Profile */}
                  <div className="grid gap-4">
                    <h1 className="text-lg font-medium">Delete Your Account</h1>
                    <p className="text-gray-500 text-sm">
                      If you delete your Jobpilot account, you will no longer be
                      able to get information about the matched jobs, following
                      employers, and job alert, shortlisted jobs and more. You
                      will be abandoned from all the services of Jobpilot.com.
                    </p>
                    <button className="flex items-center gap-1 hover:border w-fit p-3 rounded px-4 text-red-600">
                      <TiDeleteOutline className="text-red-600 text-2xl" />{" "}
                      Close Account
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clientdashboardtab7;
