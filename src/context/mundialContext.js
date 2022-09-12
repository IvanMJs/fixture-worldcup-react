// import axios from "axios";
// import { createContext, useContext, useEffect, useState } from "react";


// const MundialContext = createContext();

// export function MundialProvider(children) {
//   const [equipos, setEquipos] = useState();

//   useEffect(() => {
//     axios
//       .get(`/db/equipos.json`)
//       .then((res) => console.log(res))
//       .catch((err) => console.log(err));
//   }, []);

  

//   return (
//     <MundialContext.Provider value={equipos}>
//       {children}
//     </MundialContext.Provider>
//   );
// }

// const useMundial = () => {
//   const context = useContext(MundialContext);

//   if (context === undefined) {
//     throw new Error("useProduct must be used within MundialContext");
//   }

//   return context;
// };

// export default useMundial;
