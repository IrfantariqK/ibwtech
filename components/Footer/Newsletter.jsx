import Button from "../ui/Button";
import { Input } from "../ui/Input";

export default function Newsletter() {
  return (
    <div>
      <h3 className="mb-4 text-lg font-semibold">Newsletter</h3>
      <p className="mb-4 text-sm">
        Stay updated with our latest news and offers.
      </p>
      <form className="space-y-2">
        <Input
          type="email"
          placeholder="Enter your email"
          className="w-full p-3 text-white placeholder-gray-400 transition duration-200 bg-transparent border border-purple-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          required
        />

        <Button type="submit" variant="secondary" className="w-full">
          Subscribe
        </Button>
      </form>
    </div>
  );
}
