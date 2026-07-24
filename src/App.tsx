import { Hero } from './components/Hero'
import { Portfolio } from './components/Portfolio'
import { Awards } from './components/Awards'
import { About } from './components/About'
import { Services } from './components/Services'
import { Team } from './components/Team'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { WhatsAppFab } from './components/WhatsAppFab'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="relative" role="main">
        <section id="hero" aria-label="Hero">
          <Hero />
        </section>
        <section id="offering" aria-label="Offering">
          <Portfolio />
        </section>
        <section id="why" aria-label="Why Talent Hub">
          <Awards />
        </section>
        <section id="about" aria-label="About">
          <About />
        </section>
        <section id="services" aria-label="Services">
          <Services />
        </section>
        <section id="how-it-works" aria-label="How it works">
          <Team />
        </section>
        <section id="contact" aria-label="Contact">
          <Contact />
        </section>
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  )
}
