import React from 'react';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-200">
                
                <h1 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-4">Privacy Policy</h1>
                
                <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

                <div className="space-y-8 text-gray-700 leading-relaxed text-[15px]">
                    
                    {/* Section 1 */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Introduction</h2>
                        <p>
                            Welcome to <strong>Zorvic</strong>. We value your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website and make a purchase.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Information We Collect</h2>
                        <p className="mb-2">When you make a purchase or attempt to make a purchase through our site, we collect certain information from you, including:</p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                            <li><strong>Personal Details:</strong> Name, Email address, and Phone number.</li>
                            <li><strong>Shipping & Billing Details:</strong> Delivery address, City, State, and PIN code.</li>
                            <li><strong>Order Details:</strong> Products purchased, sizes, quantities, and total amount.</li>
                        </ul>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Payment Information</h2>
                        <p>
                            We offer Cash on Delivery (COD) and Prepaid (UPI/QR) options. We do not store your sensitive payment details (like UPI PINs, or raw banking passwords) on our servers. Prepaid transactions are processed securely through verified third-party payment gateways.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">4. How We Use Your Information</h2>
                        <p className="mb-2">We use the collected information to:</p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                            <li>Process and fulfill your orders (including sending shipping confirmations).</li>
                            <li>Communicate with you regarding order updates or customer support.</li>
                            <li>Prevent potential fraud or risk.</li>
                            <li>Improve and optimize our website and user experience.</li>
                        </ul>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Sharing Your Information</h2>
                        <p>
                            We share your personal information with third parties only to help us process and deliver your orders. For example, we share your address and phone number with our delivery and courier partners to ensure your products reach you safely. We may also share your information to comply with applicable laws and regulations.
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Data Retention</h2>
                        <p>
                            When you place an order through our store, we will maintain your Order Information in our records for our business purposes unless and until you ask us to delete this information.
                        </p>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Contact Us</h2>
                        <p>
                            For more information about our privacy practices, if you have questions, or if you would like to make a complaint, please contact us by e-mail at:
                            <br />
                            <a href="mailto:[zevoenterprises@gmail.com]" className="text-blue-600 hover:underline font-medium mt-2 inline-block">
                               zevoenterprises@gmail.com
                            </a>
                        </p>
                    </section>
                </div>

                <div className="mt-12 pt-6 border-t border-gray-200 text-center">
                    <p className="text-sm text-gray-500">
                        &copy; {new Date().getFullYear()} Zorvic. All rights reserved.
                    </p>
                </div>
            </div>
        </div>
    );
}