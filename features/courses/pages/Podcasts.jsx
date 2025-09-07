import React from "react";
import SideBar from "../components/SideBar";
import CourseHeader from "../components/CourseHeader";

export default function Podcasts() {
  const basiPodcasts = {
    title: "BASI Podcasts",
    episodes: [
      {
        id: 1,
        title: "Bitcoin Fundamentals - Saturday Discussion",
        description:
          "Deep dive into Bitcoin fundamentals with Samuel Johnson, exploring the core concepts and real-world applications.",
        audioUrl:
          "https://res.cloudinary.com/ddbsmrzsh/video/upload/v1755396161/Bitcoin_-_Saturday_at_4-14_PM_meyolz.mp4",
        duration: "45:30",
        publishDate: "2024-08-17",
      },
    ],
  };

  const pasiPodcasts = {
    title: "PASI Podcasts",
    episodes: [
      {
        id: 1,
        title: "Leading Project - Handling Bad Leads",
        description:
          "Explore handling bad lead techniques and making it better in leading projects with Samuel Johnson, focusing on practical applications and strategies.",
        audioUrl:
          "https://res.cloudinary.com/ddbsmrzsh/video/upload/v1755398397/PASI_-_Dealing_with_Bad_leads_g058ff.mp4",
        duration: "3:15",
        publishDate: "2025-08-17",
      },
      {
        id: 2,
        title: "Managing Performance - Metrics and KPIs",
        description:
          "Explore advanced techniques in managing performance with Samuel Johnson, focusing on practical applications and strategies.",
        audioUrl:
          "https://res.cloudinary.com/ddbsmrzsh/video/upload/v1755398438/PASI_performance_mgmt_zczx0k.mp4",
        duration: "5:47",
        publishDate: "2025-08-17",
      },
      {
        id: 3,
        title: "Leading Project - Learning Opportunities",
        description:
          "Explore learning opportunities in leading projects with Samuel Johnson, focusing on practical applications and strategies.",
        audioUrl:
          "https://res.cloudinary.com/ddbsmrzsh/video/upload/v1755398446/PASI_-_Learning_opportunities_n1snar.mp4",
        duration: "3:44",
        publishDate: "2025-08-17",
      },
      {
        id: 4,
        title: "Customer Service - Promoting Good Experience",
        description:
          "Explore how to improve and promote good customer service in leading projects with Samuel Johnson, focusing on practical applications and strategies.",
        audioUrl:
          "https://res.cloudinary.com/ddbsmrzsh/video/upload/v1755398527/promoting_good_customer_service_new_enhanced_qo03fu.wav",
        duration: "3:15",
        publishDate: "2025-08-17",
      },
    ],
  };

  const casiPodcasts = {
    title: "CASI Podcasts",
    episodes: [
      {
        id: 1,
        title: "Security Fundamentals  - Cyberattack Recovery",
        description:
          "Deep dive into how to recover from a cyber attack with Samuel Johnson, exploring the core concepts and real-world applications.",
        audioUrl:
          "https://res.cloudinary.com/ddbsmrzsh/video/upload/v1755396875/CASI_-_Recovering_from_Cyber_Attacks_jpz8c6.mp4",
        duration: "19:30",
        publishDate: "2025-08-17",
      },
      {
        id: 2,
        title: "Security Fundamentals  - With Special Military Guest",
        description:
          "Deep dive into cyber security with Samuel Johnson and our special guest serving in military as cyber-security manager.",
        audioUrl:
          "https://res.cloudinary.com/ddbsmrzsh/video/upload/v1755396891/security_3.2_mczhi1.mp4",
        duration: "23:51",
        publishDate: "2025-08-17",
      },
    ],
  };

  const ccsaPodcasts = {
    title: "CCSA Podcasts",
    episodes: [
      {
        id: 1,
        title: "CCSA  - Learn about Operating Systems",
        description:
          "Deep dive into operating systems with Samuel Johnson, exploring the core concepts and real-world applications.",
        audioUrl:
          "https://res.cloudinary.com/ddbsmrzsh/video/upload/v1755397989/CCSA_-_Operating_Systems_wvo4mn.mp4",
        duration: "26:52",
        publishDate: "2025-08-17",
      },
      {
        id: 2,
        title: "CCSA  - Learn about Networking Cables",
        description:
          "Micro lesson into networking cables with Samuel Johnson, exploring the core concepts and real-world applications.",
        audioUrl:
          "https://res.cloudinary.com/ddbsmrzsh/video/upload/v1755398004/CCSA_Networking_Cables_k1of2o.mp4",
        duration: "7:07",
        publishDate: "2025-08-17",
      },
    ],
  };

  const PodcastSection = ({ podcast }) => (
    <div className="mb-6 sm:mb-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 sm:mb-6 flex items-center space-x-2 sm:space-x-3 px-2 sm:px-0">
        <div className="w-1 h-6 sm:h-8 bg-gradient-to-b from-purple-400 to-purple-600 rounded-full"></div>
        <span className="bg-gradient-to-r from-white via-purple-100 to-white bg-clip-text text-transparent">
          {podcast.title}
        </span>
      </h2>
      {podcast.episodes.length > 0 ? (
        <div className="space-y-3 sm:space-y-4">
          {podcast.episodes.map((episode) => (
            <div
              key={episode.id}
              className="bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 rounded-xl p-4 sm:p-6 shadow-2xl border border-slate-700 hover:border-purple-600/30 transition-all duration-300 hover:shadow-purple-500/10"
            >
              <div className="flex flex-col space-y-3 sm:space-y-4">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                      <svg
                        className="w-4 h-4 text-white"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white bg-gradient-to-r from-white to-green-100 bg-clip-text">
                      {episode.title}
                    </h3>
                  </div>
                  <p className="text-slate-300 text-sm md:text-base mb-3 leading-relaxed">
                    {episode.description}
                  </p>
                  <div className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4 text-sm">
                    <div className="flex items-center space-x-1 text-green-400 font-medium">
                      <svg
                        className="w-4 h-4 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                      </svg>
                      <span>Duration: {episode.duration}</span>
                    </div>
                    <span className="text-slate-500 hidden sm:inline">•</span>
                    <div className="flex items-center space-x-1 text-slate-400">
                      <svg
                        className="w-4 h-4 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
                      </svg>
                      <span className="break-all">
                        Published:{" "}
                        {new Date(episode.publishDate).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="w-full">
                  <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-xl p-3 sm:p-4 border border-slate-600 shadow-xl">
                    <audio
                      controls
                      className="w-full h-10 sm:h-12 bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg shadow-lg 
                               [&::-webkit-media-controls-panel]:bg-gradient-to-r [&::-webkit-media-controls-panel]:from-slate-800 [&::-webkit-media-controls-panel]:to-slate-700
                               [&::-webkit-media-controls-play-button]:bg-purple-700 [&::-webkit-media-controls-play-button]:rounded-full
                               [&::-webkit-media-controls-timeline]:bg-slate-600 [&::-webkit-media-controls-timeline]:rounded-full
                               [&::-webkit-media-controls-current-time-display]:text-white [&::-webkit-media-controls-current-time-display]:font-medium
                               [&::-webkit-media-controls-time-remaining-display]:text-white [&::-webkit-media-controls-time-remaining-display]:font-medium
                               [&::-webkit-media-controls-volume-slider]:bg-gray-100 [&::-webkit-media-controls-volume-slider]:rounded-lg 
                               hover:shadow-purple-500/20 hover:shadow-2xl transition-all duration-300
                               focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-opacity-50"
                      preload="metadata"
                    >
                      <source src={episode.audioUrl} type="audio/mp4" />
                      <source src={episode.audioUrl} type="video/mp4" />
                      Your browser does not support the audio element.
                    </audio>

                    {/* Custom Spotify-like decorative elements */}
                    <div className="flex items-center justify-between mt-2 sm:mt-3 px-1 sm:px-2">
                      <div className="flex items-center space-x-2">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-purple-400 rounded-full animate-pulse"></div>
                        <span className="text-xs text-slate-400 font-medium">
                          Now Playing
                        </span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <div className="w-0.5 sm:w-1 h-2 sm:h-3 bg-purple-400 rounded animate-pulse delay-100"></div>
                        <div className="w-0.5 sm:w-1 h-3 sm:h-4 bg-purple-400 rounded animate-pulse delay-200"></div>
                        <div className="w-0.5 sm:w-1 h-1.5 sm:h-2 bg-purple-400 rounded animate-pulse delay-300"></div>
                        <div className="w-0.5 sm:w-1 h-4 sm:h-5 bg-purple-400 rounded animate-pulse delay-400"></div>
                        <div className="w-0.5 sm:w-1 h-2 sm:h-3 bg-purple-400 rounded animate-pulse delay-500"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="bg-gradient-to-br from-slate-800 via-slate-800 to-slate-900 rounded-xl p-6 sm:p-8 text-center border border-slate-700 shadow-xl mx-2 sm:mx-0">
          <div className="flex flex-col items-center space-y-3 sm:space-y-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-slate-600 to-slate-700 rounded-full flex items-center justify-center">
              <svg
                className="w-6 h-6 sm:w-8 sm:h-8 text-slate-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
                />
              </svg>
            </div>
            <p className="text-slate-400 text-base sm:text-lg">
              No episodes available yet. Stay tuned!
            </p>
            <div className="flex space-x-2">
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-slate-600 rounded-full animate-bounce"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-slate-600 rounded-full animate-bounce delay-100"></div>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-slate-600 rounded-full animate-bounce delay-200"></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );

  return (
    <div className="min-h-screen w-full bg-slate-900 overflow-y-auto">
      <SideBar />
      <div className="w-full h-full flex flex-col">
        <CourseHeader
          courseName="Podcasts"
          courseDescription="Dive Deeper into the world of BASI, PASI, CCSA and CASI while listening to the Blockchain Podcast with our Host Samuel Johnson (a philanthropist, technologist and founder of sukii and nuru labs.)"
          courseTags={[]}
        />

        {/* Main Podcast Content */}
        <div className="flex-1 p-3 sm:p-6 lg:ml-64">
          {/* Responsive margin: no margin on mobile, ml-64 on large screens */}
          <div className="max-w-4xl mx-auto">
            <PodcastSection podcast={basiPodcasts} />
            <PodcastSection podcast={pasiPodcasts} />
            <PodcastSection podcast={casiPodcasts} />
            <PodcastSection podcast={ccsaPodcasts} />
          </div>
        </div>
      </div>
    </div>
  );
}
