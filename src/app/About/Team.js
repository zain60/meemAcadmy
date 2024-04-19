import React from "react";
import pageData from "../../Data/AboutUs.json";

function Team() {
  const { teamMembersSpecial } = pageData;

  return (
    <div>
      <div className="container flex justify-center mx-auto pt-16">
        <div>
          <h1 className="xl:text-4xl text-3xl text-center text-gray-800 font-extrabold pb-6 sm:w-4/6 w-5/6 mx-auto">
            The Talented People Behind the Scenes of the Organization
          </h1>
        </div>
      </div>
      <div className="w-full bg-gray-100 px-10 pt-10">
        <div className="container mx-auto">
          <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
            {teamMembersSpecial.map((member) => (
              <div
                key={member.id}
                className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5"
              >
                <div className="rounded overflow-hidden shadow-md bg-white">
                  <div className="absolute -mt-20 w-full flex justify-center">
                    <div className="h-32 w-32">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="rounded-full object-cover h-full w-full shadow-md"
                      />
                    </div>
                  </div>
                  <div className="px-6 mt-16">
                    <div className="font-bold text-3xl text-center pb-1">
                      {member.name}
                    </div>
                    <p className="text-gray-800 text-sm text-center">
                      {member.role}
                    </p>
                    <p className="text-center text-gray-600 text-base pt-3 font-normal">
                      {member.description}
                    </p>
                    <div className="w-full flex justify-center pt-5 pb-5">
                      <a href={member.social.github} className="mx-5">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-github"
                          >
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0 1.5 3.62c0 5.46 3.3 6.66 6.44 7a3.43 3.43 0 0 0 1 .22 2.45 2.45 0 0 0 .65-.09M7.2 14.76a3.3 3.3 0 0 1 .28-2.2c0-.5.21-1 .47-1.38a2.92 2.92 0 0 1 2.16-1 11.78 11.78 0 0 1 3.56.42c.26.1.54.23.81.38a4.61 4.61 0 0 0 2.57.1c.32-.1.66-.22 1.01-.38a8.43 8.43 0 0 1 2.33-.28 2.77 2.77 0 0 1 2.25 1.35 3.2 3.2 0 0 1 .18 2.22 11.55 11.55 0 0 1-5.11 5.2c-1.5.9-3.2 1.5-5 1.69a8.46 8.46 0 0 1-2.56-.1 3.6 3.6 0 0 1-2.4-1.62 3.42 3.42 0 0 1-.3-2.42M9 19V5" />
                          </svg>
                        </div>
                      </a>
                      <a href={member.social.twitter} className="mx-5">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-twitter"
                          >
                            <path d="M23 2v14a3 3 0 0 1-3 3h-1v4H12v-4H9v-3c0-1.5-1-3.5-3-4l-.3-.1A3 3 0 0 1 3 9V8h3a3 3 0 0 1 2.9 2.08A6.4 6.4 0 0 1 9 9v2H5.6a1.6 1.6 0 0 1-1.6-1.6V7a1.6 1.6 0 0 1 1.6-1.6h6.8A3.2 3.2 0 0 1 16 9.4V10c0 2.2 1.8 4 4 4h3a3 3 0 0 0 3-3V5a1 1 0 0 0-1-1" />
                          </svg>
                        </div>
                      </a>
                      <a href={member.social.instagram} className="mx-5">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="#718096"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-instagram"
                          >
                            <rect
                              x="2"
                              y="2"
                              width="20"
                              height="20"
                              rx="5"
                              ry="5"
                            />
                            <path d="M16 11.37A4 4 0 0 1 12 15a4 4 0 0 1-4-3.63 4 4 0 0 1 1-2.74 1 1 0 0 1 1.39-.28 1 1 0 0 1 .28 1.39 2 2 0 0 0 .44 2.21 2 2 0 0 0 2.21.44A4 4 0 0 1 16 12a4 4 0 0 1 0 8 1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6.37" />
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
