import { useState } from "react";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // fake submit delay (UX purpose)
    setSubmitted(true);

    setTimeout(() => {
      e.target.reset();
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div
      name="contact"
      className="w-full min-h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        {/* Heading */}
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6 text-gray-300">
            Submit the form below to get in touch with me
          </p>
        </div>

        {/* Form */}
        <div className="flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500"
            />

            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500"
            />

            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              required
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none focus:border-cyan-500"
            />

            <button
              type="submit"
              className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300"
            >
              Send Message
            </button>

            {/* Success message */}
            {submitted && (
              <p className="text-green-400 text-center font-semibold">
                ✅ Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
