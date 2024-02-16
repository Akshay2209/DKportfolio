'use client';
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";
import React,{createContext} from "react";
import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkExperience from "@/components/WorkExperience"
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import Link from "next/link";
import App from 'next/app';
import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { PageInfo, Experience, Project, Skill, Social, Technology } from "@/typings";
import { fetchPageInfo } from "@/Utils/fetchPageInfo";
import { fetchExperiences } from "@/Utils/fetchExperiences";
import { fetchSkills } from "@/Utils/fetchSkills";
import { fetchProjects } from "@/Utils/fetchProjects";
import { fetchSocials } from "@/Utils/fetchSocials";
import { useEffect, useState } from "react";
import { AppProps } from 'next/app';
import { NextPageContext } from 'next'


// type Props = {
//   pageInfo : PageInfo;
//   experiences: Experience[];
//   skills : Skill[];
//   socials: Social[];
//   projects: Project[];
// };

export default async function Home ({}){
  const pageInfo: PageInfo = await fetchPageInfo();
  
  const experiences: Experience[] = await fetchExperiences();
  
  const skills: Skill[] = await fetchSkills();

  const projects: Project[] = await fetchProjects();

  const socials: Social[] = await fetchSocials(); 

  return (

    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <title>Dhaneshwar&apos;s Portfolio</title>
      </Head>

      <Header socials ={socials}/>

      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className="snap-center">
        <About pageInfo={pageInfo}/>
      </section>

      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences}/>
      </section>

      <section id="skills" className="snap-start">
        <Skills skills={skills}/>
      </section>

      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      <section id='contact' className="snap-start">
        <ContactMe />
      </section>

      <Link href='#hero'>
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <img
              className="h-10 w-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src='/self_picture.jpg' alt="" />
          </div>
        </footer>
      </Link>
    </div>

  );
};



// export const getStaticProps: GetStaticProps<Props> = async() => {

//   const pageInfo: PageInfo = await fetchPageInfo();
//   const experiences: Experience[] = await fetchExperiences();
//   const skills: Skill[] = await fetchSkills();
//   const socials: Social[] = await fetchSocials();
//   const projects:Project[] = await fetchProjects();


//   return {
//     props: {
//       pageInfo,
//       experiences,
//       skills,
//       socials,
//       projects
//     },
//   };
// };

// Home.getInitialProps = async() => {

//   let props = {};
//   const pageInfo: PageInfo = await fetchPageInfo();
//   const experiences: Experience[] = await fetchExperiences();
//   const skills: Skill[] = await fetchSkills();
//   const socials: Social[] = await fetchSocials();


//   return {
//     props:
//       pageInfo,
//       experiences,
//       skills,
//       socials,
//     }
//   };

// async function getGet(){
//   try{
//     const res = Home.getInitialProps().then(function (res){
//       console.log('checing the props' , res?.props.socials);
//     });
//     console.log(res);
//   }
//   catch(error){
//     console.log('something new ' , error);
//   }
// }
// getGet();

// export const getServerSideProps: GetServerSideProps<Props> = async () => {



//   try {
//     const pageInfo: PageInfo = await fetchPageInfo();
//     const experiences: Experience[] = await fetchExperiences();
//     const skills: Skill[] = await fetchSkills();
//     const socials: Social[] = await fetchSocials();
//     console.log('suceessfull');
//     return {
//       props: {
//         pageInfo,
//         experiences,
//         skills,
//         socials,

//       },
//       revalidate: 100,

//     }

//   }
//   catch (error) {
//     console.log('error happened in the new city ', error);
//     return {
//       props: {
//         pageInfo: null,
//         experiences: [],
//         skills: [],
//         socials: [],
//       },
//       revalidate: 60,
//     };
//   }

// }






