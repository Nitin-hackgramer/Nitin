export default function AboutPage() {
  return (
    <section className="px-6 md:px-20 py-16 bg-[#0f172a] text-white min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About Me</h1>
        <p className="text-lg text-gray-300 mb-10 text-center">
          I'm a passionate developer focused on crafting seamless digital experiences through modern technologies, clean code, and intuitive design.
        </p>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-[#1e293b] rounded-2xl p-6 shadow hover:shadow-blue-400/30 transition-shadow">
            <h3 className="text-2xl font-semibold text-blue-400 mb-2">My Skills</h3>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>React, Next.js, TypeScript</li>
              <li>Django & REST APIs</li>
              <li>UI/UX Design Principles</li>
              <li>Tailwind CSS</li>
              <li>Database Integration</li>
            </ul>
          </div>
          <div className="bg-[#1e293b] rounded-2xl p-6 shadow hover:shadow-blue-400/30 transition-shadow">
            <h3 className="text-2xl font-semibold text-blue-400 mb-2">Experience</h3>
            <ul className="text-gray-300 space-y-3">
              <li>💼 2+ years in web development</li>
              <li>🌐 Built full-stack apps for startups</li>
              <li>🏆 Participated in national-level hackathons</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
