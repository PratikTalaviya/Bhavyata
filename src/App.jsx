// import { useEffect, useState } from "react";
// import "./App.css";
// import Preloader from "./components/Preloader";
// import ComingSoon from "./pages/ComingSoon";

// function App() {
//   const [isLoaded, setIsLoaded] = useState(true);

//   // useEffect(() => {
//   //   const handleLoad = () => {
//   //     setIsLoaded(true);
//   //   };

//   //   window.addEventListener("load", handleLoad);

//   //   return () => {
//   //     window.removeEventListener("load", handleLoad);
//   //   };
//   // }, []);

//   return (
//     <>
//       {isLoaded ? (
//         <>
//           <Preloader />
//           <ComingSoon />
//         </>
//       ) : null}
//     </>
//   );
// }

// export default App;

import { useEffect, useState } from "react";
import "./App.css";
import Preloader from "./components/Preloader";
import ComingSoon from "./pages/ComingSoon";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      setIsLoaded(true);
    };

    const handleDOMContentLoaded = () => {
      if (document.readyState === "complete") {
        setIsLoaded(true);
      }
    };

    if (document.readyState === "complete") {
      setIsLoaded(true);
    } else {
      window.addEventListener("load", handleLoad);
      document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);

      return () => {
        window.removeEventListener("load", handleLoad);
        document.removeEventListener("DOMContentLoaded", handleDOMContentLoaded);
      };
    }
  }, []);

  return (
    <>
      {isLoaded ? (
        <>
          <Preloader />
          <ComingSoon />
        </>
      ) : null}
    </>
  );
}

export default App;
