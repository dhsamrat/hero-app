import Banner from "@/components/homepage/Banner";

export default function Home(){
  return (
    <div>
      <Banner />
    </div>
  );
};


// export default function Home() {
//   return (
//     <div>
//       <div className="bg-slate-200">
//         <nav className="container mx-auto flex items-center justify-between py-4">

//           <h2 className="text-xl font-bold">
//             Logo
//           </h2>

//           <ul className="flex items-center gap-6">
//             <li>Home</li>
//             <li>Apps</li>
//             <li>Installation</li>
//           </ul>

//           <button className="rounded-md bg-black px-4 py-2 text-white">
//             Contribute
//           </button>

//         </nav>
//       </div>

//       <h2 className="mt-6 text-center text-2xl font-bold">
//         Home Page
//       </h2>
//     </div>
//   );
// }