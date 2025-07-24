"use client";

import React from 'react';
import { CheckCircle, ArrowRight, Rocket, LifeBuoy } from 'lucide-react';


const SuccessPage = () => {
    return (
        <div className="bg-[#232323] min-h-screen flex items-center justify-center p-4 font-sans">
            <div className="w-full max-w-2xl">
                <div className="bg-[#111010] shadow-2xl rounded-2xl border border-gray-700 p-8 md:p-12 text-center">
                    
                    {/* Icon and Main Header */}
                    <div className="flex justify-center mb-6">
                        <div className="bg-[#0e0f04] p-3 rounded-full inline-flex">
                            <CheckCircle className="text-green-400 h-10 w-10" strokeWidth={2} />
                        </div>
                    </div>
                    
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">
                        Upgrade Complete!
                    </h1>
                    
                    <p className="text-slate-400 text-lg mb-8">
                        Thank you for subscribing. Your account is now upgraded to Pro, and all features are unlocked.
                    </p>

                    
                    <a
                        href="/" 
                        className="inline-flex items-center justify-center gap-2 px-8 py-4 mb-10 text-lg font-semibold text-white bg-indigo-600 rounded-xl shadow-lg hover:bg-indigo-700 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-indigo-400"
                    >
                        Go to Dashboard
                        <ArrowRight className="h-6 w-6" />
                    </a>

                    {/* "What's Next?" Section */}
                    <div className="border-t border-gray-700 pt-8">
                        <h2 className="text-xl font-semibold text-slate-200 mb-5">
                            What's Next?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                            {/* Getting Started Card */}
                            <div className="bg-[#151515] border border-gray-700 rounded-lg p-5 flex items-start gap-4 hover:shadow-xl hover:border-indigo-500 transition-all duration-200">
                                <div className="bg-indigo-500/10 p-2.5 rounded-full">
                                    <Rocket className="h-6 w-6 text-indigo-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-100 mb-1">
                                        Explore Pro Features
                                    </h3>
                                    <p className="text-slate-400 text-sm">
                                        Dive into the new tools and capabilities now available to you.
                                    </p>
                                </div>
                            </div>
                            
                            {/* Support Card */}
                            <div className="bg-[#151515] border border-gray-700 rounded-lg p-5 flex items-start gap-4 hover:shadow-xl hover:border-green-500 transition-all duration-200">
                                <div className="bg-green-500/10 p-2.5 rounded-full">
                                    <LifeBuoy className="h-6 w-6 text-green-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-100 mb-1">
                                        Priority Support
                                    </h3>
                                    <p className="text-slate-400 text-sm">
                                        Have questions? As a Pro user, you get priority access to our support team.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <p className="text-center text-slate-500 mt-6 text-sm">
                    A confirmation email and receipt have been sent to your inbox.
                </p>
            </div>
        </div>
    );
};

export default SuccessPage;
