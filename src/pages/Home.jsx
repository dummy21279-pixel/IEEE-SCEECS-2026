import { cloudinaryImage } from '@/utils/cloudinary';
import HowItWorkTimeline from "../components/Home/Timeline";
import TracksAndTopics from "../components/Home/TracksAndTopics";
import Gallery from "../components/Home/Gallery";
import FeatureCards from "../components/Home/FeatureCards";
import ReviewerCallout from "../components/Home/ReviewerCallout";
import Sponsors from "../components/Home/Sponsors";
import { StaggerTestimonials } from "../components/stagger-testimonials";
import VideoShowcase from "../components/Home/VideoShowcase";
import RegistrationFeeTable from "../components/Home/RegistrationFeeTable";
import GuestLectures from "../components/Home/GuestLectures";
import About from "../components/Home/About";
import Hero from "@/components/Hero";
import EventTimerSection from "@/components/Timer";
import ScheduleSection from "../components/Home/ScheduleSection";
import { ExternalLink } from "lucide-react";


function Home() {
  // const button = [
  //   { text: "Visit IEEE-MSB", link: "https://ieee-msb-2025.vercel.app" },
  //   { text: "Conference details", link: "/docs/CALL FOR PAPER 1.png" },
  // ]
  const button = [
  {
    text: "Visit IEEE-MSB",
    link: "https://ieee-msb.ieeenitb.com",
  },
  {
    text: "Conference details",
    link: "/docs/CALL FOR PAPER.png",
  },
  {
    text: "Apply for Meta Reviewers",
    link: "/meta-reviewers",
  },
];
  return (
    <div>
      <Hero src={cloudinaryImage("/background/conference.jpg")} content="IEEE SCEECS 2027" dates="30th Jan - 31st Jan 2027, Bhopal, India." buttonContent={button} />
      
      {/* Paper Registration Closed Notice Box */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10">
        <div className="bg-white rounded-lg shadow-sm border border-gray-300 p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-center sm:text-left">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1.5">
              <span className="bg-pink-600 text-white text-[11px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded">
                Notice
              </span>
              <h3 className="font-bold text-gray-900 text-base sm:text-lg">
                Paper Registration Closed
              </h3>
            </div>
            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
              Paper submissions and registrations for IEEE SCEECS 2027 are officially closed. Authors can still track manuscript review status via Microsoft CMT.
            </p>
          </div>
          <a
            href="https://cmt3.research.microsoft.com/SCEECS2027"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-pink-600 hover:bg-pink-700 text-white font-semibold text-xs sm:text-sm rounded-lg shadow-sm hover:shadow transition-all"
          >
            <span>CMT Portal</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>
      
      <EventTimerSection />
      <VideoShowcase />
      <About />
      <HowItWorkTimeline />
      <TracksAndTopics />
      <Gallery />
      <FeatureCards />
      <ReviewerCallout />
      <GuestLectures />
      <Sponsors />
      <RegistrationFeeTable />
      <ScheduleSection />
      <StaggerTestimonials />
    </div>
  );
}

export default Home;
