import React from 'react';

export default function TermsOfService() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-200">
                
                <h1 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-4">Terms of Service</h1>
                
                <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

                <div className="space-y-8 text-gray-700 leading-relaxed text-[15px]">
                    
                    {/* Section 1 */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Agreement to Terms</h2>
                        <p>
                            By visiting our site and/or purchasing something from us, you engage in our "Service" and agree to be bound by the following terms and conditions ("Terms of Service", "Terms"). These Terms apply to all users of the site, including without limitation users who are browsers, vendors, customers, merchants, and/or contributors of content.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Online Store Terms</h2>
                        <p className="mb-2">
                            By agreeing to these Terms of Service, you represent that you are at least the age of majority in your state or province of residence. You may not use our products for any illegal or unauthorized purpose nor may you, in the use of the Service, violate any laws in your jurisdiction (including but not limited to copyright laws).
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Products or Services</h2>
                        <p className="mb-2">
                            Certain products or services may be available exclusively online through the website. These products or services may have limited quantities and are subject to return or exchange only according to our Return Policy.
                        </p>
                        <p>
                            We have made every effort to display as accurately as possible the colors and images of our products that appear at the store. We cannot guarantee that your computer monitor's display of any color will be accurate. We reserve the right to limit the sales of our products or Services to any person, geographic region, or jurisdiction.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Accuracy of Billing and Account Information</h2>
                        <p>
                            We reserve the right to refuse any order you place with us. We may, in our sole discretion, limit or cancel quantities purchased per person, per household, or per order. You agree to provide current, complete, and accurate purchase and account information for all purchases made at our store. We may attempt to notify you if we make a change to or cancel an order by contacting the e-mail and/or phone number provided at the time the order was made.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Prohibited Uses</h2>
                        <p className="mb-2">In addition to other prohibitions as set forth in the Terms of Service, you are prohibited from using the site or its content:</p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                            <li>For any unlawful purpose or to solicit others to perform unlawful acts.</li>
                            <li>To violate any international, federal, provincial or state regulations, rules, laws, or local ordinances.</li>
                            <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others.</li>
                            <li>To submit false or misleading information.</li>
                            <li>To upload or transmit viruses or any other type of malicious code.</li>
                        </ul>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Limitation of Liability</h2>
                        <p>
                            In no case shall <strong>[Your Store Name]</strong>, our directors, officers, employees, affiliates, agents, contractors, interns, or suppliers be liable for any injury, loss, claim, or any direct, indirect, incidental, punitive, special, or consequential damages of any kind, arising from your use of any of the service or any products procured using the service.
                        </p>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Changes to Terms of Service</h2>
                        <p>
                            You can review the most current version of the Terms of Service at any time on this page. We reserve the right, at our sole discretion, to update, change or replace any part of these Terms of Service by posting updates and changes to our website. It is your responsibility to check our website periodically for changes.
                        </p>
                    </section>

                    {/* Section 8 */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">8. Contact Information</h2>
                        <p>
                            Questions about the Terms of Service should be sent to us at:
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