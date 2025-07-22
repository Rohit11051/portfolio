import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import { FaBrain, FaBookOpen, FaShieldAlt, FaUserAstronaut } from "react-icons/fa";

const AboutMeFullPage = () => {
    useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-black text-black dark:text-white font-mono">
      <main className="flex-grow max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-5xl font-orbitron font-bold mb-8 text-center text-pink-500 dark:text-purple-400">
          <FaBrain className="inline-block mr-2" /> My Story
        </h1>

        <section className="space-y-6 text-base leading-relaxed tracking-normal">

          {/* Section 1 */}
          <h2 className="text-xl font-semibold text-pink-500 dark:text-purple-400 flex items-center gap-2 mt-12">
            <FaBrain /> How I got into Computer Science
          </h2>
          <p>
            Born in the chaos capital of India—Mumbai—my tech origin story didn’t start in a garage like Steve Jobs. It started when my dad randomly brought home a computer. No deep reason. No destined prophecy. Just “Yeh ghar mein lagwa do” energy.
          </p>
          <p>
            What started as a tool quickly became a portal. And no—I didn’t start coding at age 6. I gamed. A lot. Counter-Strike, NFS, GTA, Roadrash… that computer was my second home. Ironically, it also taught me early on that pressing random keys can break things. A valuable lesson.
          </p>
          <p>
            But by 8th grade, I wasn’t just crashing systems—I was trying to understand how they get hacked. I was hooked on cybersecurity videos, malware breakdowns, keyloggers, you name it. While others were into cheat codes, I was into exploits. My curiosity turned into obsession.
          </p>

          <hr className="border-t border-gray-300 dark:border-gray-600" />

          {/* Section 2 */}
          <h2 className="text-xl font-semibold text-pink-500 dark:text-purple-400 flex items-center gap-2 mt-12">
            <FaBookOpen /> The Academic Arc
          </h2>
          <p>
            Post high school, I chose Computer Science for 11th and 12th—not because I had some ten-year plan, but because it made sense. Then came 2020—when humanity crashed. While the world was busy making Dalgona coffee, I landed an internship at Target Publications as a Digital Marketing Intern.
          </p>
          <p>
            Now? marketing for a CS kid? Sounds off, but it was more “tech behind marketing.” I dove into automation, ran email campaigns, managed LinkedIn systems, and streamlined operations. It was like scripting real-life workflows.
          </p>
          <p>
            While wrapping up my B.Sc. in Computer Science, I got another gig—this time remote—with JMJ Global Consulting in Bahrain. The job title was Business Administration & Email Marketing Executive, but what I really did was:
            <ul className="list-disc list-inside mt-2">
              <li>Automate processes</li>
              <li>Analyze data</li>
              <li>Build systems</li>
              <li>Design outreach strategies</li>
              <li>Managed client relations</li>
              <li>And silently laugh at Excel crashes</li>
            </ul>
          </p>
          <p>
            This phase showed me tech wasn’t just about code—it was about solving chaos with logic and tools.
          </p>

          <hr className="border-t border-gray-300 dark:border-gray-600" />

          {/* Section 3 */}
          <h2 className="text-xl font-semibold text-pink-500 dark:text-purple-400 flex items-center gap-2 mt-12">
            <FaShieldAlt /> Enter: Cybersecurity (Again)
          </h2>
          <p>
            Even during these internships, my mind kept going back to security—exploits, tools, threat modeling, and ethical hacking. I’d already studied for CEH before moving to the U.S. because I knew deep down—this wasn’t a side quest. This was the main mission.
          </p>
          <p>
            I earned my CEH certification in January, and now I’m grinding through the Google Cybersecurity Certificate while pursuing my Master’s in Computer Science at Texas Tech University.
          </p>
          <p>
            Yeah, breaking into cybersecurity in the U.S. as an international student is like trying to crack a root password with only three guesses. Most roles are locked behind a “U.S. Citizens Only” wall. But I’ve never played the game on easy mode anyway.
          </p>
          <p>
            I come with a hybrid toolkit—part dev, part systems, part automation, part creative chaos. My path doesn’t fit a template—and that’s exactly the point.
          </p>

          <hr className="border-t border-gray-300 dark:border-gray-600" />

          {/* Section 4 */}
          <h2 className="text-xl font-semibold text-pink-500 dark:text-purple-400 flex items-center gap-2 mt-12">
            <FaUserAstronaut /> Life Outside the Terminal
          </h2>
          <p>
            Yes, I have one. And no, it doesn’t involve sipping Red Bull while typing <code>sudo rm -rf /</code>.
          </p>
          <ul className="list-disc list-inside mt-2">
            <li>I make funny, chaotic video edits for Instagram—just for vibes, no clout-chasing.</li>
            <li>My music taste? A global mess: synthwave, rap, anime OSTs, Marathi bangers, metal, lo-fi—if it slaps, it stays.</li>
            <li>I skateboard (badly), design random things, and love anything that lets me flex creativity.</li>
            <li>I’m obsessed with Initial D, Tokyo Drift vibes, motorcycles and anything with an engine loud enough to wake up the neighborhood.</li>
            <li>I romanticize space, stars, galaxies, and existential crises like it’s a second job.</li>
            <li>And yes—soon this page will be full of random photos of me doing dumb things… because balance.</li>
          </ul>
        </section>

        {/* Back Button */}
        <div className="mt-12 text-center">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="inline-block mt-4 px-6 py-2 text-sm font-semibold border border-pink-500 dark:border-purple-400 text-pink-500 dark:text-purple-400 rounded hover:bg-pink-500 dark:hover:bg-purple-400 hover:text-white dark:hover:text-black transition"
          >
            ← Back to Home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutMeFullPage;