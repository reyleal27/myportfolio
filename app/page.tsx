'use client'
import Contact from "@/components/main/Contact";
import Hero from "@/components/main/Hero";
import Projects from "@/components/main/Projects";
import Skills from "@/components/main/Skills";
import Footer from "@/components/main/Footer";

import Projectsv2 from "@/components/v2-components/Projects-v2";
import AboutV2 from "@/components/v2-components/About";
import NavbarV2 from "@/components/v2-components/Navbar-v2";
import Navbar from "@/components/main/Navbar";
import { useLayoutContext } from "@/components/context/LayoutContex";
import Background from "@/components/main/Background";
import { useRouter } from "next/navigation";
import { useEffect } from "react";


export default function Home() {
  
  const { version } = useLayoutContext();
const router = useRouter();

  // useEffect to handle version redirection
  useEffect(() => {
    if (version === "v2") {
      // Redirect to the home page when version is 'v2'
      router.push("/"); // Redirects to the main page ("/")
    }
  }, [version, router]); // Runs when `version` changes

  const renderVersion = () => {
    switch (version) {
      case "v1":
        return (
          <>
            <Background/>
          <Navbar />
            <Hero />
            <Skills />
            <Projects/>
          </>
        )
      case "v2":
        return (
          <>
            <NavbarV2 />
             <AboutV2/>
            <Skills />
             <Projectsv2/>
          </>
        )
        default:
      return <Navbar/> 
    }
  }

  return (
    
    <main className="h-full w-full">
      <div className="flex flex-col gap-12 pt-20">
        {renderVersion()}
        <Contact />
        <Footer/>
      </div>
    </main>
  );
}
