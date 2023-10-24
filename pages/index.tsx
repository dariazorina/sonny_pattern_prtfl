import { GetStaticProps } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkExperience from '@/components/WorkExperience';
import Skill from '@/components/Skills';
import ContactMe from '@/components/ContactMe';
import Link from 'next/link';
import { Experience, PageInfo, Skills, Social } from "../typings";
import { fetchPageInfo } from '@/utils/fetchPageInfo';
import { fetchSkills } from '@/utils/fetchSkills';
import { fetchExperience } from '@/utils/fetchExperience';
import { fetchSocial } from '@/utils/fetchSocial';


const inter = Inter({ subsets: ['latin'] });

type Props = {
  pageInfo: PageInfo;
  experience: Experience[];
  skills: Skills[];
  socials: Social[];
}

const Home = ({ pageInfo, experience, skills, socials }: Props) => {
  console.log("Home anfange1n", { socials });

  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Header socials={socials} />

      <section id="hero" className='snap-start'>
        <Hero pageInfo={pageInfo}/>
      </section>

      <section id="about" className='snap-center'>
        <About />
      </section>

      <section id="experience" className='snap-center'>
        <WorkExperience experience={experience} />
        {/* <WorkExperience /> */}
      </section>

      <section id="skills" className='snap-center'>
        {/* <Skills /> */}
      </section>

      {/* projects? */}

      <section id="contact" className='snap-center'>
        <ContactMe />
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img
              className='h-10 w-10 rounded-full filtergrayscale hover:grayscale-0 cursor-pointer'
              src='https://e7.pngegg.com/pngimages/793/545/png-clipart-javascript-logo-computer-icons-vue-js-angle-text-thumbnail.png'
              alt=''
            />
          </div>
        </footer>
      </Link>
    </div>
  )
}
export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {

// console.log("Error fetching data:");
// console.log("===== GETSTATICPROPS IS RUNNING =====");

  const pageInfo: PageInfo = await fetchPageInfo();
  const experience: Experience[] = await fetchExperience();
  const skills: Skills[] = await fetchSkills();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experience,
      skills,
      socials
    },
    revalidate: 10,
  }
}
