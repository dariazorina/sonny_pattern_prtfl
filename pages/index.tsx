import { GetServerSideProps, GetStaticProps } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import WorkExperience from '@/components/WorkExperience';
import EducationList from '@/components/EducationList';
import Skills from '@/components/Skills';
import ContactMe from '@/components/ContactMe';
import Link from 'next/link';
import { Experience, PageInfo, Skill, Social, Education } from "../typings";
import { fetchPageInfo } from '@/utils/fetchPageInfo';
import { fetchSkills } from '@/utils/fetchSkills';
import { fetchExperience } from '@/utils/fetchExperience';
import { fetchEducation } from '@/utils/fetchEducation';
import { fetchSocial } from '@/utils/fetchSocial';
import { urlFor } from '@/sanity';
import Image from 'next/image'


const inter = Inter({ subsets: ['latin'] });

type Props = {
  pageInfo: PageInfo;
  experience: Experience[];
  skills: Skill[];
  socials: Social[];
  education: Education[];
}

const Home = ({ pageInfo, experience, skills, socials, education }: Props) => {
  console.log("Home", { experience });

  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#703333]/80'>
      <Header socials={socials} />

      <section id="hero" className='snap-start'>
        <Hero pageInfo={pageInfo} />
      </section>

      <section id="about" className='snap-center'>
        <About pageInfo={pageInfo} />
      </section>

      <section id="experience" className='snap-center'>
        <WorkExperience experience={experience} />
      </section>

      <section id="skills" className='snap-start'>
        <Skills skills={skills} />
      </section>

      <section id="education" className='snap-center'>
        <EducationList education={education} />
      </section>

      <section id="contact" className='snap-center'>
        <ContactMe pageInfo={pageInfo} />
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <Image
              key={pageInfo._id}
              className='h-10 w-10 rounded-full filtergrayscale hover:grayscale-0 cursor-pointer'
              // src='https://e7.pngegg.com/pngimages/793/545/png-clipart-javascript-logo-computer-icons-vue-js-angle-text-thumbnail.png'
              src={urlFor(pageInfo?.heroImage).url()}
              width={100}
              height={100}
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

  const pageInfo: PageInfo = await fetchPageInfo();
  const experience: Experience[] = await fetchExperience();
  const skills: Skill[] = await fetchSkills();
  const socials: Social[] = await fetchSocial();
  const education: Education[] = await fetchEducation();

  return {
    props: {
      pageInfo,
      experience,
      skills,
      socials,
      education
    },
    revalidate: 10,
  }
}

// export const getServerSideProps: GetServerSideProps<PageProps> = async (ctx) => {
//   const props = await getPropsFromAService()

//   return { props: JSON.parse(JSON.stringify(props)) }
// }
