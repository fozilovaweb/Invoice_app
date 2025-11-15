import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { buttonVariants } from "./ui/button";
import { PlusCircleIcon } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";

function AddElementSheet() {
  return (
    <Sheet>
      <SheetTrigger
        className={`${buttonVariants({ variant: "default" })} rounded-full!`}
      >
        <PlusCircleIcon /> New Invoice
      </SheetTrigger>
      <SheetContent className="h-[85vh]" side="bottom">
        <SheetHeader>
          <SheetTitle>New Invoice</SheetTitle>
          <SheetDescription>Add a new element</SheetDescription>
        </SheetHeader>
        <form className="p-5">
          <fieldset className="mb-10">
            <legend className="font-bold text-[#7C5DFA] mb-5 ">
              Bill From
            </legend>
            <div className="grid w-full  items-center gap-3 mb-5">
              <Label htmlFor="senderAddress.street">Street Address</Label>
              <Input
                type="text"
                id="senderAddress.street"
                name="senderAddress.street"
              />
            </div>

            <div className="flex gap-6">
              <div className="grid w-full  items-center gap-3">
                <Label htmlFor="senderAddress.city">City</Label>
                <Input
                  type="text"
                  id="senderAddress.city"
                  name="senderAddress.city"
                />
              </div>
              <div className="grid w-full  items-center gap-3">
                <Label htmlFor="senderAddress.postCode">Post Code</Label>
                <Input
                  type="text"
                  id="senderAddress.postCode"
                  name="senderAddress.postCode"
                />
              </div>
              <div className="grid w-full  items-center gap-3">
                <Label htmlFor="senderAddress.country">Country</Label>
                <Input
                  type="text"
                  id="senderAddress.country"
                  name="senderAddress.country"
                />
              </div>
            </div>
          </fieldset>

          <fieldset className="mb-10">
            <legend className="font-bold text-[#7C5DFA] mb-5 ">Bill To</legend>

            <div className="grid w-full  items-center gap-3 mb-5">
              <Label htmlFor="clientName">Client's Name</Label>
              <Input type="text" id="clientName" name="clientName" />
            </div>

            <div className="grid w-full  items-center gap-3 mb-5">
              <Label htmlFor="clientEmail">Client's Email</Label>
              <Input
                type="email"
                id="clientEmail"
                name="clientEmail"
                placeholder="e.g.email@example.com"
              />
            </div>

            <div className="grid w-full  items-center gap-3 mb-5">
              <Label htmlFor="clientAddress.street">Street Address</Label>
              <Input
                type="text"
                id="clientAddress.street"
                name="clientAddress.street"
              />
            </div>

            <div className="flex gap-6">
              <div className="grid w-full  items-center gap-3">
                <Label htmlFor="clientAddress.city">City</Label>
                <Input
                  type="text"
                  id="clientAddress.city"
                  name="clientAddress.city"
                />
              </div>
              <div className="grid w-full  items-center gap-3">
                <Label htmlFor="clientAddress.postCode">Post Code</Label>
                <Input
                  type="text"
                  id="clientAddress.postCode"
                  name="clientAddress.postCode"
                />
              </div>
              <div className="grid w-full  items-center gap-3">
                <Label htmlFor="clientAddress.country">Country</Label>
                <Input
                  type="text"
                  id="clientAddress.country"
                  name="clientAddress.country"
                />
              </div>
            </div>
          </fieldset>
        </form>
      </SheetContent>
    </Sheet>
  );
}

export default AddElementSheet;
