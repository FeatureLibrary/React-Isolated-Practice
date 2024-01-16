import { Link } from "react-router-dom";
import React from "react";

// Acts as main layout
const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <header className="bg-gray-100 px-10 py-5">
                <Link to="/">
                    <h1 className="font-bold text-3xl">
                        Isolated React Practice
                    </h1>
                </Link>
            </header>
            <main className="p-10">{children}</main>
        </>
    );
};

export default Layout;
