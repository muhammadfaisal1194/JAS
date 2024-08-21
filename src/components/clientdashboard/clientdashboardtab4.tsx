import React, { useRef } from "react";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { MdOutlineCheckCircle } from "react-icons/md";
import Threedotmanue from "@/components/dropdowns/threedotmanue";
import Pagination from "@mui/material/Pagination";

interface Clientdashboardtab4Props {
  openTab: number;
  setOpenTab: React.Dispatch<React.SetStateAction<number>>;
}

const Clientdashboardtab4: React.FC<Clientdashboardtab4Props> = ({
  openTab,
  setOpenTab,
}) => {
  const [threedotmanue, setThreedotmanue] = React.useState(false);

  return (
    <div>
      <div className={openTab === 4 ? "block" : "hidden"} id="link2">
        <div className="grid gap-4 w-full p-4">
          <h1 className="flex items-center gap-2 text-xl font-medium">
            My Jobs
          </h1>
          <table className="table-auto w-full">
            <thead className="bg-[#f1f2f4]">
              <tr>
                <th className="text-start ps-2 py-2">Job</th>
                <th className="text-start py-2">Status</th>
                <th className="text-start py-2">Application</th>
                <th className="text-start py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t hover:border hover:border-blue-700 hover:shadow-md hover:bg-gray-50">
                <td>
                  <div className="p-4 h-fit">
                    <div className="grid gap-2">
                      <h1 className="flex items-center gap-4 text-xl font-medium text-[#18191C] hover:text-blue-600 cursor-pointer">
                        UI/UX Designer
                      </h1>
                      <div className="flex items-center gap-6">
                        <p className="text-sm text-[#767F8C]">Part-time</p>
                        <p className="text-sm text-[#767F8C]">7 days ago</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-[#1a9234]">
                  <div className="flex items-center gap-2">
                    <MdOutlineCheckCircle className="text-[#1a9234] text-xl" />
                    Active
                  </div>
                </td>
                <td className="text-gray-500">
                  <div className="flex items-center gap-1">
                    <HiOutlineUserGroup className="text-xl" />
                    85 Applications
                  </div>
                </td>
                <td>
                  <div className="flex items-center w-full gap-6">
                    <p className="w-fit hover:bg-blue-700 hover:text-white justify-center gap-2 p-2 px-4 rounded bg-slate-200 text-blue-600">
                      View Applications
                    </p>
                    <div>
                      <Threedotmanue
                        threedotmanue={threedotmanue}
                        setThreedotmanue={setThreedotmanue}
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="border-t hover:border hover:border-blue-700 hover:shadow-md hover:bg-gray-50">
                <td>
                  <div className="p-4 h-fit">
                    <div className="grid gap-2">
                      <h1 className="flex items-center gap-4 text-xl font-medium text-[#18191C] hover:text-blue-600 cursor-pointer">
                        UI/UX Designer
                      </h1>
                      <div className="flex items-center gap-6">
                        <p className="text-sm text-[#767F8C]">Part-time</p>
                        <p className="text-sm text-[#767F8C]">7 days ago</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-[#1a9234]">
                  <div className="flex items-center gap-2">
                    <MdOutlineCheckCircle className="text-[#1a9234] text-xl" />
                    Active
                  </div>
                </td>
                <td className="text-gray-500">
                  <div className="flex items-center gap-1">
                    <HiOutlineUserGroup className="text-xl" />
                    85 Applications
                  </div>
                </td>
                <td>
                  <div className="flex items-center w-full gap-6">
                    <p className="flex w-fit items-center hover:bg-blue-700 hover:text-white justify-center gap-2 p-2 px-4 rounded bg-slate-200 text-blue-600">
                      View Applications
                    </p>
                    <div>
                      <Threedotmanue
                        threedotmanue={threedotmanue}
                        setThreedotmanue={setThreedotmanue}
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr className="border-t hover:border hover:border-blue-700 hover:shadow-md hover:bg-gray-50">
                <td>
                  <div className="p-4 h-fit">
                    <div className="grid gap-2">
                      <h1 className="flex items-center gap-4 text-xl font-medium text-[#18191C] hover:text-blue-600 cursor-pointer">
                        UI/UX Designer
                      </h1>
                      <div className="flex items-center gap-6">
                        <p className="text-sm text-[#767F8C]">Part-time</p>
                        <p className="text-sm text-[#767F8C]">7 days ago</p>
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-[#1a9234]">
                  <div className="flex items-center gap-2">
                    <MdOutlineCheckCircle className="text-[#1a9234] text-xl" />
                    Active
                  </div>
                </td>
                <td className="text-gray-500">
                  <div className="flex items-center gap-1">
                    <HiOutlineUserGroup className="text-xl" />
                    85 Applications
                  </div>
                </td>
                <td>
                  <div className="flex items-center w-full gap-6">
                    <p className="flex w-fit items-center hover:bg-blue-700 hover:text-white justify-center gap-2 p-2 px-4 rounded bg-slate-200 text-blue-600">
                      View Applications
                    </p>
                    <div>
                      <Threedotmanue
                        threedotmanue={threedotmanue}
                        setThreedotmanue={setThreedotmanue}
                      />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          <div className="flex justify-center py-4">
            <Pagination count={10} color="primary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clientdashboardtab4;
