import React from 'react';
import Hero from '@/components/Hero';
import { Card } from '@/components/ui/card';
import { ExternalLink, Award, FileText, Globe, GraduationCap } from 'lucide-react';

const FORMS = {
  nonManit: {
    title: 'Non-MANIT Reviewer Form',
    url: 'https://forms.gle/LdcKDjTfYVC55JMa7',
    label: 'External Applicants',
  },
  manit: {
    title: 'MANIT Reviewer Form',
    url: 'https://forms.gle/x2FuoVZ1H6F46fYm9',
    label: 'MANIT Faculty & Scholars',
  },
};

function MetaReviewers() {
  const heroButtons = [
    {
      text: 'Non-MANIT Reviewer Form',
      link: FORMS.nonManit.url,
    },
    {
      text: 'MANIT Reviewer Form',
      link: FORMS.manit.url,
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <Hero
        src="/background/conference.jpg"
        content="Call for Meta Reviewers"
        dates="30th & 31st January 2027 • IEEE MANIT Student Branch, Bhopal"
        buttonContent={heroButtons}
      />

      <div className="max-w-5xl mx-auto px-3 sm:px-6 md:px-8 py-5 sm:py-12">
        {/* Quick Form Buttons Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 mb-5 sm:mb-10">
          <a
            href={FORMS.nonManit.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-purple-50 hover:bg-purple-100 border-2 sm:border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200 group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-purple-600 text-white flex items-center justify-center flex-shrink-0">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-purple-700">External</p>
                <h3 className="font-bold text-gray-900 text-sm sm:text-lg group-hover:text-purple-700 transition-colors">
                  Non-MANIT Reviewer Form
                </h3>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 group-hover:text-purple-700 transition-colors flex-shrink-0" />
          </a>

          <a
            href={FORMS.manit.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between p-3 sm:p-5 rounded-xl sm:rounded-2xl bg-pink-50 hover:bg-pink-100 border-2 sm:border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] sm:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200 group"
          >
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-pink-600 text-white flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
              <div>
                <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-pink-700">Internal</p>
                <h3 className="font-bold text-gray-900 text-sm sm:text-lg group-hover:text-pink-700 transition-colors">
                  For MANIT Reviewers
                </h3>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500 group-hover:text-pink-700 transition-colors flex-shrink-0" />
          </a>
        </div>

        {/* Main Clean Card: Invitation + Details */}
        <Card
          variant="neubrutalism"
          className="bg-white p-3.5 sm:p-8 md:p-10 !border-2 sm:!border-4 !border-black rounded-2xl sm:rounded-3xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] sm:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] space-y-4 sm:space-y-8"
        >
          {/* Official Invitation */}
          <div className="space-y-2.5 sm:space-y-4 text-gray-700 text-xs sm:text-base leading-relaxed border-b border-gray-200 pb-4 sm:pb-8">
            <div className="flex items-center justify-between gap-2 sm:gap-3 mb-1 sm:mb-2 flex-wrap">
              <span className="inline-block bg-purple-100 text-purple-800 text-[10px] sm:text-xs font-bold uppercase tracking-wider px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full border border-purple-200">
                IEEE-MSB Invitation
              </span>
              <span className="text-[11px] sm:text-xs text-gray-500 font-medium">
                Maulana Azad National Institute of Technology (MANIT), Bhopal
              </span>
            </div>

            <p className="font-semibold text-gray-900 text-sm sm:text-lg">
              Greetings from the IEEE MANIT Student Branch, Maulana Azad National Institute of Technology (MANIT), Bhopal.
            </p>

            <p>
              We are pleased to invite you to serve on the <span className="font-semibold text-purple-700">Technical Program Committee</span> as a <span className="font-semibold text-purple-700">Peer Reviewer</span> for the <span className="font-semibold text-gray-900">12th IEEE International Students' Conference on Electrical, Electronics, and Computer Science (SCEECS'27)</span>, scheduled to be held on <span className="font-bold text-gray-900">30th and 31st January 2027</span>.
            </p>

            <p>
              Organized annually by IEEE-MSB, SCEECS is a flagship multi-disciplinary IEEE conference dedicated to advancing undergraduate and postgraduate research across Electrical, Electronics, and Computer Science domains. All accepted and presented papers undergo a rigorous peer-review process and are published in the <span className="font-bold text-blue-700">IEEE Xplore Digital Library</span>, ensuring global academic visibility.
            </p>

            <p>
              Given your domain expertise and research contributions, your critical evaluation would be invaluable in maintaining the technical quality of our proceedings and guiding emerging researchers.
            </p>
          </div>

          {/* Side-by-Side: What they have to do (Role) & What will they get (Recognition) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-8">
            {/* What you have to do */}
            <div className="bg-purple-50/70 p-3.5 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-black flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-purple-600 text-white flex items-center justify-center flex-shrink-0">
                    <FileText className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-purple-700">What You Have To Do</p>
                    <h3 className="text-base sm:text-xl font-bold text-gray-900">Role</h3>
                  </div>
                </div>

                <div className="text-xs sm:text-sm text-gray-700 space-y-2">
                  <p className="font-bold text-gray-900 text-sm sm:text-base">
                    Peer Reviewer (Technical Track)
                  </p>
                  <p className="leading-relaxed">
                    Serve on the Technical Program Committee to provide critical evaluation of submitted papers in your domain of expertise, maintaining the technical quality of the proceedings and guiding emerging researchers.
                  </p>
                </div>
              </div>
            </div>

            {/* What will you get */}
            <div className="bg-pink-50/70 p-3.5 sm:p-6 rounded-xl sm:rounded-2xl border-2 border-black flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2.5 sm:gap-3 mb-2.5 sm:mb-4">
                  <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-pink-600 text-white flex items-center justify-center flex-shrink-0">
                    <Award className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-pink-700">What Will You Get</p>
                    <h3 className="text-base sm:text-xl font-bold text-gray-900">Recognition</h3>
                  </div>
                </div>

                <div className="text-xs sm:text-sm text-gray-700 space-y-2">
                  <p className="font-bold text-gray-900 text-sm sm:text-base">
                    Official Reviewer Certificate
                  </p>
                  <p className="leading-relaxed">
                    Reviewers who join us and complete their assigned reviews will receive an official Reviewer Certificate from IEEE-MSB in recognition of their academic contribution.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Action Callout */}
          <div className="pt-3 sm:pt-6 border-t border-gray-200 text-center">
            <p className="text-gray-700 text-xs sm:text-base font-medium mb-3 sm:mb-4">
              If you are willing to join our reviewer panel, please confirm your availability and domain preferences through the respective link:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4">
              <a
                href={FORMS.nonManit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm text-white bg-purple-600 hover:bg-purple-700 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                <span>Non-MANIT Reviewer Form</span>
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>

              <a
                href={FORMS.manit.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 py-2 sm:px-6 sm:py-3 rounded-lg sm:rounded-xl font-bold text-xs sm:text-sm text-white bg-pink-600 hover:bg-pink-700 border-2 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all"
              >
                <span>For MANIT Reviewers</span>
                <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
              </a>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default MetaReviewers;
