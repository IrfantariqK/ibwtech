// /pages/index.js
import Head from "next/head"; // Import Head component
import Header from "@/components/Header";
import Carousel from "@/components/Carousel";
import Services from "@/components/Services";
import About from "@/components/About";
import Team from "@/components/Team";
import Careers from "@/components/Careers";
import Contact from "@/components/Contact";
import JobDialog from "@/components/JobDialog";
import { useState } from "react";

export default function Home() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  const openApplyDialog = (job) => {
    setSelectedJob(job);
    setIsDialogOpen(true);
  };

  const closeDialog = () => {
    setIsDialogOpen(false);
    setSelectedJob(null);
  };

  return (
    <>
      <Head>
        <title>IBWTECH</title> {/* Set the title here */}
        <meta name="description" content="International Business Work" />{" "}
        {/* Optional: Add a description */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1"
        />{" "}
        {/* Responsive meta tag */}
        {/* Add any additional meta tags or links here */}
      </Head>
      <Header />
      <main className="pt-10">
        <Carousel />
        <Services />
        <About />
        <Team />
        <Careers openApplyDialog={openApplyDialog} />
        <Contact />
      </main>
      <JobDialog
        isOpen={isDialogOpen}
        onClose={closeDialog}
        job={selectedJob}
      />
    </>
  );
}
