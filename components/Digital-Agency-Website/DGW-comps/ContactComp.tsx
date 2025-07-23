import AnimHeadingPara from "./AnimtedComponents/AnimHeadingPara";

const ContactComp = () => {
  return (
    <section className="px-10 max-sm:px-5 py-5 mb-24">
      <AnimHeadingPara
        heading={"Contact"}
        paragraph={
          "Connect with us: Let's discuss your Digital Marketing needs"
        }
      />
      {/* form div */}
      <div className="bg-[#F3F3F3] rounded-4xl px-5 py-10">
        {/* Row 1 */}
        <div className="flex w-full gap-x-5">
          <div className="flex gap-x-1">
            <input
              type="radio"
              id="sayHi"
              name="contactRadio"
              value={"Say Hi"}
            />
            <label htmlFor="option1">Say Hi</label>
          </div>
          <div className="flex gap-x-1">
            <input
              type="radio"
              id="getAQuote"
              name="contactRadio"
              value={"Get a Quote"}
              checked
            />
            <label htmlFor="option2">Get a Quote</label>
          </div>
        </div>
        {/* Row 2 */}
        <div className="grid grid-cols-1 mt-5 gap-y-6  text-sm text-gray-700">
          <div className="grid grid-1 gap-y-1">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              className="bg-white rounded px-3 py-2"
              name="name"
              id="name"
              placeholder="Name"
            />
          </div>
          <div className="grid grid-1 gap-y-1 text-black">
            <label htmlFor="email">Email Address*</label>
            <input
              placeholder="Email"
              type="email"
              className="bg-white rounded px-3 py-2"
              name="email"
              id="email"
            />
          </div>
          <div className="grid grid-1 gap-y-1">
            <label htmlFor="">Message</label>
            <textarea
              placeholder="Your message here..."
              maxLength={5000}
              id="field"
              name="field"
              data-name="Field"
              className="bg-white rounded  px-3 py-2 h-35"
            ></textarea>
          </div>
        </div>
        <button className="bg-black text-white text-lg w-full text-center mt-5 rounded-lg py-2.5">
          Submit
        </button>
      </div>
    </section>
  );
};

export default ContactComp;
