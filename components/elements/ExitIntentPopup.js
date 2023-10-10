import { useState, useEffect } from "react";

const ExitIntentPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleMouseOut = (e) => {
      if (e.clientY <= 0) {
        setShowPopup(true);
      }
    };

    document.addEventListener("mouseout", handleMouseOut);
    window.document.addEventListener("touchend", handleMouseOut);
    window.addEventListener("beforeunload", handleMouseOut);

    return () => {
      document.removeEventListener("mouseout", handleMouseOut);
      window.document.removeEventListener("touchend", handleMouseOut);
      window.addEventListener("beforeunload", handleMouseOut);
    };
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    showPopup && (
      <div className="exit-intent-popup">
        <div className="popup-content">
          <h3 className="text-xl md:text-2xl font-bold font-heading flex justify-between items-center ">
            <a className="hover:text-blue-500">Header</a>
            <img
              className="w-6 h-5 mr-2"
              src="/assets/imgs/icons/close-o.svg"
              alt="close"
              onClick={handleClosePopup}
            />
          </h3>
          <img
            className="jump rounded wow animate_animated animate_fadeIn"
            //  src="/assets/imgs/placeholders/dashboard.png"
            src="/assets/imgs/backgrounds/slider/dashboard1248.jpg"
            alt="dashboard"
          />
        </div>
      </div>
    )
  );
};

export default ExitIntentPopup;
