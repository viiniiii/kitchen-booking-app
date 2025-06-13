import Header from "../Header";
import KitchenCard from "./kitchenCard";

const KitchensPage = ({ kitchens, loading, onBookNow }) => (
  <div className="min-h-screen bg-gray-50">
    <Header title="Available Kitchens" subtitle="Find and book the perfect kitchen for your culinary needs" />
    <div className="max-w-6xl mx-auto py-8 px-6">
      {loading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {kitchens.map((kitchen) => (
            <KitchenCard key={kitchen.id} kitchen={kitchen} onBookNow={onBookNow} />
          ))}
        </div>
      )}
    </div>
  </div>
);
export default KitchensPage;
