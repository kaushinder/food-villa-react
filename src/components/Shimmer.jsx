// Shimmer for restaurant cards
export const Shimmer = () => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
      {Array(12)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="h-[320px] rounded-2xl bg-gray-200 p-4 animate-pulse shadow-md"
          >
            <div className="h-40 w-full rounded-xl bg-gradient-to-r from-gray-300 to-gray-200 mb-4"></div>
            <div className="h-5 w-3/4 rounded bg-gradient-to-r from-gray-300 to-gray-200 mb-3"></div>
            <div className="h-4 w-full rounded bg-gradient-to-r from-gray-300 to-gray-200 mb-2"></div>
            <div className="h-4 w-2/3 rounded bg-gradient-to-r from-gray-300 to-gray-200 mb-3"></div>
            <div className="flex justify-between items-center mt-4">
              <div className="h-4 w-20 rounded bg-gradient-to-r from-gray-300 to-gray-200"></div>
              <div className="h-4 w-16 rounded bg-gradient-to-r from-gray-300 to-gray-200"></div>
            </div>
          </div>
        ))}
    </div>
  );
};

// Shimmer for restaurant menu header
export const MenuHeaderShimmer = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 animate-pulse">
      <div className="bg-white rounded-2xl shadow-lg p-8 mb-6">
        <div className="h-8 w-3/4 rounded bg-gradient-to-r from-gray-300 to-gray-200 mb-4"></div>
        <div className="h-4 w-1/2 rounded bg-gradient-to-r from-gray-300 to-gray-200 mb-4"></div>
        <div className="flex gap-6 mt-6">
          <div className="h-6 w-20 rounded-full bg-gradient-to-r from-gray-300 to-gray-200"></div>
          <div className="h-6 w-24 rounded-full bg-gradient-to-r from-gray-300 to-gray-200"></div>
          <div className="h-6 w-28 rounded-full bg-gradient-to-r from-gray-300 to-gray-200"></div>
        </div>
      </div>
    </div>
  );
};

// Shimmer for menu categories
export const MenuCategoryShimmer = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-4">
      {Array(5)
        .fill("")
        .map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 animate-pulse"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="h-6 w-1/3 rounded bg-gradient-to-r from-gray-300 to-gray-200"></div>
              <div className="h-6 w-6 rounded bg-gradient-to-r from-gray-300 to-gray-200"></div>
            </div>
            <div className="space-y-4">
              {Array(3)
                .fill("")
                .map((_, itemIndex) => (
                  <div key={itemIndex} className="flex gap-4 py-4 border-b last:border-b-0">
                    <div className="flex-1">
                      <div className="h-5 w-2/3 rounded bg-gradient-to-r from-gray-300 to-gray-200 mb-2"></div>
                      <div className="h-4 w-1/4 rounded bg-gradient-to-r from-gray-300 to-gray-200 mb-2"></div>
                      <div className="h-3 w-full rounded bg-gradient-to-r from-gray-300 to-gray-200"></div>
                    </div>
                    <div className="w-24 h-24 rounded-lg bg-gradient-to-r from-gray-300 to-gray-200"></div>
                  </div>
                ))}
            </div>
          </div>
        ))}
    </div>
  );
};

// Complete menu shimmer (combines header and categories)
export const CompleteMenuShimmer = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <MenuHeaderShimmer />
      <MenuCategoryShimmer />
    </div>
  );
};

export default Shimmer;
