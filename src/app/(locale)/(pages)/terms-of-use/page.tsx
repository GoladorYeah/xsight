import Background from "@/components/Background";
import {useTranslations} from "next-intl";

export default function Page() {

    const t = useTranslations("Pages.Terms")

    return (
        <>
            <section className="bg-gray-200/75 relative overflow-hidden">
                <Background align={"right"}/>
                <div className="max-w-screen-xl px-3 py-16 md:py-24 mx-auto relative">
                    <div
                        className="flex flex-col justify-center items-center w-full ">
                        <div className="flex flex-col justify-center text-center gap-y-2 mb-4">
                            <h1 className="text-2xl sm:text-4xl font-semibold md:leading-snug">
                                MASTER TERMS OF USE AGREEMENT
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
                                    <p><strong>Effective as of:</strong> 16.06.2025</p>

                                    <section>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4">1. INTERPRETATION AND DEFINITIONS</h2>
                                        <div className="space-y-2">
                                            <p>1.1 <strong>"Agreement"</strong> means these Terms of Use, including all annexures, schedules, and incorporated policies by reference.</p>
                                            <p>1.2 <strong>"Platform"</strong> refers collectively to the digital ecosystem accessible via the xsight.ch and tech.xsight.ch domains, including all subdomains, application programming interfaces (APIs), cloud-based components, and future technological iterations.</p>
                                            <p>1.3 <strong>"Service Operator"</strong> denotes the technical administration framework responsible for Platform functionality, which may involve undisclosed third-party technical service providers.</p>
                                            <p>1.4 <strong>"User"</strong> means any natural or legal person accessing or interacting with the Platform, including through automated means.</p>
                                        </div>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4">2. JURISDICTIONAL SCOPE AND TERRITORIAL RESTRICTIONS</h2>
                                        <div className="space-y-3">
                                            <div>
                                                <p>2.1 The Platform's services are strictly limited to the following <strong>Permitted Jurisdictions</strong>:</p>
                                                <ul className="list-disc list-inside ml-4">
                                                    <li>(a) The Swiss Confederation</li>
                                                    <li>(b) Member states of the European Union and European Economic Area</li>
                                                    <li>(c) The United Kingdom of Great Britain and Northern Ireland</li>
                                                </ul>
                                            </div>
                                            <div>
                                                <p>2.2 <strong>Geographic Access Controls</strong>:</p>
                                                <ul className="list-disc list-inside ml-4">
                                                    <li>(a) The Platform employs technical measures to restrict access from prohibited jurisdictions</li>
                                                    <li>(b) Any circumvention of geographic restrictions constitutes a material breach of this Agreement</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4">3. ABSOLUTE LIMITATION OF LIABILITY AND RISK ALLOCATION</h2>
                                        <div className="space-y-4">
                                            <div>
                                                <p>3.1 <strong>No Representations or Warranties</strong>:</p>
                                                <p>The Platform is provided on an "as-is" and "as-available" basis. The Service Operator expressly disclaims, to the maximum extent permitted by applicable law:</p>
                                                <ul className="list-disc list-inside ml-4">
                                                    <li>(a) All express or implied warranties, including merchantability, fitness for particular purpose, and non-infringement</li>
                                                    <li>(b) Any warranty regarding uninterrupted operation, security, or error-free functionality</li>
                                                    <li>(c) Responsibility for third-party content, services, or integrations</li>
                                                </ul>
                                            </div>

                                            <div>
                                                <p>3.2 <strong>Total Liability Exclusion</strong>:</p>
                                                <p>Notwithstanding anything to the contrary herein:</p>
                                                <div className="ml-4">
                                                    <p>(a) In no event shall the Service Operator, its technical partners, infrastructure providers, or any affiliated entities be liable for:</p>
                                                    <ul className="list-disc list-inside ml-8">
                                                        <li>(i) Any direct, indirect, incidental, special, consequential, or exemplary damages</li>
                                                        <li>(ii) Loss of profits, revenue, data, goodwill, or other intangible losses</li>
                                                        <li>(iii) Damages resulting from unauthorized access, use, or alteration of transmissions or data</li>
                                                    </ul>
                                                    <p>(b) This limitation applies regardless of the legal theory (contract, tort, or otherwise) and even if advised of the possibility of such damages</p>
                                                </div>
                                            </div>

                                            <div>
                                                <p>3.3 <strong>Jurisdictional Carve-Outs</strong>:</p>
                                                <p>Where applicable law prohibits the exclusion of certain liabilities, such exclusions shall apply only to the maximum extent permitted by law.</p>
                                            </div>
                                        </div>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4">4. MULTI-JURISDICTIONAL DISPUTE RESOLUTION FRAMEWORK</h2>
                                        <div className="space-y-4">
                                            <div>
                                                <p>4.1 <strong>Choice of Law</strong>:</p>
                                                <ul className="list-disc list-inside ml-4">
                                                    <li>(a) Swiss Users: Governed by Swiss substantive law, excluding conflict of law provisions</li>
                                                    <li>(b) EU/EEA Users: Governed by the laws of the Republic of Ireland, without regard to its conflict of law provisions</li>
                                                    <li>(c) UK Users: Governed by the laws of England and Wales</li>
                                                </ul>
                                            </div>

                                            <div>
                                                <p>4.2 <strong>Dispute Resolution Protocol</strong>:</p>
                                                <p>All claims shall be resolved through the following escalating mechanism:</p>
                                                <ul className="list-disc list-inside ml-4">
                                                    <li>(a) Mandatory good-faith negotiations for at least 60 calendar days</li>
                                                    <li>(b) Mediation administered by the International Chamber of Commerce (ICC)</li>
                                                    <li>(c) Binding arbitration under the London Court of International Arbitration (LCIA) Rules</li>
                                                </ul>
                                            </div>

                                            <div>
                                                <p>4.3 <strong>Venue and Jurisdiction</strong>:</p>
                                                <ul className="list-disc list-inside ml-4">
                                                    <li>(a) Swiss Users: Exclusive jurisdiction of the courts of Zurich</li>
                                                    <li>(b) EU/EEA Users: Courts of Dublin, Ireland</li>
                                                    <li>(c) UK Users: Exclusive jurisdiction of the Commercial Court in London</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4">5. INTELLECTUAL PROPERTY AND CONFIDENTIALITY PROVISIONS</h2>
                                        <div className="space-y-4">
                                            <div>
                                                <p>5.1 <strong>Proprietary Rights</strong>:</p>
                                                <p>All Platform components, including but not limited to:</p>
                                                <ul className="list-disc list-inside ml-4">
                                                    <li>(a) Source code and object code</li>
                                                    <li>(b) User interface designs and architectures</li>
                                                    <li>(c) Technical documentation and specifications</li>
                                                </ul>
                                                <p>are protected as trade secrets and copyrighted works under applicable intellectual property regimes.</p>
                                            </div>

                                            <div>
                                                <p>5.2 <strong>Restricted Activities</strong>:</p>
                                                <p>Users shall not:</p>
                                                <ul className="list-disc list-inside ml-4">
                                                    <li>(a) Reverse engineer, decompile, or disassemble any Platform components</li>
                                                    <li>(b) Create derivative works based on the Platform</li>
                                                    <li>(c) Remove or obscure proprietary notices</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4">6. GENERAL PROVISIONS</h2>
                                        <div className="space-y-3">
                                            <p>6.1 <strong>Amendments</strong>: The Service Operator reserves the unilateral right to modify these Terms at any time. Continued use after modifications constitutes acceptance.</p>
                                            <p>6.2 <strong>Severability</strong>: If any provision is held invalid or unenforceable, the remaining provisions shall remain in full force and effect.</p>
                                            <p>6.3 <strong>No Waiver</strong>: Failure to enforce any provision shall not constitute a waiver of rights.</p>
                                            <p>6.4 <strong>Assignment</strong>: The Service Operator may assign its rights and obligations under this Agreement without restriction.</p>
                                        </div>
                                    </section>

                                    <section>
                                        <h2 className="text-2xl font-bold text-gray-900 mb-4">CONTACT INFORMATION FOR LEGAL NOTICES</h2>
                                        <div className="bg-orange-50 p-6 rounded-lg">
                                            <p>All formal communications must be directed to:</p>
                                            <p><strong>Use the contact form on our website</strong></p>
                                            <p className="italic">Response times may vary based on operational priorities and legal review requirements.</p>
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
