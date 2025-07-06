import { useState } from "react";
import { Rings } from "react-loader-spinner";

const apiStatusConstants = {
  initial: "INITIAL",
  inProgress: "IN_PROGRESS",
  success: "SUCCESS",
  failure: "FAILURE",
};

const BusinessDashboard = () => {
  const [businessName, setBusinessName] = useState("");
  const [locationName, setLocationName] = useState("");
  const [businessData, setBusinessData] = useState(null);
  const [apiStatus, setApiStatus] = useState(apiStatusConstants.initial);

  const onChangeBusinessName = (event) => setBusinessName(event.target.value);
  const onChangeLocationName = (event) => setLocationName(event.target.value);

  const fetchBusinessData = async () => {
    const url = "https://backend-phi-one-46.vercel.app/business-data/";
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: businessName, location: locationName }),
    };

    const response = await fetch(url, options);
    if (response.ok) {
      const data = await response.json();
      setBusinessData(data);
      setApiStatus(apiStatusConstants.success);
    } else {
      setApiStatus(apiStatusConstants.failure);
    }
  };

  const regenerateHeadline = async () => {
    const url = `https://backend-phi-one-46.vercel.app/regenerate-headline?name=${businessName}&location=${locationName}`;
    const response = await fetch(url);
    if (response.ok) {
      const data = await response.json();
      setBusinessData((prev) => ({
        ...prev,
        headline: data.headline,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setApiStatus(apiStatusConstants.inProgress);

    await fetchBusinessData();
  };

  const renderLoader = () => (
    <div className="flex justify-center items-center h-screen bg-[#F9EBDE]">
      <Rings height={80} width={80} color="#815854" ariaLabel="loading" />
    </div>
  );

  const renderError = () => (
    <div className="flex flex-col justify-center items-center h-screen text-center bg-[#F9EBDE]">
      <h1 className="text-xl font-bold text-[#815854] mb-2">Something went wrong</h1>
      <p className="text-[#815854]">Try again</p>
    </div>
  );

  const renderSuccess = () => (
    <div className="min-h-screen bg-[#F9EBDE] px-4 py-8">
      <h1 className="text-center text-3xl font-bold text-[#815854] mb-8">
        Business Dashboard
      </h1>

      <form onSubmit={handleSubmit} className="max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-4">
        <input
          onChange={onChangeBusinessName}
          value={businessName}
          type="text"
          placeholder="Business Name"
          className="w-full p-2 border rounded-md"
          required
        />
        <input
          onChange={onChangeLocationName}
          value={locationName}
          type="text"
          placeholder="Location"
          className="w-full p-2 border rounded-md"
          required
        />
        <button
          type="submit"
          className="bg-[#815854] text-white px-4 py-2 rounded-md w-full"
        >
          Submit
        </button>
      </form>

      {businessData && (
        <div className="mt-10 max-w-xl mx-auto bg-white p-6 rounded-xl shadow-md space-y-3 text-[#815854]">
          <p><strong>Google Rating:</strong> {businessData.rating}</p>
          <p><strong>Reviews:</strong> {businessData.reviews}</p>
          <p><strong>SEO Headline:</strong> {businessData.headline}</p>
          <button
            onClick={regenerateHeadline}
            className="mt-4 bg-[#815854] text-white px-4 py-2 rounded-md"
          >
            Regenerate SEO Headline
          </button>
        </div>
      )}
    </div>
  );

  switch (apiStatus) {
    case apiStatusConstants.inProgress:
      return renderLoader();
    case apiStatusConstants.failure:
      return renderError();
    case apiStatusConstants.success:
    case apiStatusConstants.initial:
      return renderSuccess();
    default:
      return null;
  }
};

export default BusinessDashboard;