import { FC, useEffect } from "react";

const PageNotFound: FC = () => {
    useEffect(() => {
        document.title = "404 Page Not Found"
    }, [])
    return (
        <div className="flex items-center justify-center h-screen bg-gray-200">
            <div className="text-center">
                <h1 className="text-6xl font-bold text-red-500 mb-4">404</h1>
                <p className="text-2xl font-semibold mb-8">Page Not Found</p>
                <p className="text-gray-700">Oops! The page you are looking for doesn't exist.</p>
            </div>
        </div>
    )
}

export default PageNotFound