import Certificates from "@/components/Certificates/Certificates";
import Hero from "@/components/Hero";
import Subscriptions from "@/components/Subscriptions/Subscriptions";
import Ibm from "@/components/Ibm";
import Emergency from "@/components/Emergency";
import MonitoringProtection from "@/components/WhatWeDo/MonitoringProtection";
import VerificationAudits from "@/components/WhatWeDo/VerificationAudits";
import Education from "@/components/WhatWeDo/Education";
import RoadMap from "@/components/RoadMap";
import CaseStadies from "@/components/CaseStadies/CaseStadies";
import Meeting from "@/components/Meeting";

export default function Home() {

    return (
        <main>
            <Hero/>
            <Subscriptions/>
            <Certificates/>
            <Ibm/>
            <Emergency/>
            <MonitoringProtection/>
            <VerificationAudits/>
            <Education/>
            <RoadMap/>
            <CaseStadies/>

        </main>
    );
}
