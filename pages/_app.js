// import '../styles/globals.css'

// function MyApp({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// export default MyApp



import '../styles/globals.css'
import '../configureAmplify'
import Navbar from './components/navbar'

// import CreatePost from './create-post'
import { useEffect, useState } from "react";


function MyApp({ Component, pageProps }) {
const [showChild, setShowChild] = useState(false);

//   return(
//     <div>
//       <Navbar/>

//       <div className='py-8 px-16 bg-slate-100'>
//         {/* <Profile/> */}
//       <Component {...pageProps} />
//       </div>
//     </div>

//   ) 
// }

  useEffect(() => {
    setShowChild(true);
  }, []);
  if (!showChild) {
    return null;
  }
  if (typeof window === "undefined") {
    return <>
      
    </>;
  } else {
    return <>
      <Navbar/>
      <div className='py-8 px-16 bg-slate-100'>
     <Component {...pageProps} />
     </div>
    </> 
  }
}
export default MyApp
