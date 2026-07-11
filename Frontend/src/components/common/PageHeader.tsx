import type { ReactNode } from "react";

interface PageHeaderProps {

    title: string;

    subtitle: string;

    action?: ReactNode;

}

function PageHeader({

    title,

    subtitle,

    action,

}: PageHeaderProps) {

    return (

        <div className="mb-8 flex items-center justify-between">

            <div>

                <h1 className="text-4xl font-bold text-slate-800">

                    {title}

                </h1>

                <p className="mt-2 text-gray-500">

                    {subtitle}

                </p>

            </div>

            {action && (

                <div>

                    {action}

                </div>

            )}

        </div>

    );

}

export default PageHeader;