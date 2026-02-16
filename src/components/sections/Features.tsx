// import {
//   FaMobileAlt,
//   FaCog,
//   FaPalette,
//   FaBell,
//   FaRocket,
//   FaShieldAlt,
//   FaHistory,
//   FaQrcode,
//   FaChartLine,
//   FaMagic,
//   FaCode,
//   FaGlobe,
// } from "react-icons/fa";

// const features = [
//   {
//     icon: <FaMobileAlt />,
//     title: "Multi-Platform Support",
//     desc: "Build native apps for Android, Windows, macOS, and Linux. Generate platform-specific packages ready for distribution on any app store.",
//   },
//   {
//     icon: <FaCog />,
//     title: "Easy Configuration",
//     desc: "Intuitive interface to customize your app design, navigation, colors, icons, splash screens, and more without any coding required.",
//   },
//   {
//     icon: <FaPalette />,
//     title: "Complete Branding Control",
//     desc: "Customize app icons, splash screens, themes, colors, and inject custom HTML, CSS, and JavaScript for full control.",
//   },
//   {
//     icon: <FaBell />,
//     title: "Push Notifications",
//     desc: "Engage users with push notifications. Send targeted messages to your app users directly from your dashboard.",
//   },
//   {
//     icon: <FaRocket />,
//     title: "Automated Build System",
//     desc: "Build your apps with a single click. Our distributed build system generates platform-specific packages automatically.",
//   },
//   {
//     icon: <FaShieldAlt />,
//     title: "Secure App Signing",
//     desc: "Upload and manage signing certificates securely. Sign your release builds with confidence.",
//   },
//   {
//     icon: <FaHistory />,
//     title: "Version Management",
//     desc: "Manage multiple app versions with build history. Track changes and maintain version control effortlessly.",
//   },
//   {
//     icon: <FaQrcode />,
//     title: "QR Code Testing",
//     desc: "Test your apps instantly with QR code downloads. Share builds with testers before publishing.",
//   },
//   {
//     icon: <FaChartLine />,
//     title: "Build Tracking",
//     desc: "Monitor build status in real-time with detailed logs. Track build duration, errors, and downloads.",
//   },
//   {
//     icon: <FaMagic />,
//     title: "AI-Powered Assistant",
//     desc: "Get intelligent help configuring your app. Our AI assistant can automatically set up navigation and colors.",
//   },
//   {
//     icon: <FaCode />,
//     title: "API Access",
//     desc: "Integrate with your workflow using our comprehensive API. Automate app creation and manage notifications programmatically.",
//   },
//   {
//     icon: <FaGlobe />,
//     title: "Hosted Pages",
//     desc: "Embed custom HTML pages directly in your app. Create about pages, FAQs, and more with full design control.",
//   },
// ];

// const Features = () => {
//   return (
//     <section id="features" className="bg-gray-50 py-28">
//       <div className="max-w-[1200px] mx-auto px-8 lg:px-16">

//         {/* Section Header */}
//         <div className="mb-16">
//           <h2 className="text-4xl font-bold mb-4">
//             Everything you need to build amazing apps
//           </h2>
//           <p className="text-gray-600 max-w-2xl text-lg">
//             Powerful features and tools to transform your website into professional native applications without writing a single line of code.
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
//           {features.map((feature, index) => (
//             <div key={index}>

//               {/* Icon */}
//               <div className="w-12 h-12 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-lg mb-4">
//                 {feature.icon}
//               </div>

//               {/* Title */}
//               <h3 className="text-lg font-semibold mb-2">
//                 {feature.title}
//               </h3>

//               {/* Description */}
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {feature.desc}
//               </p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Features;


import {
  FaMobileAlt,
  FaCog,
  FaPalette,
  FaBell,
  FaRocket,
  FaShieldAlt,
  FaHistory,
  FaQrcode,
  FaChartLine,
  FaMagic,
  FaCode,
  FaGlobe,
} from "react-icons/fa";

const features = [
  {
    icon: <FaMobileAlt />,
    title: "Multi-Platform Support",
    desc: "Build native apps for Android, Windows, macOS, and Linux. Generate platform-specific packages ready for distribution on any app store.",
  },
  {
    icon: <FaCog />,
    title: "Easy Configuration",
    desc: "Intuitive interface to customize your app design, navigation, colors, icons, splash screens, and more without any coding required.",
  },
  {
    icon: <FaPalette />,
    title: "Complete Branding Control",
    desc: "Customize app icons, splash screens, themes, colors, and inject custom HTML, CSS, and JavaScript for full control.",
  },
  {
    icon: <FaBell />,
    title: "Push Notifications",
    desc: "Engage users with push notifications. Send targeted messages to your app users directly from your dashboard.",
  },
  {
    icon: <FaRocket />,
    title: "Automated Build System",
    desc: "Build your apps with a single click. Our distributed build system generates platform-specific packages automatically.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure App Signing",
    desc: "Upload and manage signing certificates securely. Sign your release builds with confidence.",
  },
  {
    icon: <FaHistory />,
    title: "Version Management",
    desc: "Manage multiple app versions with build history. Track changes and maintain version control effortlessly.",
  },
  {
    icon: <FaQrcode />,
    title: "QR Code Testing",
    desc: "Test your apps instantly with QR code downloads. Share builds with testers before publishing.",
  },
  {
    icon: <FaChartLine />,
    title: "Build Tracking",
    desc: "Monitor build status in real-time with detailed logs. Track build duration, errors, and downloads.",
  },
  {
    icon: <FaMagic />,
    title: "AI-Powered Assistant",
    desc: "Get intelligent help configuring your app. Our AI assistant can automatically set up navigation and colors.",
  },
  {
    icon: <FaCode />,
    title: "API Access",
    desc: "Integrate with your workflow using our comprehensive API. Automate app creation and manage notifications programmatically.",
  },
  {
    icon: <FaGlobe />,
    title: "Hosted Pages",
    desc: "Embed custom HTML pages directly in your app. Create about pages, FAQs, and more with full design control.",
  },
];

const Features = () => {
  return (
    <section
      id="features"
      className="bg-gray-50 dark:bg-gray-950 py-28 transition-colors duration-300"
    >
      <div className="max-w-[1200px] mx-auto px-8 lg:px-16">

        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Everything you need to build amazing apps
          </h2>

          <p className="text-gray-600 dark:text-gray-400 max-w-2xl text-lg">
            Powerful features and tools to transform your website into professional native applications without writing a single line of code.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div key={index}>

              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 flex items-center justify-center text-lg mb-4 transition-colors duration-300">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Features;
