import { Dialog } from "@headlessui/react";
import Button from "../ui/Button"; // Default import
import { Label } from "../ui/Label"; // Named import
import { Input } from "../ui/Input"; // Named import
import { Textarea } from "../ui/Textarea"; // Named import

export default function JobDialog({ isOpen, onClose, job }) {
  const title = job?.title || "Job Title";
  const department = job?.department || "unknown department";

  return (
    <Dialog open={isOpen} onClose={onClose}>
      <div className="fixed inset-0 bg-black bg-opacity-30" />
      <div className="fixed inset-0 flex items-center justify-center">
        <Dialog.Panel className="max-w-md p-6 mx-auto bg-white rounded-lg">
          <Dialog.Title className="text-xl font-bold">{title}</Dialog.Title>
          <Dialog.Description className="mt-2 text-gray-600">
            Apply for {title} in {department} department.
          </Dialog.Description>
          <form className="mt-4 space-y-4">
            <div>
              <Label htmlFor="apply-name">Full Name</Label>
              <Input id="apply-name" name="name" />
            </div>
            <div>
              <Label htmlFor="apply-email">Email</Label>
              <Input id="apply-email" name="email" type="email" />
            </div>
            <div>
              <Label htmlFor="apply-resume">Resume/CV</Label>
              <Input id="apply-resume" name="resume" type="file" />
            </div>
            <div>
              <Label htmlFor="apply-cover-letter">Cover Letter</Label>
              <Textarea id="apply-cover-letter" name="coverLetter" rows={4} />
            </div>
          </form>
          <div className="flex justify-between mt-6">
            <Button onClick={onClose}>Close</Button>
            <Button
              type="submit"
              className="text-white bg-purple-600 hover:bg-purple-700"
            >
              Submit Application
            </Button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
