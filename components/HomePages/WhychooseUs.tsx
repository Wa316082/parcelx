import {
    FaShippingFast,
    FaUserShield,
    FaGlobe,
    FaClock,
} from 'react-icons/fa';

export default function WhyChooseUs() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4">

                <div className="text-center max-w-3xl mx-auto mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                        Why Work With Us
                    </h2>
                    <p className="mt-4 text-gray-600 leading-relaxed">
                        We are a leading one-stop logistics service provider helping you
                        reach your exact delivery destination on time without delay or
                        damage.
                    </p>
                </div>

                <div className="grid md:grid-cols-4 gap-8 mb-20">
                    <Feature
                        icon={<FaShippingFast />}
                        title="Fast Delivery"
                        desc="Optimized routes ensure speedy and safe parcel delivery."
                    />
                    <Feature
                        icon={<FaClock />}
                        title="On-Time Guarantee"
                        desc="We respect your time and deliver exactly when promised."
                    />
                    <Feature
                        icon={<FaUserShield />}
                        title="Secure Handling"
                        desc="Your parcels are handled with care and full accountability."
                    />
                    <Feature
                        icon={<FaGlobe />}
                        title="Global Coverage"
                        desc="Worldwide delivery network with local expertise."
                    />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 text-center">
                    <Stat value="5K+" label="New Partners Every Year" />
                    <Stat value="30+" label="Years Of Field Experience" />
                    <Stat value="14K+" label="Talented Staffs Worldwide" />
                    <Stat value="68K+" label="Successful Project Completion" />
                    <Stat value="2M+" label="Tonnes Supplied Annually" />
                </div>

            </div>
        </section>
    );
}

function Feature({
                     icon,
                     title,
                     desc,
                 }: {
    icon: React.ReactNode;
    title: string;
    desc: string;
}) {
    return (
        <div className="text-center p-6 rounded-xl border hover:shadow-lg transition">
            <div className="w-14 h-14 mx-auto flex items-center justify-center rounded-full bg-blue-100 text-blue-600 text-2xl mb-4">
                {icon}
            </div>
            <h3 className="font-semibold text-lg mb-2">{title}</h3>
            <p className="text-sm text-gray-600">{desc}</p>
        </div>
    );
}

function Stat({ value, label }: { value: string; label: string }) {
    return (
        <div>
            <h3 className="text-3xl md:text-4xl font-bold text-blue-600">
                {value}
            </h3>
            <p className="mt-2 text-sm text-gray-600">{label}</p>
        </div>
    );
}
