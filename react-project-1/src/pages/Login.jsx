import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const Login = () => {

    const [email, setEmail] = useState("")
    const [showTerms, setShowTerms] = useState(false)

    return (
        <div className="min-h-screen">

            <div className="flex justify-center items-center">
                <h1 className="font-medium text-4xl italic mt-10 w-fit text-center p-4 rounded-lg text-black">
                    SooperMall
                </h1>
            </div>

            {/* Login Box */}
            <div className="w-full max-w-md mx-auto mt-6 border border-gray-300 px-10 py-23 rounded-2xl">

                <h1 className="text-2xl font-medium">
                    Sign in
                </h1>

                <p className="text-gray-500 mt-2">
                    Sign in or create an account
                </p>

                {/* Shop Button */}
                <button className="w-full rounded-2xl bg-[#5433EB] font-bold text-white py-3 mt-8 cursor-pointer">
                    Continue with Shop
                </button>

                {/* OR */}
                <div className="flex items-center gap-4 my-6">
                    <div className="h-px bg-gray-300 flex-1"></div>

                    <span className="text-gray-500 text-sm">
                        OR
                    </span>

                    <div className="h-px bg-gray-300 flex-1"></div>
                </div>

                {/* Email */}
                <div
                    className={`flex items-center rounded-xl w-full overflow-hidden transition ${email
                        ? "border border-[#5433EB] shadow-[0_-3px_8px_rgba(84,51,235,0.15)]"
                        : "border border-gray-300"
                        }`}
                >
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="outline-none flex-1 px-5 py-3"
                    />

                    <button
                        className={`p-3.5 rounded-r-xl ${email ? "bg-[#5433EB] text-white" : "bg-white"
                            }`}
                    >
                        <ArrowRight strokeWidth={1.5} size={20} />
                    </button>
                </div>
                <div className="text-gray-400 text-xs mt-4 text-center">
                    <p>By continuing, you agree to our
                        <span onClick={() => setShowTerms(true)} className='underline cursor-pointer hover:text-blue-600'
                        > Terms of Service</span></p>

                </div>
                <p className="text-blue-600 text-xs mt-2 text-center cursor-pointer">
                    Privacy policy
                </p>
                {showTerms && (
                    <div className="fixed inset-0 z-10 bg-black/40 flex items-center justify-center p-4">

                        <div className="bg-white w-120 max-w-xl max-h-[full] rounded-2xl shadow-xl overflow-hidden">

                            {/* Modal Header */}
                            <div className="flex items-center justify-between px-8 py-5 border-b">

                                <h2 className="text-2xl font-semibold">
                                    Terms of Service
                                </h2>

                                <button
                                    onClick={() => setShowTerms(false)}
                                    className="text-2xl text-gray-500 hover:text-black"
                                >
                                    ×
                                </button>

                            </div>

                            {/* Terms Content */}
                            <div className="px-8 py-6 overflow-y-auto max-h-[70vh]">

                                <p className="text-sm text-gray-500 mb-6">
                                    Effective Date: 7-10-2025
                                </p>

                                <p className="text-gray-700 leading-7 mb-6">
                                    This website is operated by SooperMall. Throughout the
                                    site, the terms “we,” “us,” and “our” refer to SooperMall.
                                    By visiting our site and/or purchasing something from us,
                                    you agree to these Terms of Service.
                                </p>

                                <h3 className="text-lg font-semibold mb-2">
                                    1. Overview
                                </h3>

                                <p className="text-gray-600 leading-7 mb-6">
                                    These Terms apply to all users of the site, including
                                    browsers, vendors, customers, merchants, and contributors
                                    of content.
                                </p>

                                <h3 className="text-lg font-semibold mb-2">
                                    2. Online Store Terms
                                </h3>

                                <p className="text-gray-600 leading-7 mb-6">
                                    By agreeing to these Terms, you represent that you are at
                                    least the age of majority in your jurisdiction or have
                                    permission for any minor dependents to use this site.
                                </p>

                                <h3 className="text-lg font-semibold mb-2">
                                    3. General Conditions
                                </h3>

                                <p className="text-gray-600 leading-7 mb-6">
                                    We reserve the right to refuse service to anyone for any
                                    reason at any time. You agree not to reproduce, duplicate,
                                    copy, sell, resell, or exploit any portion of the Service
                                    without express written permission.
                                </p>

                                <h3 className="text-lg font-semibold mb-2">
                                    4. Accuracy of Information
                                </h3>

                                <p className="text-gray-600 leading-7 mb-6">
                                    The material on this site is provided for general
                                    information only. We reserve the right to modify the
                                    contents of this site at any time.
                                </p>

                                <h3 className="text-lg font-semibold mb-2">
                                    5. Products and Prices
                                </h3>

                                <p className="text-gray-600 leading-7 mb-6">
                                    Prices for our products are subject to change without
                                    notice. Certain products may have limited quantities and
                                    may be subject to return or exchange according to our
                                    Return and Refund Policy.
                                </p>

                                <h3 className="text-lg font-semibold mb-2">
                                    6. Billing and Account Information
                                </h3>

                                <p className="text-gray-600 leading-7 mb-6">
                                    You agree to provide current, complete, and accurate
                                    purchase and account information for all purchases made
                                    at our store.
                                </p>

                                <h3 className="text-lg font-semibold mb-2">
                                    7. Personal Information
                                </h3>

                                <p className="text-gray-600 leading-7 mb-6">
                                    Your submission of personal information through the store
                                    is governed by our Privacy Policy.
                                </p>

                                <h3 className="text-lg font-semibold mb-2">
                                    8. Prohibited Uses
                                </h3>

                                <p className="text-gray-600 leading-7 mb-6">
                                    You are prohibited from using the site for any unlawful
                                    purpose, violating applicable laws, infringing intellectual
                                    property rights, harassing others, or uploading malicious
                                    code.
                                </p>

                                <h3 className="text-lg font-semibold mb-2">
                                    9. Changes to Terms
                                </h3>

                                <p className="text-gray-600 leading-7 mb-6">
                                    We reserve the right to update, change, or replace any
                                    part of these Terms by posting updates on our website.
                                </p>

                                <h3 className="text-lg font-semibold mb-2">
                                    10. Contact Information
                                </h3>

                                <p className="text-gray-600 leading-7">
                                    If you have any questions about these Terms, you can
                                    contact us through the contact information provided on
                                    our website.
                                </p>

                            </div>

                            {/* Bottom Close Button */}
                            <div className="px-8 py-4 border-t flex justify-end">

                                <button
                                    onClick={() => setShowTerms(false)}
                                    className="bg-[#5433EB] text-white px-6 py-2.5 rounded-xl"
                                >
                                    Close
                                </button>

                            </div>

                        </div>

                    </div>
                )}
            </div>
        </div>
    )
}

export default Login