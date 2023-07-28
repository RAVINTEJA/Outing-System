import {
    Card,
    Input,
    Checkbox,
    Button,
    Typography,
    Textarea,
  } from "@material-tailwind/react";
  
  import data from "@/../public/data.json"

  export default function NonLocalForm() {
    const user = data.students[0]

    return (
      <Card  shadow={false} className="p-4 m-8 w-full md:w-96 items-center">
        <Typography variant="h4" color="blue-gray">
          Non-Local Form
        </Typography>
        <Typography color="gray" className="mt-1 font-normal">
          Enter your details to apply.
        </Typography>
        <form className="mt-8 mb-2 w-full">
          <div className="mb-4 flex flex-col gap-6">
            <Input size="lg" label="Name" value={user.name} disabled/>
            <Input size="lg" label="Roll No" value={user.rollno}  disabled/>
            <Input size="lg" label="Year" value={user.year}  disabled/>
            <Input size="lg" label="Branch" value={user.branch}  disabled/>
            <Input size="lg" label="From" type="date" value={new Date().toISOString().split('T')[0]} min={(() => new Date().toISOString().split('T')[0])()}/>
            <Input size="lg" label="TO" type="date"/>
            <Textarea  label="Purpose" />
          </div>
          <Button className="mt-6" fullWidth>
            Apply
          </Button>
        </form>
      </Card>
    );
  }