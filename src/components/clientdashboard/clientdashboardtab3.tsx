import React from "react";
import Salarytypes from "@/components/dropdowns/salarytypedropdown";
import Dropdown from "@/components/dropdowns/dropdown";
import Jobcategory from "@/components/dropdowns/jobcategorydropdown";
import Jobtype from "@/components/dropdowns/jobtypedropdown";
import Joblevel from "@/components/dropdowns/jobleveldropdown";
import Citydropdown from "@/components/dropdowns/citydropdown";
import Promotejob from "@/components/dropdowns/promotejob";

interface Clientdashboardtab3Props {
  openTab: number;
  setOpenTab: React.Dispatch<React.SetStateAction<number>>;
}

const Clientdashboardtab3: React.FC<Clientdashboardtab3Props> = ({
  openTab,
  setOpenTab,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [salarytype, setSalarytype] = React.useState(false);
  const [jobcategory, setJobcategory] = React.useState(false);
  const [jobtype, setJobtype] = React.useState(false);
  const [joblevel, setJoblevel] = React.useState(false);
  const [cities, setCities] = React.useState(false);

  return (
    <div>
      <div className={openTab === 3 ? "block" : "hidden"} id="link2">
        <div className="grid gap-8 w-full p-4">
          <div className="grid gap-6">
            <div className="grid gap-4">
              <h1 className="text-xl font-medium">Post a Jobs</h1>
              <div className="flex items-center gap-4">
                <div className="grid gap-2 w-full">
                  <h1 className="text-sm text-slate-700">Job Tittle</h1>
                  <input
                    type="text"
                    className="border px-2 rounded-md border-gray-400"
                    placeholder="Add job tittle..."
                  />
                </div>
                <div className="w-96 grid gap-2">
                  <h1 className="text-sm text-slate-700">Job Category</h1>
                  <Jobcategory
                    jobcategory={jobcategory}
                    setJobcategory={setJobcategory}
                  />
                </div>
              </div>
            </div>
            <div className="grid gap-3">
              <h1 className="text-lg font-medium">Salery</h1>
              <div className="flex items-center gap-4">
                <div className="grid gap-2 w-full">
                  <h1 className="text-sm text-slate-700">Min Salary</h1>
                  <div className="flex items-center rounded-md border border-gray-400">
                    <p className="bg-gray-200 h-full rounded-l-md w-fit grid items-center px-3">
                      RS:
                    </p>
                    <input
                      type="text"
                      className="border-none w-full rounded-r-md"
                      placeholder="min salary"
                    />
                  </div>
                </div>
                <div className="grid gap-2 w-full">
                  <h1 className="text-sm text-slate-700">Max Salary</h1>
                  <div className="flex items-center rounded-md border border-gray-400">
                    <p className="bg-gray-200 h-full rounded-l-md w-fit grid items-center px-3">
                      RS:
                    </p>
                    <input
                      type="text"
                      className="border-none w-full rounded-r-md"
                      placeholder="max salary"
                    />
                  </div>
                </div>
                <div className="grid gap-2">
                  <h1 className="text-sm text-slate-700">Salary Types</h1>
                  <Salarytypes
                    salarytype={salarytype}
                    setSalarytype={setSalarytype}
                  />
                </div>
              </div>
            </div>
            <div className="grid gap-3">
              <h1 className="text-lg font-medium">Advance Information</h1>
              <div className="grid gap-4">
                <div className="flex items-center gap-4">
                  <div className="grid gap-2 w-full">
                    <h1 className="text-sm text-slate-700">Education</h1>
                    <Dropdown isOpen={isOpen} setIsOpen={setIsOpen} />
                  </div>
                  <div className="grid gap-2 w-full">
                    <h1 className="text-sm text-slate-700">Experience</h1>
                    <input
                      type="text"
                      className="border-gray-400 rounded-md"
                      placeholder="experience"
                    />
                  </div>
                  <div className="grid gap-2 w-full">
                    <h1 className="text-sm text-slate-700">Job Role</h1>
                    <Jobtype jobtype={jobtype} setJobtype={setJobtype} />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="grid gap-2 w-full">
                    <h1 className="text-sm text-slate-700">Education</h1>
                    <Joblevel joblevel={joblevel} setJoblevel={setJoblevel} />
                  </div>
                  <div className="grid gap-2 w-full">
                    <h1 className="text-sm text-slate-700">Expiration Date</h1>
                    <input
                      type="date"
                      className="border-gray-400 rounded-md"
                      placeholder="experience"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-3 p-4 py-8 bg-gray-200 rounded-lg">
            <h1 className="text-lg font-medium">Location</h1>
            <div className="flex gap-4">
              <div className="grid gap-2 w-full">
                <h1 className="text-sm text-slate-700">Country</h1>
                <input
                  type="text"
                  className="border border-gray-400 rounded-md"
                  defaultValue={"Pakistan"}
                />
              </div>
              <div className="grid gap-2 w-full">
                <h1 className="text-sm text-slate-700">City</h1>
                <div className="border border-gray-400 rounded-md bg-white">
                  <Citydropdown cities={cities} setCities={setCities} />
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-4">
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
            <Promotejob />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clientdashboardtab3;
