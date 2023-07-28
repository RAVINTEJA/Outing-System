import React from "react";
import { ComplexNavbar } from "./components/NavBar";
import { Details } from "./components/Details";
import { Button } from "@material-tailwind/react";
import Link from "next/link";
import { QRCode } from "./components/QRCode";

const index = () => {
    return (
        <div className="bg-light flex flex-col items-center">
            <ComplexNavbar />
            <Details />
            <div>
                <QRCode />
                <Link href="/student/nonlocal">
                    <Button color="blue" ripple="light" className="m-4">
                        Non Local
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default index;
