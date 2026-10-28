import React from 'react';

export default function ShippingPolicy() {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
            <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-200">
                
                <h1 className="text-3xl font-bold text-gray-900 mb-6 border-b pb-4">Shipping Policy</h1>
                
                <p className="text-sm text-gray-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

                <div className="space-y-8 text-gray-700 leading-relaxed text-[15px]">
                    
                    {/* Section 1 */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Order Processing Time</h2>
                        <p>
                            All orders are processed within <strong>1 to 2 business days</strong> (excluding weekends and holidays) after receiving your order confirmation email. You will receive another notification when your order has shipped. 
                        </p>
                        <p className="mt-2 text-sm text-gray-500">
                            <em>Note: High volume of orders may delay processing by a few days. Please allow additional days in transit for delivery.</em>
                        </p>
                    </section>

                    {/* Section 2 */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Shipping Rates & Delivery Estimates</h2>
                        <p className="mb-2">Shipping charges for your order will be calculated and displayed at checkout. Estimated delivery times are as follows:</p>
                        <ul className="list-disc pl-5 space-y-1 text-gray-600">
                            <li><strong>Standard Shipping:</strong> 3 to 7 business days.</li>
                            <li><strong>Metro Cities:</strong> Usually delivered within 2 to 4 business days.</li>
                            <li><strong>Remote Locations:</strong> May take up to 7 to 10 business days.</li>
                        </ul>
                        <p className="mt-2 text-sm text-gray-500">
                            <em>Delivery delays can occasionally occur due to extreme weather conditions, carrier delays, or public holidays.</em>
                        </p>
                    </section>

                    {/* Section 3 */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Cash on Delivery (COD)</h2>
                        <p>
                            We offer Cash on Delivery (COD) as a payment option for most pin codes in India. Please ensure that you or someone on your behalf is available at the delivery address to pay the exact amount in cash and receive the package. We may verify COD orders via phone or WhatsApp before dispatching them.
                        </p>
                    </section>

                    {/* Section 4 */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Shipment Confirmation & Order Tracking</h2>
                        <p>
                            Once your order has shipped, you will receive a Shipment Confirmation email or SMS containing your tracking number(s). The tracking number will be active within 24 hours. You can use this tracking number on our courier partner's website to track the status of your delivery.
                        </p>
                    </section>

                    {/* Section 5 */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Incorrect Shipping Addresses</h2>
                        <p>
                            <strong>[Your Store Name]</strong> is not responsible for orders shipped to incorrect or invalid addresses provided by the customer. If a package is returned to us due to an incorrect address, the customer will be responsible for any additional shipping costs to resend the package.
                        </p>
                    </section>

                    {/* Section 6 */}
                    <section>
                        <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Contact Us</h2>
                        <p>
                            If you have any questions or concerns regarding your order's shipment, please do not hesitate to contact us at:
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