import { TApp } from '@/types/apps.type';
import Image from 'next/image';
import React from 'react';


type TAppProps = {
    app: TApp;
};
const AppCard = ({ app }: TAppProps) => {
    return (
        <div>
            <div className="w-full max-w-sm rounded-2xl border
             border-gray-200 bg-white p-5 shadow-sm transition 
             duration-300 hover:-translate-y-1 hover:shadow-lg"> 

             {/* App Image + Info */} 
             <div className="flex gap-4"> 
                <Image src={app.image} alt={app.title} width={80} 
                height={80} className="h-20 w-20 rounded-2xl 
                object-cover" /> <div className="min-w-0 flex-1"> 
                <h2 className="truncate text-lg font-bold text-gray-800"> 
                {app.title} </h2> <p className="mt-1 text-sm text-gray-500"> 
                {app.companyName} </p> {/* Rating */} 
            <div className="mt-2 flex items-center gap-2"> 
                 <span className="font-semibold text-gray-700"> 
                 {app.ratingAvg} </span> <span className="text-yellow-500">
                  ★ </span> <span className="text-xs text-gray-400">
                  ({app.reviews}) </span> </div> </div> </div>
 {/* Description */}
                 <p className="mt-4 line-clamp-2 text-sm
               leading-6 text-gray-500"> {app.description} </p>

           {/* App Information */} 
           <div className="mt-5 grid
                  grid-cols-2 gap-3 border-y border-gray-100 py-4">
                         <div> <p className="text-xs text-gray-400"> Downloads 
    </p> <p className="mt-1 font-semibold text-gray-700"> 
          {app.downloads} </p> </div> <div> <p className="text-xs
      text-gray-400"> Size </p> <p className="mt-1 font-semibold
 text-gray-700"> {app.size} MB </p> </div> </div> 

 {/* Button */}
 <button className="mt-4 w-full rounded-xl bg-blue-600 py-3 text-sm 
 font-semibold text-white transition hover:bg-blue-700"> View Details 
 </button> </div>
        </div>
    );
};

export default AppCard;