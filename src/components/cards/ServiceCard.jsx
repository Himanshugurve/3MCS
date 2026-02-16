const ServiceCard = ({ title, description }) => {
    return (
        <div className="bg-[#F5F1E8] p-8 rounded-2xl shadow-sm hover:shadow-md transition">
            <h3 className="font-semibold text-lg mb-4">
                {title}
            </h3>
            <p className="text-gray-600">
                {description}
            </p>
            <button className="text-primary mt-4">
                Learn More →
            </button>
        </div>
    );
};

export default ServiceCard;
