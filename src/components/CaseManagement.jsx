import React, { useState } from "react";

const CaseManagement = () => {
  const [cases, setCases] = useState({
    open: [
      { caseNo: "23-FA-12345", caseName: "Divorce", partyName: "Abhinav" },
      { caseNo: "23-FA-12345", caseName: "Divorce", partyName: "Abhinav" },
    ],
    closed: [
      { caseNo: "23-FA-12346", caseName: "Divorce", partyName: "Abhinav" },
      { caseNo: "23-FA-12346", caseName: "Divorce", partyName: "Abhinav" },
      { caseNo: "23-FA-12346", caseName: "Divorce", partyName: "Abhinav" },
      { caseNo: "23-FA-12346", caseName: "Divorce", partyName: "Abhinav" },
    ],
    upcoming: [
      { caseNo: "23-FA-12347", caseName: "Divorce", partyName: "Abhinav" },
      { caseNo: "23-FA-12347", caseName: "Divorce", partyName: "Abhinav" },
      { caseNo: "23-FA-12347", caseName: "Divorce", partyName: "Abhinav" },
      
    ],
  });

  return (
    <div className="container mx-auto p-5">
      <Section title="Open Cases" cases={cases.open} count={cases.open.length} />
      <Section title="Closed Cases" cases={cases.closed} count={cases.closed.length} />
      <Section title="Upcoming Cases" cases={cases.upcoming} count={cases.upcoming.length} />
    </div>
  );
};

const Section = ({ title, cases, count }) => (
  <div className="section mb-10">
    <h2 className="text-2xl text-blue-800 flex items-center gap-2">
      {title} <span className="inline-block bg-[#FFAF5B] text-black rounded-full w-8 h-8 text-center leading-8 font-bold">{count}</span>
    </h2>
    <div className="case-list flex flex-wrap gap-5">
      {cases.map((caseItem, index) => (
        <CaseBox key={index} caseItem={caseItem} />
      ))}
    </div>
  </div>
);

const CaseBox = ({ caseItem }) => (
  <div className="case-box w-52 h-44 rounded-lg bg-gray-100 shadow-md flex flex-col justify-end overflow-hidden">
    <div className="bg-gray-300 h-3/5 w-full"></div>
    <p className="m-0 p-2 text-sm">
      Case No: <span className="details font-bold text-[#FFAF5B]">{caseItem.caseNo}</span>
    </p>
    <p className="m-0 p-2 text-sm">
      Case Name: <span className="details font-bold text-[#FFAF5B]">{caseItem.caseName}</span>
    </p>
    <p className="m-0 p-2 text-sm">
      Party Name: <span className="details font-bold text-[#FFAF5B]">{caseItem.partyName}</span>
    </p>
  </div>
);

export default CaseManagement;
