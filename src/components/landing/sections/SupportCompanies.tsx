const SupportCompanies = () => {
  return (
    <section className="grid w-full grid-cols-4">
      <div className="flex items-center justify-center bg-light-background p-10">
        <div className="space-y-1">
          <p className="text-2xl font-bold text-white">
            Support for any kind of startup.
          </p>
          <p className="text-2xl font-bold text-gray-4">Such as...</p>
        </div>
      </div>
      <div className="flex items-center justify-center bg-cyan-500 p-10">
        <div className="space-y-1">
          <p className="text-2xl font-bold text-white">Some company here</p>
          <p className="text-2xl font-bold text-gray-4">Whatever they do</p>
        </div>
      </div>
    </section>
  );
};

export default SupportCompanies;
