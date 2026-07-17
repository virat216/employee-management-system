import Skeleton from "../../../components/common/Skeleton";

export default function DashboardGridSkeleton() {

    return (

        <div
            className="
                grid
                grid-cols-1
                md:grid-cols-2
                xl:grid-cols-4
                gap-6
            "
        >

            {[1, 2, 3, 4].map((item) => (

                <div
                    key={item}
                    className="
                        rounded-xl
                        border
                        border-gray-200
                        bg-white
                        p-6
                        shadow-sm
                    "
                >

                    <div className="flex items-center justify-between">

                        <Skeleton className="h-6 w-28" />

                        <Skeleton className="h-12 w-12 rounded-full" />

                    </div>

                    <Skeleton className="mt-6 h-10 w-20" />

                    <div className="mt-6 space-y-3">

                        <Skeleton className="h-4 w-32" />

                        <Skeleton className="h-4 w-28" />

                    </div>

                </div>

            ))}

        </div>

    );

}