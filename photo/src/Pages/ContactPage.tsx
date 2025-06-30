export default function ContactPage() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 mt-10">
      <h1 className="text-4xl font-bold text-center mb-8">Get in Touch</h1>
      <p className="text-center text-gray-600 mb-12">
        We'd love to hear from you. Whether it's a shoot inquiry, feedback, or a quick hello — drop us a message!
      </p>

      <div id="form" className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Form */}
        <form className="space-y-6 bg-white p-8 shadow-lg rounded-2xl">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows={5}
              placeholder="Type your message..."
              className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-black text-white px-6 py-2 rounded-xl hover:bg-gray-800 transition"
          >
            Send Message
          </button>
        </form>

        {/* Studio Info */}
        <div className="flex flex-col justify-between bg-gray-50 p-8 rounded-2xl shadow-lg">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Tarkwa Tamso</h2>
            <p className="text-gray-700 mb-2">📍 123 Lens Street, Snap City, PH 45678</p>
            <p className="text-gray-700 mb-2">📞 (123) 456-7890</p>
            <p className="text-gray-700 mb-4">✉️ hello@flix.com</p>

            <h3 className="text-xl font-medium mt-6 mb-2">Business Hours</h3>
            <ul className="text-gray-600">
              <li>Mon – Fri: 9:00 AM – 6:00 PM</li>
              <li>Sat: 10:00 AM – 4:00 PM</li>
              <li>Sun: Closed</li>
            </ul>
          </div>

          <div className="mt-6">
            <iframe
              title="Studio Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086328955153!2d-122.4194156846813!3d37.77492977975986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c1f0c15d3%3A0xdea7c640d57dbd5!2sPhotography%20Studio!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
              width="100%"
              height="250"
              allowFullScreen
              loading="lazy"
              className="rounded-xl border"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}
