import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import Pagination from "@mui/material/Pagination";
import { RiCheckDoubleLine } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";

interface Clientdashboardtab6Props {
  openTab: number;
  setOpenTab: React.Dispatch<React.SetStateAction<number>>;
}

const Clientdashboardtab6: React.FC<Clientdashboardtab6Props> = ({
  openTab,
  setOpenTab,
}) => {
  const invoices = [
    {
      id: "#487441",
      date: "Dec 7, 2019 23:26",
      plan: "Premium",
      amount: "$999 USD",
    },
    {
      id: "#653518",
      date: "Dec 7, 2019 23:26",
      plan: "Standard",
      amount: "$999 USD",
    },
    {
      id: "#267400",
      date: "Dec 7, 2019 23:26",
      plan: "Premium",
      amount: "$999 USD",
    },
    {
      id: "#651535",
      date: "Dec 7, 2019 23:26",
      plan: "Premium",
      amount: "$999 USD",
    },
    {
      id: "#449003",
      date: "Dec 7, 2019 23:26",
      plan: "Premium",
      amount: "$999 USD",
    },
  ];

  return (
    <div>
      <div className={openTab === 6 ? "block" : "hidden"} id="link2">
        <div>
          <div className="grid gap-6 p-6 pr-2 pt-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="font-medium">Current Plan</h2>
                <p className="text-blue-700 mt-2 text-2xl font-bold">Premium</p>
                <p className="text-gray-500 text-sm mt-2">
                  Vestibulum ante ipsum primis in faucibus orci luctus et
                  ultrices posuere.
                </p>
                <div className="mt-4 space-x-4">
                  <button className="bg-gray-100 text-blue-700 px-4 py-2 rounded">
                    Change Plans
                  </button>
                  <button className="text-gray-700 px-4 py-2 rounded">
                    Cancel Plan
                  </button>
                </div>
              </div>
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-lg font-medium">Plan Benefits</h2>
                <p className="text-gray-500 text-sm mt-2">
                  Proin porta enim sit amet placerat finibus. Sed eget laoreet
                  lorem.
                </p>
                <ul className="mt-4 space-y-2 text-gray-600">
                  <div className="flex items-center justify-between">
                    <li className="flex items-center gap-2 text-sm">
                      <RiCheckDoubleLine className="text-lg text-blue-700" />6
                      Active Jobs
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <RiCheckDoubleLine className="text-lg text-blue-700" />
                      Highlights Job with Colors
                    </li>
                  </div>
                  <div className="flex items-center justify-between">
                    <li className="flex items-center gap-2 text-sm">
                      <RiCheckDoubleLine className="text-lg text-blue-700" />
                      24/7 Critical Support
                    </li>

                    <li className="flex items-center gap-2 text-sm">
                      <RiCheckDoubleLine className="text-lg text-blue-700" />
                      Access & Save Candidates
                    </li>
                  </div>
                  <div className="flex items-center justify-between">
                    <li className="flex items-center gap-2 text-sm">
                      <RiCheckDoubleLine className="text-lg text-blue-700" />
                      60 Days Resume Visibility
                    </li>
                    <li className="flex items-center gap-2 text-sm">
                      <RiCheckDoubleLine className="text-lg text-blue-700" />
                      Urgents & Featured Jobs
                    </li>
                  </div>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-xl font-bold">Next Invoice</h2>
                <p className="text-3xl font-bold mt-4 text-blue-700">
                  $59.00 USD
                </p>
                <p className="text-gray-600 mt-2 text-lg font-medium">
                  Nov 28, 2021
                </p>
                <h1 className="flex items-center text-gray-500 mt-2">
                  Package started:
                  <p className="font-medium text-gray-600">Jan 28, 2021</p>
                </h1>
                <p className="text-gray-500 mt-2">
                  You have to pay this amount of money every month.
                </p>
                <button className="flex items-center gap-2 justify-center w-full bg-blue-700 text-white p-3 rounded mt-4">
                  Pay Now <FaArrowRight />
                </button>
              </div>
              <div className="bg-white shadow rounded-lg p-6">
                <div className="flex items-center w-full justify-between">
                  <h2 className="text-xl font-bold">Payment Card</h2>
                  <button className="text-gray-500 flex items-center gap-2">
                    <FiEdit className="text-lg" />
                    Edit Card
                  </button>
                </div>
                <div className="mt-4">
                  <div className="flex items-center space-x-4">
                    <Image
                      src="/Mastercard-logo.svg.png"
                      width={90}
                      height={90}
                      className="w-20 h-16"
                      alt={""}
                    />
                    <div>
                      <p className="font-bold">Esther Howard</p>
                      <p className="text-gray-500">Expire date: 12/29</p>
                    </div>
                  </div>
                  <hr className="py-4 mt-8" />
                  <p className="text-2xl text-gray-700">6714 **** **** ****</p>
                </div>
              </div>
            </div>

            <div className="bg-white shadow rounded-lg p-6">
              <h2 className="text-xl font-bold">Latest Invoices</h2>
              <table className="w-full mt-4 text-gray-600">
                <thead>
                  <tr>
                    <th className="text-left">#ID</th>
                    <th className="text-left">DATE</th>
                    <th className="text-left">PLAN</th>
                    <th className="text-left">AMOUNT</th>
                  </tr>
                </thead>
                <tbody>
                  {invoices.map((invoice) => (
                    <tr key={invoice.id} className="border-t">
                      <td className="p-1 py-3">{invoice.id}</td>
                      <td>{invoice.date}</td>
                      <td>{invoice.plan}</td>
                      <td>{invoice.amount}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-center py-6">
                <Pagination count={10} color="primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clientdashboardtab6;
