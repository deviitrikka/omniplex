"use client";

import React from 'react';
import { XCircle, ArrowLeft, RefreshCw, LifeBuoy } from 'lucide-react';


const CancelPage = () => {
    return (
        <div className="bg-[#232323] min-h-screen flex items-center justify-center p-4 font-sans">
            <div className="w-full max-w-2xl">
                <div className="bg-[#151515] shadow-2xl rounded-2xl border border-gray-700 p-8 md:p-12 text-center">
                    
                    
                    <div className="flex justify-center mb-6">
                        <div className="bg-red-500/10 p-3 rounded-full inline-flex">
                            <XCircle className="text-red-400 h-10 w-10" strokeWidth={2} />
                        </div>
                    </div>
                    
                    <h1 className="text-3xl md:text-4xl font-bold text-slate-100 mb-3">
                        Payment Canceled
                    </h1>
                    
                    <p className="text-slate-400 text-lg mb-8">
                        Your transaction was not completed, and you have not been charged. You can return to your dashboard or try again.
                    </p>

                    
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
                        <a
                            href="/" 
                            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 text-lg font-semibold text-white bg-gray-600 rounded-xl shadow-lg hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-gray-500"
                        >
                            <ArrowLeft className="h-6 w-6" />
                            Go to Dashboard
                        </a>
                        
                    </div>


                    {/* "Need Help?" Section */}
                    <div className="border-t border-gray-700 pt-8">
                        <h2 className="text-xl font-semibold text-slate-200 mb-5">
                            Having Trouble?
                        </h2>
                        <div className="flex justify-center">
                            <div className="bg-[#131313] border border-gray-700 rounded-lg p-5 flex items-start gap-4 max-w-sm hover:shadow-xl hover:border-blue-500 transition-all duration-200">
                                <div className="bg-[#1a1a19] p-2.5 rounded-full">
                                    <LifeBuoy className="h-6 w-6 text-blue-400" />
                                </div>
                                <div>
                                    <h3 className="font-semibold text-slate-100 mb-1">
                                        Contact Support
                                    </h3>
                                    <p className="text-slate-400 text-sm">
                                        If you're experiencing issues, please don't hesitate to reach out to our team.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <p className="text-center text-slate-500 mt-6 text-sm">
                    No charges were made to your account.
                </p>
            </div>
        </div>
    );
};

export default CancelPage;
