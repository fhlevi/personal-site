export const ProjectCardShimmer = ({ variant = 1 }: { variant?: number }) => {
    const descriptionLines = variant % 2 === 0 ? 2 : 3;
    const tagCount = variant % 3 === 0 ? 2 : 3;

    return (
        <div className="rounded-lg overflow-hidden bg-white dark:bg-gray-800 shadow-sm">
            <div className="w-full h-48 md:h-64 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 animate-shimmer"
                style={{ backgroundSize: '200% 100%' }}>
            </div>
            <div className="p-6 space-y-4">
                <div className="h-7 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded animate-shimmer"
                    style={{ backgroundSize: '200% 100%', width: variant % 2 === 0 ? '70%' : '80%' }}>
                </div>
                <div className="space-y-2">
                    {Array.from({ length: descriptionLines }).map((_, i) => (
                        <div key={i}
                            className="h-4 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded animate-shimmer"
                            style={{ backgroundSize: '200% 100%', width: i === descriptionLines - 1 ? '60%' : '100%' }}>
                        </div>
                    ))}
                </div>
                <div className="flex gap-2 pt-2">
                    {Array.from({ length: tagCount }).map((_, i) => (
                        <div key={i}
                            className="h-6 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700 rounded-full animate-shimmer"
                            style={{ backgroundSize: '200% 100%', width: `${60 + (i * 10)}px` }}>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};