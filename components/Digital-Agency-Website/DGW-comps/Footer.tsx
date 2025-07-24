import Link from "next/link";

const Footer = () => {
  return (
    <section className="sm:px-10">
      <footer className="bg-black px-10 max-sm:px-5 py-10 rounded-t-4xl ">
        <h1 className="w-full flex items-center justify-center text-white text-2xl gap-x-.75 hover:text-[#b6ff69]">
          <i className="ri-shining-2-fill rotate-45 text-2xl inline-block"></i>
          BlizzardX
        </h1>
        <div className="flex flex-col text-white w-full items-center gap-y-10 mt-10 underline">
          <Link href={""}>About Us</Link>
          <Link href={""}>Services</Link>
          <Link href={""}>Use Cases</Link>
          <Link href={""}>Pricing</Link>
          <Link href={""}>Blog</Link>
        </div>
        <div className="w-50 text-white mt-20 flex flex-col mx-auto gap-5 text-lg">
          <button className="bg-[#b6ff69] py-1.5 px-8 text-lg font-bold text-blue-950 rounded-lg ">
            Contact us:
          </button>
          <div>
            {" "}
            <address className="text-center">Email:info@blizzardX.com</address>
            <address className="text-center">Phone:011-546-9966</address>
            <address className="text-center">Address:</address>
            <address className="text-center">
              1234 NBCB Plaza, Mars Dust City
            </address>
          </div>
          <div className="flex justify-between items-center px-6">
            <i className="ri-facebook-circle-fill text-3xl  cursor-pointer"></i>
            <i className="ri-twitter-x-fill text-3xl  cursor-pointer"></i>
            <i className="ri-linkedin-fill text-3xl  cursor-pointer"></i>
          </div>
        </div>
        <div className="px-3 py-3.5 rounded-md bg-[#191A23] space-y-2 my-8">
          <input
            placeholder="Email Address"
            className="rounded-md border-1 text-[#ccc] text-lg  border-[#aaa] w-full px-3 py-4"
            type="email"
            name="email"
            id="email"
          />
          <button className="w-full bg-[#b6ff69] rounded-md px-3 py-4 text-lg">
            Subscribe to Newsletter
          </button>
        </div>
        <hr className="bg-white text-white h-3/2 mb-8" />
        <div className="flex flex-col sm:flex-row justify-between text-white items-center gap-y-8">
          <div className="w-full flex flex-col justify-center items-center sm:items-start gap-y-4">
            <p>&COPY; COPYRIGHT 2025 BLIZZARDX</p>
            <p className="underline">PRIVACY POLICY</p>
          </div>
          <div className="w-full flex flex-col justify-center items-center sm:items-end gap-y-4">
            <p>
              DESIGN BY <span className="underline">JANE DOE</span>
            </p>
            <p>
              DEVELOPMENT BY{" "}
              <Link
                target="blank"
                href={"https://www.linkedin.com/in/goutam-khowal/"}
                className="underline"
              >
                GOUTAM KHOWAL
              </Link>
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
