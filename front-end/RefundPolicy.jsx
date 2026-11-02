import React from 'react';

export default function RefundPolicy() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-200">
                
                <h1 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-4">Return & Refund Policy</h1>
                
                <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

                <div className="space-y-8 text-gray-700 leading-relaxed text-[15px]">
                    
                    {/* Section 1 */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">1. 7-Day Return Policy</h2>
                        <p>
                            We offer a <strong>7-day return policy</strong>. This means you have 7 days after receiving your item to request a return. If 7 days have passed since your delivery, unfortunately, we cannot offer you a refund or exchange.
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Eligibility for Returns</h2>
                        <p className="mb-2">To be eligible for a return, your item must meet the following conditions:</p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                            <li>The item must be unused and in the same condition that you received it.</li>
                            <li>It must have all the original tags attached.</li>
                            <li>It must be in the original packaging.</li>
                            <li>You must have the receipt or proof of purchase (Order ID).</li>
                        </ul>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Non-Returnable Items</h2>
                        <p className="mb-2">Certain types of items cannot be returned. These include:</p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                            <li>Customized or personalized products.</li>
                            <li>Items purchased during a clearance or flash sale.</li>
                            <li>Intimate items for hygiene reasons.</li>
                        </ul>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">4. How to Initiate a Return</h2>
                        <p>
                            To start a return, you can contact us at <strong>[Your Email]</strong> or WhatsApp us at <strong>[Your Contact Number]</strong>. Please include your Order ID and a clear photo/video of the product. If your return is accepted, we will send you instructions on how and where to send your package. Items sent back to us without first requesting a return will not be accepted.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Refunds & Payment Methods</h2>
                        <p className="mb-2">
                            Once we receive and inspect your return, we will notify you if the refund is approved or rejected.
                        </p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                            <li><strong>Prepaid Orders (UPI/QR/Cards):</strong> If approved, the refund will be processed automatically to your original payment method within 5-7 business days.</li>
                            <li><strong>Cash on Delivery (COD) Orders:</strong> We will ask you to provide your Bank Account details or UPI ID. The refund will be transferred to your account within 5-7 business days after the product is received and inspected by our team.</li>
                        </ul>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Damages and Issues</h2>
                        <p>
                            Please inspect your order upon reception. Contact us immediately if the item is defective, damaged, or if you receive the wrong item so that we can evaluate the issue and make it right. We highly recommend recording a parcel-opening video.
                        </p>
                    </section>

                    {/* Section 7 */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">7. Contact Us</h2>
                        <p>
                            If you have any questions or concerns regarding your return or refund, please contact us at:
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