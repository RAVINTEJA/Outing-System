import React from "react";
import { ComplexNavbar } from "../components/NavBar";
import { NonLocalForm } from "../components/NonLocalForm";

const index = () => {
    return (
        <div className="flex flex-col items-center">
            <ComplexNavbar />
            <NonLocalForm />
        </div>
    );
};

export default index;
