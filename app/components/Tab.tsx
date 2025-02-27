"use client";
import { useState, useRef, useEffect } from "react";
import SummaryCard from "./SummaryCard";
import DashboardRow from "./DashboardRow";

export default function Tab() {
  const [activeTab, setActiveTab] = useState<"summary" | "dashboard">("summary");
  
  const summaryContentRef = useRef<HTMLDivElement>(null);
  const dashboardContentRef = useRef<HTMLDivElement>(null);

  const summaryCardsData = [
    {
      photo: "/logos/icon1.svg",
      title: "100",
      description: "No. of Referrals",
    },
    {
      photo: "/logos/icon2.svg",
      title: "2",
      description: "No. of Investments",
    },
    {
      photo: "/logos/icon3.svg",
      title: "50,000",
      description: "Amount of Investments",
    },
    {
      photo: "/logos/icon4.svg",
      title: "5,000",
      description: "Referral Rewards earned",
    },
  ];

  const dashboardData = [
    {
        userPhoto: '/logos/user1img1.svg',
        userName:'Kevin P.Jones',
        opportunity:'Mumbai Suburban Housing Investment Opportunity',
        amt_invested:'₹ 10,000,000',
        ref_earned:'₹24,990'
    },
    {
        userPhoto: '/logos/user2img.svg',
        userName:'Kevin P.Jones',
        opportunity:'Mumbai Suburban Housing Investment Opportunity',
        amt_invested:'₹ 0',
        ref_earned:'₹ 0'
    },
    {
        userPhoto: '/logos/user2img.svg',
        userName:'Kevin P.Jones',
        opportunity:'Mumbai Suburban Housing Investment Opportunity',
        amt_invested:'₹ 12,000',
        ref_earned:'₹1,00'
    }
  ];

  const handleTabChange = (tab: "summary" | "dashboard") => {
    setActiveTab(tab);
  };

  useEffect(() => {
    const scrollToContent = () => {
      if (activeTab === "summary" && summaryContentRef.current) {
        summaryContentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (activeTab === "dashboard" && dashboardContentRef.current) {
        dashboardContentRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };

    const timeoutId = setTimeout(scrollToContent, 100);
    return () => clearTimeout(timeoutId);
  }, [activeTab]);

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex gap-8 relative">
          <button
            onClick={() => handleTabChange("summary")}
            className="px-[10px] pb-2 font-inter text-2xl font-semibold tracking-normal relative"
          >
            Summary
            {activeTab === "summary" && (
              <div className="absolute bottom-0 left-0 h-1 w-full bg-custom-orange rounded-tr-full rounded-tl-full transition-all duration-300" />
            )}
          </button>
          <button
            onClick={() => handleTabChange("dashboard")}
            className="px-[10px] pb-2 font-inter text-2xl font-semibold tracking-normal relative"
          >
            Dashboard
            {activeTab === "dashboard" && (
              <div className="absolute bottom-0 left-0 h-1 w-full bg-custom-orange rounded-tr-full rounded-tl-full transition-all duration-300" />
            )}
          </button>
          <div className="absolute bottom-0 left-0 right-0 h-px bg-light-gray" />
        </div>
      </div>
      
      <div className="mt-6">
        <div 
          ref={summaryContentRef} 
          className={`flex gap-8 ${activeTab !== "summary" ? "hidden" : ""}`}
        >
          {summaryCardsData.map((card, index) => (
            <SummaryCard
              key={index}
              photo={card.photo}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
        
        <div 
          ref={dashboardContentRef}
          className={`flex flex-col gap-6 ${activeTab !== "dashboard" ? "hidden" : ""}`}
        >
          {dashboardData.map((row, index) => (
            <DashboardRow
              key={index}
              userPhoto={row.userPhoto}
              userName={row.userName}
              opportunity={row.opportunity}
              amt_invested={row.amt_invested}
              ref_earned={row.ref_earned}
            />
          ))}
        </div>
      </div>
    </div>
  );
}