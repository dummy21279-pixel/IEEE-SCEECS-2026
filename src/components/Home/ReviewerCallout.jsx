import React from 'react';
import { Link } from 'react-router-dom';
import { Card } from '../ui/card';
import { Award, ExternalLink, ArrowRight, Globe, GraduationCap, CheckCircle2 } from 'lucide-react';

const FORMS = {
  nonManit: 'https://forms.gle/LdcKDjTfYVC55JMa7',
  manit: 'https://forms.gle/x2FuoVZ1H6F46fYm9',
};

function ReviewerCallout() {
  return (
    <div className="bg-white py-8 sm:py-12 md:py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <Card
          variant="neubrutalism"
          className="bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-6 sm:p-8 md:p-12 !border-4 !border-black rounded-3xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-purple-100 border border-purple-300 text-purple-800 text-xs sm:text-sm font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4">
                <Award className="w-4 h-4 text-purple-700" />
                <span>Call for Peer & Meta Reviewers</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-4">
                Join the SCEECS 2027 Reviewer Panel
              </h2>

              <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl mb-6">
                IEEE-MSB invites researchers, faculty, scholars, and industry professionals to serve on the Technical
                Program Committee for SCEECS'27. Reviewers receive an{' '}
                <span className="font-semibold text-purple-800">official IEEE-MSB Reviewer Certificate</span> in
                recognition of their academic contributions.
              </p>

              {/* Badges */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 text-xs sm:text-sm font-medium text-gray-700 mb-8">
                <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border-2 border-black shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  Official Reviewer Certificate
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border-2 border-black shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-blue-600" />
                  IEEE Xplore Quality Review
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border-2 border-black shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-pink-600" />
                  Technical Track Recognition
                </span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4">
                <Link
                  to="/meta-reviewers"
                  className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 text-sm sm:text-base font-bold text-white bg-purple-600 hover:bg-purple-700 rounded-xl border-2 sm:border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200"
                >
                  <span>Apply for Meta Reviewers</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <a
                  href={FORMS.nonManit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-bold text-gray-900 bg-white hover:bg-gray-100 rounded-xl border-2 sm:border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200"
                >
                  <Globe className="w-4 h-4 text-purple-600" />
                  <span>Non-MANIT Form</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-500" />
                </a>

                <a
                  href={FORMS.manit}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-3.5 text-xs sm:text-sm font-bold text-gray-900 bg-white hover:bg-gray-100 rounded-xl border-2 sm:border-3 border-black shadow-[3px_3px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.5 hover:translate-y-0.5 transition-all duration-200"
                >
                  <GraduationCap className="w-4 h-4 text-pink-600" />
                  <span>MANIT Form</span>
                  <ExternalLink className="w-3.5 h-3.5 text-gray-500" />
                </a>
              </div>
            </div>

            {/* Right Graphic / Info card */}
            <div className="w-full lg:w-80 flex-shrink-0">
              <div className="bg-white p-5 sm:p-6 rounded-2xl border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] space-y-4">
                <div className="flex items-center gap-3 pb-3 border-b border-gray-200">
                  <div className="w-10 h-10 rounded-lg bg-pink-500 text-white flex items-center justify-center font-bold">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-gray-400">Panel Info</p>
                    <p className="font-bold text-gray-900 text-sm">Peer Review Track</p>
                  </div>
                </div>

                <div className="space-y-2.5 text-xs text-gray-600">
                  <div className="flex justify-between py-1 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">Conference:</span>
                    <span>SCEECS 2027</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">Dates:</span>
                    <span>30 - 31 Jan 2027</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">Publisher:</span>
                    <span className="font-semibold text-blue-600">IEEE Xplore</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-gray-100">
                    <span className="font-semibold text-gray-700">Recognition:</span>
                    <span className="font-semibold text-purple-600">IEEE Certificate</span>
                  </div>
                  <div className="flex justify-between py-1">
                    <span className="font-semibold text-gray-700">Review Mode:</span>
                    <span>Online (MS CMT)</span>
                  </div>
                </div>

                <Link
                  to="/meta-reviewers"
                  className="block text-center text-xs font-bold text-purple-700 hover:text-purple-900 pt-2 underline underline-offset-2"
                >
                  View Details & Responsibilities →
                </Link>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}

export default ReviewerCallout;
