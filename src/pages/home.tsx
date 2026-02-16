import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HowItWorks from "@/components/sections/HowItWorks";
import images from "@/assets/images/mab_banner.png";
import Features from "@/components/sections/Features";
// import Pricing from "@/components/sections/Pricing";
import Gallery from "@/components/sections/Gallery";

import Testimonials from "@/components/sections/Testimonials";
import TrustedCompanies from "@/components/common/TrustedCompanies";
import CTA from "@/components/sections/CTA";




const Home = () => {
  return (
   <div className="min-h-screen bg-gray-50 pt-19">

      <Navbar />

      <section className="bg-gray-50 dark:bg-gray-950 transition-colors duration-300">
  <div className="max-w-[1200px] mx-auto px-8 lg:px-16 py-28 flex flex-col lg:flex-row items-center justify-between gap-16">

    {/* LEFT CONTENT */}
    <div className="flex-1">

      {/* Tags */}
      <div className="flex gap-3 mb-6 flex-wrap">
        <span className="bg-blue-100 text-blue-600 dark:bg-blue-900/40 dark:text-blue-400 px-4 py-1 rounded-full text-sm font-medium">
          No coding required
        </span>
        <span className="bg-green-100 text-green-600 dark:bg-green-900/40 dark:text-green-400 px-4 py-1 rounded-full text-sm font-medium">
          5-minute setup
        </span>
       
      </div>

      {/* Heading */}
      <h1 className="text-[56px] lg:text-[64px] font-extrabold leading-[1.1] mb-6 text-gray-900 dark:text-white">
        Build Apps & Websites{" "}
        <span className="text-blue-600 dark:text-blue-400">
          in Minutes
        </span>
      </h1>

      {/* Description */}
      <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed max-w-xl mb-10">
        Transform your website into native apps for any platform.
        AI-powered configuration, custom branding, push notifications,
        and automated builds. No coding required.
      </p>

      {/* Buttons */}
      <div className="flex gap-4 mb-12">
        <button className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white px-7 py-3.5 rounded-xl font-medium shadow-lg transition">
          Get started free →
        </button>

        <button className="border border-gray-300 dark:border-gray-700 text-gray-800 dark:text-gray-300 px-7 py-3.5 rounded-xl font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition">
          View pricing
        </button>
      </div>

      {/* Stats */}
      <div className="flex items-center gap-10 flex-wrap text-gray-900 dark:text-white">
        <div>
          <h3 className="text-2xl font-bold">500+</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Developers
          </p>
        </div>

        <div className="h-10 w-px bg-gray-300 dark:bg-gray-700 hidden sm:block"></div>

        <div>
          <h3 className="text-2xl font-bold">1,200+</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Apps Built
          </p>
        </div>

        <div className="h-10 w-px bg-gray-300 dark:bg-gray-700 hidden sm:block"></div>

        <div>
          <h3 className="text-2xl font-bold">3,500+</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Builds Generated
          </p>
        </div>
      </div>

    </div>

    {/* RIGHT IMAGE */}
    <div className="flex-1 flex justify-center lg:justify-end">
      <img
        src={images}
        alt="App Preview"
        className="w-full max-w-[600px] object-contain drop-shadow-2xl dark:drop-shadow-[0_0_40px_rgba(59,130,246,0.3)] transition-all duration-300"
      />
    </div>

  </div>
</section>


<HowItWorks />
<Features />
{/* <Pricing /> */}
<Gallery />
<Testimonials />
<TrustedCompanies />
<CTA />
      <Footer />
    </div>
  );
};

export default Home;
