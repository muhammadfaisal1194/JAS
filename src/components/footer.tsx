import React from "react";

const Footer = () => {
  return (
    <div>
      {/* footer */}
      <div className="bg-[#18191C] p-16 px-10 mt-20 flex justify-between">
        <div className="flex flex-col gap-4">
          <h1 className="text-white text-xl">Job and services</h1>
          <span className="text-[#5E6670] flex gap-1">
            Call now:
            <p className="text-white">(+92)3088742528</p>
          </span>
          <p className="text-[#5E6670] w-80">
            6391 Elgin St. Celina, Delaware 10299, New York, United States of
            America
          </p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-white text-xl">Quick Link</p>
          <p className="text-[#9199A3]">About</p>
          <p className="text-[#9199A3]">Contact</p>
          <p className="text-[#9199A3]">Pricing</p>
          <p className="text-[#9199A3]">Blog</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-white text-xl">Candidate</p>
          <p className="text-[#9199A3]">Browse Jobs</p>
          <p className="text-[#9199A3]">Browse Employers</p>
          <p className="text-[#9199A3]">Candidate Dashboard</p>
          <p className="text-[#9199A3]">Saved Jobs</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-white text-xl">Employers</p>
          <p className="text-[#9199A3]">Post a Job</p>
          <p className="text-[#9199A3]">Browse Candidates</p>
          <p className="text-[#9199A3]">Employers Dashboard</p>
          <p className="text-[#9199A3]">Applications</p>
        </div>
        <div className="flex flex-col gap-2">
          <p className="text-white text-xl">Support</p>
          <p className="text-[#9199A3]">Faqs</p>
          <p className="text-[#9199A3]">Privacy Policy</p>
          <p className="text-[#9199A3]">Terms & Conditions</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
