import React from "react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Navbar */}
      <header className="bg-white/80 backdrop-blur shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
            MyWebsite
          </h1>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-700 hover:text-blue-600 font-medium">Features</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
          </nav>
          <a
            href="#get-started"
            className="hidden md:inline-block px-5 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow hover:opacity-90 transition"
          >
            Get Started
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50"></div>
        <div className="max-w-7xl mx-auto px-6 py-24 relative z-10 text-center">
          <h2 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Beautiful Websites</span> Effortlessly
          </h2>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Tailwind CSS + React gives you the speed & flexibility to create stunning web apps with ease.
          </p>
          <div className="mt-8 flex justify-center gap-4">
            <a
              href="#features"
              className="px-6 py-3 rounded-lg bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold shadow hover:opacity-90 transition"
            >
              Get Started
            </a>
            <a
              href="#about"
              className="px-6 py-3 rounded-lg border border-gray-300 bg-white hover:border-blue-600 hover:text-blue-600 transition font-medium"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Features</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: "⚡ Fast Development",
                desc: "Write less CSS and focus on your design and content.",
              },
              {
                title: "📱 Responsive Design",
                desc: "Looks perfect on all devices without extra effort.",
              },
              {
                title: "🎨 Fully Customizable",
                desc: "Easily adapt the style to match your brand.",
              },
            ].map((feature, i) => (
              <div
                key={i}
                className="p-8 bg-gray-50 rounded-xl shadow hover:shadow-lg transition transform hover:-translate-y-1"
              >
                <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50 text-center">
        <div className="max-w-4xl mx-auto px-6">
          <h3 className="text-3xl font-bold text-gray-900 mb-6">About Us</h3>
          <p className="text-gray-700 text-lg">
            We’re passionate about helping developers create amazing web experiences.
            With Tailwind CSS and React, you can focus more on building and less on fiddling with styles.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
