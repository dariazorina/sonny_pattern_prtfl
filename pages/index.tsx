import { Inter } from 'next/font/google'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import ContactMe from '@/components/ContactMe'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
      <Header />

      <section id="hero" className='snap-start'>
        <Hero />
      </section>

      <section id="about" className='snap-center'>
        <About />
      </section>

      <section id="experience" className='snap-center'>
        <Experience />
      </section>

      <section id="skills" className='snap-center'>
        <Skills />
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
