import { Proposal } from "../types";

const GetProposalComp = ({ heading, paragraph, buttonText }: Proposal) => {
  return (
    <section className="w-full px-5 my-30">
      <div className="bg-[#F3F3F3] px-5 py-10 rounded-2xl">
        <h1 className="text-3xl text-left font-extrabold w-full">{heading}</h1>
        <p className="text-[15px] text-gray-800 my-10 w-full">{paragraph}</p>
        <button
          className="w-full font-semibold bg-black text-white px-4 py-3 rounded-xl 
             hover:bg-[#b9ff69] hover:text-[#000] hover:shadow-[0px_10px_#000] 
             duration-300 transition-all"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default GetProposalComp;
