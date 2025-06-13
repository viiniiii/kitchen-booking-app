import React from "react";
import { Check } from "lucide-react";

const ConfirmOverview = () => (
  <section className="bg-green-50 border border-green-200 rounded-lg p-6 mb-6">
    <div className="flex items-center justify-center mb-4">
      <div className="bg-green-500 rounded-full p-3">
        <Check className="w-8 h-8 text-white" />
      </div>
    </div>
    <div className="text-center">
      <h2 className="text-2xl font-semibold text-green-800 mb-2">Booking Confirmed!</h2>
      <p className="text-green-700">
        Your kitchen booking has been successfully confirmed.
        <br />
        We look forward to seeing you soon!
      </p>
    </div>
  </section>
);

export default ConfirmOverview;
