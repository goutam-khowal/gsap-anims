import { services } from "@/components/Digital-Agency-Website/data";
import Service from "./Service";

function Services() {
  return (
    <>
      {/* Services heading */}
      <div className="w-full flex max-sm:flex-col items-center mt-14 px-5 gap-x-5">
        <h1 className="text-black w-full text-center px-2 py-2 text-3xl font-bold rounded-md bg-[#9AE975]">
          Services
        </h1>
        <p className="text-center m-0 p-0 w-full text-base font-semibold py-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque
          molestiae voluptas dolore! voluptas dolore!
        </p>
      </div>
      {/* Services Cards */}
      <div className="flex flex-col items-center w-full px-5">
        {services.map((service, index) => (
          <Service
            key={index}
            title={service.title}
            description={service.description}
            descClr={service.descClr}
            iconBg={service.iconBg}
            iconClr={service.iconClr}
            cardBg={service.cardBg}
            headingBg={service.headingBg}
            img={service.img}
          />
        ))}
      </div>
    </>
  );
}

export default Services;
