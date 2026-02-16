const SectionTitle = ({ label, title }) => {
    return (
        <div className="text-center mb-12">
            <p className="text-primary text-sm uppercase tracking-wider">
                {label}
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mt-3">
                {title}
            </h2>
        </div>
    );
};

export default SectionTitle;
