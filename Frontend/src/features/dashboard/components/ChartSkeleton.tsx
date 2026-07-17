import Card from "../../../components/common/Card";
import Skeleton from "../../../components/common/Skeleton";

export default function ChartSkeleton() {

    return (

        <Card>

            <Skeleton className="mb-6 h-7 w-56" />

            <div className="space-y-3">

                <Skeleton className="h-6 w-full" />

                <Skeleton className="h-6 w-11/12" />

                <Skeleton className="h-6 w-10/12" />

                <Skeleton className="h-6 w-9/12" />

                <Skeleton className="h-6 w-8/12" />

                <Skeleton className="h-6 w-7/12" />

                <Skeleton className="mt-8 h-4 w-full" />

            </div>

        </Card>

    );

}