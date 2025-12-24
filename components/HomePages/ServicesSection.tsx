import {
    FaTruckMoving,
    FaPlane,
    FaShip,
    FaWarehouse,
    FaBoxOpen,
    FaGlobeAsia,
} from 'react-icons/fa';

export default function ServicesSection() {
    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4">

                {/* Heading */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Our Services
                    </h2>
                    <p className="mt-3 text-gray-600">
                        End-to-end logistics solutions tailored for your business
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">

                    <ServiceCard
                        icon={<FaTruckMoving />}
                        title="Road Freight"
                        desc="Cost-effective and reliable road transportation solutions."
                    />

                    <ServiceCard
                        icon={<FaPlane />}
                        title="Air Freight"
                        desc="Fast international shipping with global airline partners."
                    />

                    <ServiceCard
                        icon={<FaShip />}
                        title="Sea Freight"
                        desc="Secure and scalable ocean freight for bulk shipments."
                    />

                    <ServiceCard
                        icon={<FaWarehouse />}
                        title="Warehousing"
                        desc="Modern storage facilities with inventory management."
                    />

                    <ServiceCard
                        icon={<FaBoxOpen />}
                        title="Parcel Delivery"
                        desc="Door-to-door parcel delivery with real-time tracking."
                    />

                    <ServiceCard
                        icon={<FaGlobeAsia />}
                        title="Global Logistics"
                        desc="Worldwide delivery network with customs support."
                    />

                </div>
            </div>
        </section>
    );
}

function ServiceCard({
                         icon,
                         title,
                         desc,
                     }: {
    icon: React.ReactNode;
    title: string;
    desc: string;
}) {
    return (
        <div className="bg-white p-8 rounded-2xl border hover:shadow-xl transition">
            <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-blue-600 text-white text-2xl mb-4">
                {icon}
            </div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-sm text-gray-600">{desc}</p>
        </div>
    );
}
