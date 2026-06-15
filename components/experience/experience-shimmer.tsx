// Shimmer Components
export const ExperienceShimmerMobile = () => (
    <div className="flex gap-4 h-1/2">
        <div className="relative flex justify-center space-y-10">
            <div className="h-12 w-12 p-2 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="h-full w-full rounded-full bg-gray-300 animate-pulse"></div>
            </div>
            <div className="absolute border-r-2 border-dashed border-gray-300 h-full top-12"></div>
        </div>
        <div className="flex flex-col space-y-3 flex-1">
            <div className="h-12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-3/4 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
            <div className="h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-1/2 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
            <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-full animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
            <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-5/6 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
            <div className="h-5 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-1/3 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
        </div>
    </div>
);

export const ExperienceShimmerDesktop = () => (
    <div className="flex flex-row gap-4">
        <div className="flex flex-col items-end justify-start text-right space-y-3 w-1/2">
            <div className="h-12 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-3/4 ml-auto animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
            <div className="h-8 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-1/2 ml-auto animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
        </div>
        <div className="relative flex justify-center space-y-10">
            <div className="h-12 w-12 p-2 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center">
                <div className="h-full w-full rounded-full bg-gray-300 animate-pulse"></div>
            </div>
            <div className="absolute border-r-2 border-dashed border-gray-300 h-full top-12"></div>
        </div>
        <div className="flex flex-col space-y-3 w-1/2">
            <div className="h-10 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-3/4 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
            <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-full animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
            <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-5/6 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
            <div className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 rounded w-4/5 animate-shimmer" style={{ backgroundSize: '200% 100%' }}></div>
        </div>
    </div>
);