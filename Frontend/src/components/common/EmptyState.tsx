function EmptyState({

    title,

}: {

    title: string;

}) {

    return (

        <div className="text-center py-16 text-gray-500">

            {title}

        </div>

    );

}

export default EmptyState;