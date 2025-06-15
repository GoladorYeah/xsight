import Background from "@/components/Background";
import {useTranslations} from "next-intl";

export default function Page() {

    const t = useTranslations("Pages.Policy")

    return (
        <>
            <section className="bg-gray-200/75 relative overflow-hidden">
                <Background align={"right"}/>
                <div className="max-w-screen-xl px-3 py-16 md:py-24 mx-auto relative">
                    <div
                        className="flex flex-col justify-center items-center w-full ">
                        <div className="flex flex-col justify-center text-center gap-y-2 mb-4">
                            <h1 className="text-2xl sm:text-4xl font-semibold md:leading-snug">
                                PRIVACY POLICY
                            </h1>
                        </div>
                        <div className="border border-orange-500/50 mb-4 w-32"></div>
                    </div>
                </div>
            </section>
 <main>
                <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
                    <div className="max-w-4xl mx-auto px-6 lg:px-8">

                        <div className="prose prose-lg max-w-none">
                            <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                                <div className="text-gray-700 leading-relaxed space-y-6">
                                    <p><strong>Last Updated:</strong> 16.06.2025</p>

                                    <section>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Scope & Overview</h2>
                                        <p>This Privacy Policy applies to visitors of:</p>
                                        <ul className="list-disc list-inside ml-4">
                                            <li><a href="https://xsight.ch" className="text-orange-600 hover:underline">https://xsight.ch</a></li>
                                            <li><a href="https://tech.xsight.ch" className="text-orange-600 hover:underline">https://tech.xsight.ch</a></li>
                                        </ul>
                                        <p>These websites provide <strong>informational content about cybersecurity and IT services</strong> (the "Services"). No user accounts, financial transactions, or paid services are offered.</p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Data Collection</h2>
                                        <p>We only process:</p>
                                        
                                        <div className="overflow-x-auto my-4">
                                            <table className="min-w-full border border-gray-300">
                                                <thead className="bg-gray-50">
                                                    <tr>
                                                        <th className="border border-gray-300 px-4 py-2 text-left font-bold">Category</th>
                                                        <th className="border border-gray-300 px-4 py-2 text-left font-bold">Examples</th>
                                                        <th className="border border-gray-300 px-4 py-2 text-left font-bold">Purpose</th>
                                                        <th className="border border-gray-300 px-4 py-2 text-left font-bold">Legal Basis</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td className="border border-gray-300 px-4 py-2"><strong>Technical Data</strong></td>
                                                        <td className="border border-gray-300 px-4 py-2">IP address, browser type, device OS</td>
                                                        <td className="border border-gray-300 px-4 py-2">Security, analytics, troubleshooting</td>
                                                        <td className="border border-gray-300 px-4 py-2">Legitimate interest (GDPR Art. 6(1)(f))</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-gray-300 px-4 py-2"><strong>Contact Form Data</strong></td>
                                                        <td className="border border-gray-300 px-4 py-2">Name, email, message content</td>
                                                        <td className="border border-gray-300 px-4 py-2">Responding to inquiries</td>
                                                        <td className="border border-gray-300 px-4 py-2">Consent (GDPR Art. 6(1)(a))</td>
                                                    </tr>
                                                    <tr>
                                                        <td className="border border-gray-300 px-4 py-2"><strong>Cookies</strong></td>
                                                        <td className="border border-gray-300 px-4 py-2">Session cookies, analytics tokens</td>
                                                        <td className="border border-gray-300 px-4 py-2">Site functionality, traffic analysis</td>
                                                        <td className="border border-gray-300 px-4 py-2">Consent (non-essential)</td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                        <div className="bg-gray-50 p-4 rounded-lg">
                                            <p className="font-medium">We do not collect:</p>
                                            <ul className="list-disc list-inside mt-2">
                                                <li>Payment information</li>
                                                <li>User registration data</li>
                                                <li>Sensitive personal data</li>
                                            </ul>
                                        </div>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Data Sharing & Transfers</h2>
                                        <p>Data may be disclosed to:</p>
                                        <ul className="list-disc list-inside ml-4">
                                            <li><strong>Hosting providers</strong> (Switzerland/EEA-based)</li>
                                            <li><strong>Analytics services</strong> (e.g., Google Analytics with IP anonymization)</li>
                                            <li><strong>Legal authorities</strong> if required by Swiss/EU/UK law</li>
                                        </ul>
                                        <p className="italic">No international transfers outside Switzerland/EEA/UK occur routinely.</p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. User Rights</h2>
                                        <p>Under applicable laws (GDPR/UK GDPR/Swiss FADP), you may:</p>
                                        <ul className="list-disc list-inside ml-4">
                                            <li>Request access to your data</li>
                                            <li>Correct inaccuracies</li>
                                            <li>Withdraw consent (for contact form submissions)</li>
                                            <li>Object to processing</li>
                                        </ul>
                                        <p><strong>To exercise rights:</strong> Use the [contact form] on our website. Responses within <strong>30 days</strong>.</p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies Policy</h2>
                                        <p>We use:</p>
                                        
                                        <div className="ml-4 space-y-3">
                                            <div>
                                                <p><strong>Essential cookies</strong> (exempt from consent):</p>
                                                <ul className="list-disc list-inside ml-4">
                                                    <li>Session maintenance</li>
                                                    <li>Security features (e.g., CSRF tokens)</li>
                                                </ul>
                                            </div>
                                            
                                            <div>
                                                <p><strong>Optional cookies</strong> (require consent):</p>
                                                <ul className="list-disc list-inside ml-4">
                                                    <li>Analytics (anonymized)</li>
                                                    <li>Embedded content cookies (e.g., YouTube/Vimeo)</li>
                                                </ul>
                                            </div>
                                        </div>

                                        <p>Manage preferences via:</p>
                                        <ul className="list-disc list-inside ml-4">
                                            <li>Browser settings</li>
                                            <li>Our cookie banner</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Data Retention</h2>
                                        <ul className="list-disc list-inside ml-4">
                                            <li><strong>Contact form submissions:</strong> 24 months after last interaction</li>
                                            <li><strong>Server logs:</strong> 12 months (anonymized thereafter)</li>
                                            <li><strong>Analytics data:</strong> 14 months (Google Analytics default)</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Security Measures</h2>
                                        <p>Given our cybersecurity focus, we implement:</p>
                                        <ul className="list-disc list-inside ml-4">
                                            <li>TLS 1.3 encryption</li>
                                            <li>Regular vulnerability scanning</li>
                                            <li>Minimal data collection principle</li>
                                        </ul>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Policy Updates</h2>
                                        <p>Changes will be posted here with updated "Last Revised" dates. Material changes may trigger banner notifications.</p>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Contact</h2>
                                        <div className="bg-orange-50 p-6 rounded-lg">
                                            <p>For privacy inquiries:</p>
                                            <p><strong>Use the contact form on our website</strong></p>
                                            <p className="italic">We do not maintain a physical office for correspondence.</p>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}
