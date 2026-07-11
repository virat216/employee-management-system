import { Loader2 } from "lucide-react";

function LoadingSpinner() {

    return (

        <div className="flex justify-center p-10">

            <Loader2
                className="animate-spin"
                size={40}
            />

        </div>

    );

}

export default LoadingSpinner;