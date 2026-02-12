const Grocery = () => {
  return (
    <div className="mx-auto max-w-6xl px-6 py-10">
      <h1 className="mb-4 text-3xl font-bold text-gray-800">
        Grocery Store 🛍️
      </h1>

      <p className="mb-8 text-gray-600">
        Welcome to our online grocery store. We offer fresh products
        and plan to add many components here in future.
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
        {["Vegetables", "Fruits", "Dairy", "Snacks", "Beverages", "Household"].map(
          (item) => (
            <div
              key={item}
              className="rounded-2xl bg-white p-6 shadow-md hover:shadow-lg transition"
            >
              <h3 className="mb-2 text-xl font-semibold text-gray-800">
                {item}
              </h3>
              <p className="text-sm text-gray-600">
                Fresh and quality {item.toLowerCase()} available.
              </p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Grocery;
