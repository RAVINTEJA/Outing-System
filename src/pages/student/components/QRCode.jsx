
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@material-tailwind/react"

export default function QRCode() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">Edit Profile</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] ">
        <DialogHeader>
          <DialogTitle className="text-center">Scan the QR Code</DialogTitle>
        </DialogHeader>
        <hr className="bg-dark"/>
        <div className="py-4">
          
        </div>
      </DialogContent>
    </Dialog>
  )
}
