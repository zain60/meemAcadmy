import Data from "../../Data/Data.json";

const Footer = () => {
  const { Social_Links, footerLinks } = Data; // Destructure the data from the imported JSON object

  return (
    <footer className=" bg-YellowBlack">
      <div className=" w-screen mx-auto max-w-screen-xl px-4 pb-6 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <div>
            <div className="flex justify-center text-teal-600 sm:justify-start">
              <img
                src="/Assets/logo.png"
                alt="images"
                height="100"
                width="240"
                className="h-auto max-w-full"
              />
            </div>
            <p className="mt-6 max-w-md text-center leading-relaxed text-gray-500 sm:max-w-xs sm:text-left">
              Follow us on Social Media
            </p>

            <ul className=" mt-8 flex justify-center gap-6 sm:justify-start md:gap-8">
              {Social_Links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.url}
                    rel="noreferrer"
                    target="_blank"
                    className="text-teal-700 transition hover:text-teal-700/75"
                  >
                    <span className="sr-only">{link.icon}</span>
                    <svg
                      className="h-6 w-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d={link.svgPath} />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 lg:col-span-2">
            {footerLinks.map((section) => (
              <div key={section.id} className="text-center sm:text-left">
                <p className="text-lg font-medium text-gray-900">
                  {section.title}
                </p>
                <ul className="mt-8 space-y-4 text-sm">
                  {section.links.map((link) => (
                    <li key={link.id}>
                      <a
                        className="text-gray-700 transition hover:text-gray-700/75"
                        href={link.url}
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 border-t border-gray-100 pt-6">
          <div className="text-center sm:flex sm:justify-between sm:text-left">
            <p className="text-sm text-gray-500">
              <span className="block sm:inline">All rights reserved.</span>

              <a
                className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                href="/"
              >
                Terms & Conditions
              </a>

              <span>&middot;</span>

              <a
                className="inline-block text-teal-600 underline transition hover:text-teal-600/75"
                href="/"
              >
                Privacy Policy
              </a>
            </p>

            <p className="mt-4 text-sm text-gray-500 sm:order-first sm:mt-0">
              &copy; 2024 code Axis
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
