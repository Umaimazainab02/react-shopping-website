import React, { useState } from 'react'
import { ArrowRight } from 'lucide-react'

const Login = () => {

    const [email, setEmail] = useState("")
    const [showTerms, setShowTerms] = useState(false)
    const [showPrivacy, setShowPrivacy] = useState(false)
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
                <p onClick={() => setShowPrivacy(true)} className="text-blue-600 text-xs mt-2 text-center cursor-pointer">
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
                                    className="bg-[#5433EB] text-white px-6 py-2.5 rounded-xl cursor-pointer"
                                >
                                    Close
                                </button>

                            </div>

                        </div>

                    </div>
                )}
                {showPrivacy && (
                    <div className="fixed inset-0 z-10 bg-black/40 flex items-center justify-center p-4">

                        <div className="bg-white w-[480px] max-w-xl max-h-[80vh] rounded-2xl shadow-xl overflow-hidden">

                            {/* Header */}
                            <div className="flex items-center justify-between px-8 pt-3">

                                <h2 className="text-xl font-semibold">
                                    Privacy Policy
                                </h2>

                                <button
                                    onClick={() => setShowPrivacy(false)}
                                    className="text-2xl cursor-pointer text-gray-500 hover:text-black"
                                >
                                    ×
                                </button>

                            </div>

                            {/* Date */}
                            <div className="px-8 pt-2 pb-2">
                                <p className="leading-7 text-sm">
                                    Last updated: July 29, 2026
                                </p>
                            </div>

                            {/* SCROLLABLE CONTENT */}
                            <div className="max-h-[70vh] overflow-y-auto px-7 pr-8 text-sm">

                                <p>
                                    SooperMall operates this store and website, including all related information, content, features, tools, products and services, in order to provide you, the customer, with a curated shopping experience (the "Services"). SooperMall is powered by Shopify, which enables us to provide the Services to you. This Privacy Policy describes how we collect, use, and disclose your personal information when you visit, use, or make a purchase or other transaction using the Services or otherwise communicate with us. If there is a conflict between our Terms of Service and this Privacy Policy, this Privacy Policy controls with respect to the collection, processing, and disclosure of your personal information.


                                </p>

                                <p className="my-4">
                                    Please read this Privacy Policy carefully. By using and
                                    accessing any of the Services, you acknowledge that you have
                                    read this Privacy Policy and understand the collection,
                                    use, and disclosure of your information as described in
                                    this Privacy Policy.
                                </p>

                                <h3 className="text-lg font-semibold mb-3">
                                    Personal Information We Collect or Process
                                </h3>

                                <p className="mt-2 mb-6">
                                    When we use the term "personal information," we are referring to information that identifies or can reasonably be linked to you or another person. Personal information does not include information that is collected anonymously or that has been de-identified, so that it cannot identify or be reasonably linked to you. We may collect or process the following categories of personal information, including inferences drawn from this personal information, depending on how you interact with the Services, where you live, and as permitted or required by applicable law:

                                </p>

                                    {/* Personal Information */}
                                    <p>
                                       <strong>Contact Details </strong>including your name, address, billing address,
                                        shipping address, phone number, and email address.
                                    </p>

                                    <p className="mt-3">
                                       <strong>Financial Information </strong>including credit card, debit card, and
                                        financial account numbers, payment card information, financial
                                        account information, transaction details, form of payment,
                                        payment confirmation and other payment details.
                                    </p>

                                    <p className="mt-3">
                                       <strong>Account Information </strong> including your username, password, security
                                        questions, preferences and settings.
                                    </p>

                                    <p className="mt-3">
                                       <strong>Transaction Information </strong> including the items you view, put in your
                                        cart, add to your wishlist, or purchase, return, exchange or
                                        cancel and your past transactions.
                                    </p>

                                    <p className="mt-3">
                                       <strong>Communications with Us </strong> including the information you include in
                                        communications with us, for example, when sending a customer
                                        support inquiry.
                                    </p>

                                    <p className="mt-3">
                                       <strong>Device Information </strong> including information about your device,
                                        browser, or network connection, your IP address, and other unique
                                        identifiers.
                                    </p>

                                    <p className="mt-3">
                                      <strong>Usage Information </strong> including information regarding your interaction
                                        with the Services, including how and when you interact with or
                                        navigate the Services.
                                    </p>


                                    {/* Personal Information Sources */}
                                    <h3 className="text-lg font-semibold mt-6 mb-3">
                                        Personal Information Sources
                                    </h3>

                                    <p>
                                        We may collect personal information from the following sources:
                                    </p>

                                    <p className="mt-3">
                                        <strong>Directly from you</strong> including when you create an
                                        account, visit or use the Services, communicate with us, or
                                        otherwise provide us with your personal information.
                                    </p>

                                    <p className="mt-3">
                                        <strong>Automatically through the Services</strong> including from
                                        your device when you use our products or services or visit our
                                        websites, and through the use of cookies and similar technologies.
                                    </p>

                                    <p className="mt-3">
                                        <strong>From our service providers</strong> including when we engage
                                        them to enable certain technology and when they collect or process
                                        your personal information on our behalf.
                                    </p>

                                    <p className="mt-3">
                                        <strong>From our partners or other third parties.</strong>
                                    </p>


                                    {/* How We Use */}
                                    <h3 className="text-lg font-semibold mt-6 mb-3">
                                        How We Use Your Personal Information
                                    </h3>

                                    <p>
                                        Depending on how you interact with us or which of the Services you
                                        use, we may use personal information for the following purposes:
                                    </p>

                                    <p className="mt-3">
                                        <strong>Provide, Tailor, and Improve the Services.</strong> We use
                                        your personal information to provide you with the Services,
                                        including to process your payments, fulfill your orders, remember
                                        your preferences, process purchases, returns, exchanges or other
                                        transactions, manage your account, arrange shipping, facilitate
                                        returns and exchanges, enable reviews, and create a customized
                                        shopping experience.
                                    </p>

                                    <p className="mt-3">
                                        <strong>Marketing and Advertising.</strong> We use your personal
                                        information for marketing and promotional purposes, such as sending
                                        marketing, advertising and promotional communications by email,
                                        text message or postal mail, and showing you online advertisements.
                                    </p>

                                    <p className="mt-3">
                                        <strong>Security and Fraud Prevention.</strong> We use your
                                        personal information to authenticate your account, provide a secure
                                        payment and shopping experience, detect possible fraudulent,
                                        illegal, unsafe, or malicious activity, and secure our services.
                                    </p>

                                    <p className="mt-3">
                                        <strong>Communicating with You.</strong> We use your personal
                                        information to provide customer support and maintain our business
                                        relationship with you.
                                    </p>

                                    <p className="mt-3">
                                        <bold>Legal Reasons.</bold> We use your personal information to
                                        comply with applicable law or respond to valid legal processes and
                                        to enforce or investigate potential violations of our terms or
                                        policies.
                                    </p>


                                    {/* Disclosure */}
                                    <h3 className="text-lg font-semibold mt-6 mb-3">
                                        How We Disclose Personal Information
                                    </h3>

                                    <p>
                                        In certain circumstances, we may disclose your personal information
                                        to third parties for legitimate purposes subject to this Privacy
                                        Policy.
                                    </p>

                                    <p className="mt-3">
                                        We may share information with Shopify, vendors and other third
                                        parties who perform services on our behalf, such as IT management,
                                        payment processing, data analytics, customer support, cloud
                                        storage, fulfillment and shipping.
                                    </p>

                                    <p className="mt-3">
                                        We may also share information with business and marketing partners
                                        to provide marketing services and advertising.
                                    </p>

                                    <p className="mt-3">
                                        We may disclose information when you direct, request us or otherwise
                                        consent to such disclosure, including for shipping products or
                                        through social media widgets or login integrations.
                                    </p>


                                    {/* Shopify */}
                                    <h3 className="text-lg font-semibold mt-6 mb-3">
                                        Relationship with Shopify
                                    </h3>

                                    <p>
                                        The Services are hosted by Shopify, which collects and processes
                                        personal information about your access to and use of the Services
                                        in order to provide and improve the Services for you.
                                    </p>

                                    <p className="mt-3">
                                        Information you submit to the Services may be transmitted to and
                                        shared with Shopify and third parties that may be located in
                                        countries other than where you reside.
                                    </p>


                                    {/* Third Party */}
                                    <h3 className="text-lg font-semibold mt-6 mb-3">
                                        Third Party Websites and Links
                                    </h3>

                                    <p>
                                        The Services may provide links to websites or other online
                                        platforms operated by third parties. If you follow links to sites
                                        not affiliated or controlled by us, you should review their privacy
                                        and security policies and other terms and conditions.
                                    </p>


                                    {/* Children */}
                                    <h3 className="text-lg font-semibold mt-6 mb-3">
                                        Children's Data
                                    </h3>

                                    <p>
                                        The Services are not intended to be used by children, and we do not
                                        knowingly collect personal information about children under the age
                                        of majority in your jurisdiction.
                                    </p>


                                    {/* Security */}
                                    <h3 className="text-lg font-semibold mt-6 mb-3">
                                        Security and Retention of Your Information
                                    </h3>

                                    <p>
                                        Please be aware that no security measures are perfect or
                                        impenetrable, and we cannot guarantee perfect security. We
                                        recommend that you do not use unsecured channels to communicate
                                        sensitive or confidential information to us.
                                    </p>

                                    <p className="mt-3">
                                        How long we retain your personal information depends on different
                                        factors, such as whether we need the information to maintain your
                                        account, provide Services, comply with legal obligations, resolve
                                        disputes or enforce applicable contracts and policies.
                                    </p>


                                    {/* Rights */}
                                    <h3 className="text-lg font-semibold mt-6 mb-3">
                                        Your Rights and Choices
                                    </h3>

                                    <p>
                                        Depending on where you live, you may have some or all of the
                                        following rights in relation to your personal information.
                                    </p>

                                    <p className="mt-3">
                                        <strong>Right to Access / Know.</strong> You may have a right to
                                        request access to personal information that we hold about you.
                                    </p>

                                    <p className="mt-3">
                                        <strong>Right to Delete.</strong> You may have a right to request
                                        that we delete personal information we maintain about you.
                                    </p>

                                    <p className="mt-3">
                                        <strong>Right to Correct.</strong> You may have a right to request
                                        that we correct inaccurate personal information.
                                    </p>

                                    <p className="mt-3">
                                        <strong>Right of Portability.</strong> You may have a right to
                                        receive a copy of the personal information we hold about you and,
                                        in certain circumstances, request that we transfer it to a third
                                        party.
                                    </p>

                                    <p className="mt-3">
                                        <strong>Managing Communication Preferences.</strong> You may opt
                                        out of promotional emails using the unsubscribe option provided in
                                        those emails.
                                    </p>


                                    {/* Complaints */}
                                    <h3 className="text-lg font-semibold mt-6 mb-3">
                                        Complaints
                                    </h3>

                                    <p>
                                        If you have complaints about how we process your personal
                                        information, please contact us using the contact details provided
                                        below.
                                    </p>


                                    {/* International */}
                                    <h3 className="text-lg font-semibold mt-6 mb-3">
                                        International Transfers
                                    </h3>

                                    <p>
                                        Please note that we may transfer, store and process your personal
                                        information outside the country you live in.
                                    </p>


                                    {/* Changes */}
                                    <h3 className="text-lg font-semibold mt-6 mb-3">
                                        Changes to This Privacy Policy
                                    </h3>

                                    <p>
                                        We may update this Privacy Policy from time to time, including to
                                        reflect changes to our practices or for other operational, legal,
                                        or regulatory reasons. We will post the revised Privacy Policy on
                                        this website and update the "Last updated" date.
                                    </p>


                                    {/* Contact */}
                                    <h3 className="text-lg font-semibold mt-6 mb-3">
                                        Contact
                                    </h3>

                                    <p className="pb-9">
                                        Should you have any questions about our privacy practices or this
                                        Privacy Policy, or if you would like to exercise any of the rights
                                        available to you, please call +92 333 3399743 or email us at
                                        officialsoopermall@gmail.com or contact us at 334 Street Number 1,
                                        Lahore 54770, Pakistan.
                                    </p>

                                </div>

                            </div>

                        </div>
                )}
            </div>
        </div >
    )
}

export default Login