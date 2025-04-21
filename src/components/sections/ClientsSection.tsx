
import { SectionHeading } from "@/components/ui/section-heading";

const ClientsSection = () => {
  const clients = [
    {
      name: "Stockholm Environment Institute",
      country: "Sweden",
      logo: "https://www.sei.org/wp-content/themes/sei/assets/src/sprite-images/logo.svg?v2.0"
    },
    {
      name: "Fern",
      country: "Belgium",
      logo: "https://upload.wikimedia.org/wikipedia/commons/7/7b/Fern_NGO_Logo.jpg"
    },
    {
      name: "Imaflora",
      country: "Brazil",
      logo: "https://img.logo.dev/imaflora.org"
    },
    {
      name: "Global Canopy",
      country: "UK",
      logo: "https://img.logo.dev/globalcanopy.org"
    },
    {
      name: "WWF",
      country: "International",
      logo: "https://img.logo.dev/wwf.de"
    },
    {
      name: "Beyond Borders",
      country: "Netherlands",
      logo: "https://beyondbordersmedia.com/wp-content/uploads/2022/05/bbm-logo2.png"
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <SectionHeading
          title="Our Trusted Partners"
          subtitle="We're proud to collaborate with leading organizations making a difference across the globe."
          centered
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center">
          {clients.map((client, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow w-full aspect-[3/2] flex items-center justify-center">
                <img 
                  src={client.logo} 
                  alt={`${client.name} logo`} 
                  className="max-h-12 max-w-full"
                />
              </div>
              <p className="mt-3 text-center font-medium text-gray-700">{client.name}</p>
              <p className="text-sm text-gray-500">{client.country}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
