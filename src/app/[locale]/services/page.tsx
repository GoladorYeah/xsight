import Image from "next/image";
import {Link} from "@/navigation";

export default function ServicesPage() {


    return (
        <main>
            <section className="bg-white card-service">
                <div className="px-4 py-12 md:py-20 relative">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col text-center mb-4">
                            <h6 className="text-lg font-normal text-orange-500 tracking-widest">
                                OUR SERVICES
                            </h6>
                            <h2 className="text-3xl sm:text-4xl lg:w-3/4 mx-auto  font-bold">
                                Cyber Security Solutions
                            </h2>
                        </div>
                        <div
                            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 content-center text-center gap-8 py-8">
                            <div
                                className="group border-2 border-orange-500 md:border-transparent  hover:border-orange-500 w-full relative rounded-md">
                                <div
                                    className="bg-gray-100 flex flex-col justify-between h-full rounded-md px-8 py-14 relative mb-2">
                                    <img
                                        src="/curator/media/2083ca3a-d52f-4d18-b455-7d6ac699fc9c.png?s=fd590c49428fc92a1a15e930f4a6db8d"
                                        alt="" width="170" height="158"
                                        className="object-contain mx-auto"/>
                                    <h5 className="mb-1 text-xl font-bold text-gray-900">
                                        CYBERSECURITY AUDITS
                                    </h5>
                                    <div className="flex justify-center mt-4 space-x-3 md:mt-6">
                                        <Link href={"#cyberSecurityAudits"}
                                              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-black border border-gray-300 rounded-lg hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-gray-200">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="group border-2 border-orange-500 md:border-transparent  hover:border-orange-500 w-full relative rounded-md">
                                <div
                                    className="bg-gray-100 flex flex-col justify-between h-full rounded-md px-8 py-14 relative mb-2">
                                    <img
                                        src="/curator/media/6cfcea5e-50f3-4168-9bfb-86a21b8d675b.png?s=c8f5029b95cdd92a171745dba0fd79d6"
                                        alt="" width="170" height="158"
                                        className="object-contain mx-auto"/>
                                    <h5 className="mb-1 text-xl font-bold text-gray-900">
                                        VULNERABILITY SCANNING SERVICE
                                    </h5>

                                    <div className="flex justify-center mt-4 space-x-3 md:mt-6">
                                        <Link href={"#vulnerabilityScanning"}
                                              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-black border border-gray-300 rounded-lg hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-gray-200">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="group border-2 border-orange-500 md:border-transparent  hover:border-orange-500 w-full relative rounded-md">
                                <div
                                    className="bg-gray-100 flex flex-col justify-between h-full rounded-md px-8 py-14 relative mb-2">
                                    <img
                                        src="/curator/media/9bc958a1-1a34-491f-af56-de7d10cdf117.png?s=11b2c75945ad6b979ac8f2f1a46b309c"
                                        alt="" width="170" height="158"
                                        className="object-contain mx-auto"/>
                                    <h5 className="mb-1 text-xl font-bold text-gray-900">
                                        PENETRATION TESTING SERVICES
                                    </h5>
                                    <div className="flex justify-center mt-4 space-x-3 md:mt-6">
                                        <Link href={"#penetrationTesting"}
                                              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-black border border-gray-300 rounded-lg hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-gray-200">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="group border-2 border-orange-500 md:border-transparent  hover:border-orange-500 w-full relative rounded-md">
                                <div
                                    className="bg-gray-100 flex flex-col justify-between h-full rounded-md px-8 py-14 relative mb-2">
                                    <img
                                        src="/curator/media/792f0838-b612-4480-bf65-98068daac285.png?s=f77a6d86c11adc253d8309b5bacc0cde"
                                        alt="" width="155" height="155"
                                        className="object-contain mx-auto"/>
                                    <h5 className="mb-1 text-xl font-bold text-gray-900">
                                        RED TEAMING SERVICES
                                    </h5>
                                    <div className="flex justify-center mt-4 space-x-3 md:mt-6">
                                        <Link href={"#redTeaming"}
                                              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-black border border-gray-300 rounded-lg hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-gray-200">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="group border-2 border-orange-500 md:border-transparent  hover:border-orange-500 w-full relative rounded-md">
                                <div
                                    className="bg-gray-100 flex flex-col justify-between h-full rounded-md px-8 py-14 relative mb-2">
                                    <img
                                        src="/curator/media/9241ce4c-91b3-4dbe-a466-7339a4aebc0c.png?s=0ed1a1d5f744a53d0d121377b44ede15"
                                        alt="" width="170" height="158"
                                        className="object-contain mx-auto"/>
                                    <h5 className="mb-1 text-xl font-bold text-gray-900">
                                        COMPLIANCE &amp; CERTIFICATION SUPPORT
                                    </h5>

                                    <div className="flex justify-center mt-4 space-x-3 md:mt-6">
                                        <Link href={"#certificationSupport"}
                                              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-black border border-gray-300 rounded-lg hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-gray-200">
                                            Read More
                                        </Link>
                                    </div>

                                </div>
                            </div>
                            <div
                                className="group border-2 border-orange-500 md:border-transparent  hover:border-orange-500 w-full relative rounded-md">
                                <div
                                    className="bg-gray-100 flex flex-col justify-between h-full rounded-md px-8 py-14 relative mb-2">
                                    <img
                                        src="/curator/media/b0ec354c-3d86-46b0-bd0f-65f7e9b11197.png?s=1adcdeac900106846ac5b9f0399f1fb7"
                                        alt="" width="170" height="158"
                                        className="object-contain mx-auto"/>
                                    <h5 className="mb-1 text-xl font-bold text-gray-900">

                                        SECURITY TRAININGS
                                    </h5>

                                    <div className="flex justify-center mt-4 space-x-3 md:mt-6">
                                        <Link href={"#securityTraining"}
                                              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-black border border-gray-300 rounded-lg hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-gray-200">
                                            Read More</Link>
                                    </div>

                                </div>
                            </div>
                            <div
                                className="group border-2 border-orange-500 md:border-transparent  hover:border-orange-500 w-full relative rounded-md">
                                <div
                                    className="bg-gray-100 flex flex-col justify-between h-full rounded-md px-8 py-14 relative mb-2">
                                    <img
                                        src="/curator/media/dcc28fd2-368a-4f43-8393-3a26c80d96f6.png?s=3dda05fce83aba82a19b9ce02453056d"
                                        alt="" width="155" height="155"
                                        className="object-contain mx-auto"/>
                                    <h5 className="mb-1 text-xl font-bold text-gray-900">

                                        SOC, SECURITY OPERATIONS CENTER
                                    </h5>

                                    <div className="flex justify-center mt-4 space-x-3 md:mt-6">
                                        <Link href={"#securityOperationsCenter"}
                                              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-black border border-gray-300 rounded-lg hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-gray-200">
                                            Read More</Link>
                                    </div>

                                </div>
                            </div>
                            <div
                                className="group border-2 border-orange-500 md:border-transparent  hover:border-orange-500 w-full relative rounded-md">
                                <div
                                    className="bg-gray-100 flex flex-col justify-between h-full rounded-md px-8 py-14 relative mb-2">
                                    <img
                                        src="/curator/media/a718ad2d-9163-480a-b45c-80be57456e4a.png?s=3ddb51d941913e3ac2bf92293eadd3f3"
                                        alt="" width="170" height="158"
                                        className="object-contain mx-auto"/>
                                    <h5 className="mb-1 text-xl font-bold text-gray-900">
                                        INCIDENT RESPONSE &amp; RECOVERY
                                    </h5>
                                    <div className="flex justify-center mt-4 space-x-3 md:mt-6">
                                        <Link href={"#incidentResponse"}
                                              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-black border border-gray-300 rounded-lg hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-gray-200">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div
                                className="group border-2 border-orange-500 md:border-transparent  hover:border-orange-500 w-full relative rounded-md">
                                <div
                                    className="bg-gray-100 flex flex-col justify-between h-full rounded-md px-8 py-14 relative mb-2">
                                    <img
                                        src="/curator/media/48e20db1-9210-4978-b6c5-05bd19aeb801.png?s=414f20382ba5561e27877e698ba3b9bd"
                                        alt="" width="170" height="158"
                                        className="object-contain mx-auto"/>
                                    <h5 className="mb-1 text-xl font-bold text-gray-900">
                                        AD HOC EMERGIENCES
                                    </h5>
                                    <div className="flex justify-center mt-4 space-x-3 md:mt-6">
                                        <Link href={"#adHock"}
                                              className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-black border border-gray-300 rounded-lg hover:bg-white hover:text-black focus:ring-4 focus:outline-none focus:ring-gray-200">
                                            Read More
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden service ibm bg-gray-100 " id="cyberSecurityAudits">
                <figure className="absolute -left-[41%] -top-96 opacity-40">
                    <Image className="star" src="/background.png" alt="Background" width={1689} height={1262}
                           priority={true}/>
                </figure>
                <div className="px-4 py-12 md:py-32 relative">
                    <div className="max-w-7xl mx-auto">
                        <div className="flex flex-col mb-4 ">
                            <h6 className="text-lg font-normal text-orange-500 tracking-widest">SERVICE</h6>
                            <h2 className="text-3xl sm:text-4xl mb-2 font-bold">

                                CYBERSECURITY AUDITS
                            </h2>
                            <p className="mb-6 text-md font-normal text-gray-500 lg:text-xl">

                                If your company works with any sensitive data, stores, processes, or transmits it,
                                Cybersecurity audits are essential, and this is an ideal starting point to help you to
                                prioritize the company&apos;s risks, define a cybersecurity roadmap, improve your
                                protection
                                strategy, save on costs and be ahead of competitors...
                            </p>
                        </div>
                        <div className="flex flex-col-reverse md:flex-row items-center ">
                            <div className="basis-2/3">
                                <div className="group flex flex-row space-x-2 ">
                                    <svg
                                        className="h-6 w-6 arrow-text relative inline group-hover:translate-x-1 transition group-hover:fill-orange-500 shrink-0"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        aria-hidden="true">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    <a data-modal-target="cybesecurityScan" data-modal-toggle="cybesecurityScan"
                                       className="mb-2 md:mb-1 text-md md:text-xl font-medium text-gray-900 group-hover:text-orange-500 transition cursor-pointer">

                                        Cybersecurity scan, personalized, free of charge
                                    </a>
                                </div>
                                <div className="group flex flex-row space-x-2 ">
                                    <svg
                                        className="h-6 w-6 arrow-text relative inline group-hover:translate-x-1 transition group-hover:fill-orange-500 shrink-0"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        aria-hidden="true">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    <a data-modal-target="itAudit" data-modal-toggle="itAudit"
                                       className="mb-2 md:mb-1 text-md md:text-xl font-medium text-gray-900 group-hover:text-orange-500 transition cursor-pointer">

                                        IT infrastructure cybersecurity audit
                                    </a>
                                </div>
                                <div className="group flex flex-row space-x-2 ">
                                    <svg
                                        className="h-6 w-6 arrow-text relative inline group-hover:translate-x-1 transition group-hover:fill-orange-500 shrink-0"
                                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                        aria-hidden="true">
                                        <path fillRule="evenodd"
                                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                                              clipRule="evenodd"></path>
                                    </svg>
                                    <a data-modal-target="policiesAudit" data-modal-toggle="policiesAudit"
                                       className="mb-2 md:mb-1 text-md md:text-xl font-medium text-gray-900 group-hover:text-orange-500 transition cursor-pointer">
                                        Audit of cybersecurity policies
                                    </a>
                                </div>
                            </div>
                            <div className="basis-1/3 mb-4 md:mb-0">
                                <img
                                    src="/curator/media/2083ca3a-d52f-4d18-b455-7d6ac699fc9c.png?s=fd590c49428fc92a1a15e930f4a6db8d"
                                    alt="" width="170" height="158"
                                    className="object-contain mx-auto"/>
                            </div>
                        </div>
                        <div className="flex justify-center md:justify-start mt-2 md:mt-2 ">
                            <Link href={"#contactUsForm"}
                                  className="text-white bg-orange-500 hover:bg-orange-600 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-base px-6 py-3.5 text-center">
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
