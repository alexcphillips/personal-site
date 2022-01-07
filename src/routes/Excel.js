// import axios from "axios";
// import { useState, useEffect } from "react";

// export default function Excel() {
//   const [files, updateFiles] = useState([]);

//   async function getFiles() {
//     const res = await axios.get("/files");
//     if (isMounted) {
//       updateFiles(res.data);
//     }

//     return () => {
//       isMounted = false;
//     };
//   }

//   useEffect(() => {
//     getFiles(true);
//   }, []);
// }
