import { FaServer, FaCode, FaUserTie } from "react-icons/fa";

const infoData = [
  {
    icon: <FaServer />,
    title: "No Hosting",
    description:
      "We handle all infrastructure, servers, and deployments for you. Just build and publish your app without worrying about hosting setup or maintenance.",
  },
  {
    icon: <FaCode />,
    title: "No Coding",
    description:
      "Create fully functional native apps without writing a single line of code. Everything is handled through our easy-to-use dashboard.",
  },
  {
    icon: <FaUserTie />,
    title: "No Developer",
    description:
      "You don’t need to hire developers. Launch and manage your app independently using our automation tools and AI assistance.",
  },
];

const InfoSection = () => {
  return (
    <section
      id="info"
      className="py-28 bg-white dark:bg-gray-950 transition-colors duration-300"
    >
      <div className="max-w-[1000px] mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Everything Made Simple
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Build and launch your mobile app without technical headaches.
          </p>
        </div>

        {/* Cards */}
        <div className="flex flex-col md:flex-row justify-center items-stretch gap-8">

          {infoData.map((item, index) => (
            <div
              key={index}
              className="
                flex-1
                max-w-[280px]
                min-h-[400px]
                bg-gray-50 dark:bg-gray-900
                border dark:border-gray-800
                rounded-2xl
                p-8
                text-center
                shadow-sm
                hover:shadow-xl
                hover:-translate-y-2
                transition-all duration-300
              "
            >
              {/* Icon */}
              <div className="w-14 h-14 mx-auto mb-6 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 text-xl">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default InfoSection;
