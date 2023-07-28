import {
    Card,
    CardHeader,
    CardBody,
    Typography,
} from "@material-tailwind/react";

export function Details() {
    return (
        <Card className="mt-6 w-full md:w-[500px] p-4 mx-auto gap-4 flex-col md:flex-row items-stretch">
            <CardHeader className="w-full md:w-2/5 m-0">
                <img
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                    alt="card-image"
                    className="h-full w-full"
                />
            </CardHeader>
            <CardBody color="blue" className="w-full md:w-3/5 p-2 my-4 h-full m-0">
                <Card
                    color="blue"
                    variant="gradient"
                    className="w-full h-full  p-4 m-0 bg-blue-600"
                >
                    <CardHeader
                        floated={false}
                        shadow={false}
                        color="transparent"
                        className="m-0  rounded-none border-b border-white/10  text-center"
                    >
                        <Typography
                            variant="h5"
                            color="white"
                            className="font-normal uppercase"
                        >
                            Details
                        </Typography>
                    </CardHeader>
                    <hr />
                    <CardBody className="p-0">
                        <div className="flex justify-between">
                            <div className="w-1/2 flex flex-col items-start">
                                <Typography>Name:</Typography>
                                <Typography>Roll No:</Typography>
                                <Typography>Branch:</Typography>
                                <Typography>Year:</Typography>
                                <Typography>Block:</Typography>
                            </div>
                            <div className="w-1/2 flex flex-col items-start">
                                <Typography className="font-bold">
                                    John Doe
                                </Typography>
                                <Typography className="font-bold">
                                    123456789
                                </Typography>
                                <Typography className="font-bold">
                                    CSE
                                </Typography>
                                <Typography className="font-bold">2</Typography>
                                <Typography className="font-bold">A</Typography>
                            </div>
                        </div>
                    </CardBody>
                </Card>
            </CardBody>
        </Card>
    );
}
