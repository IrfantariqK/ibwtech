import Brand from "./Brand";
import QuickLinks from "./QuickLinks";
import ContactUs from "./ContactUs";
import Newsletter from "./Newsletter";
import { Separator } from "../ui/Separator";

export default function Footer() {
  return (
    <footer className="py-12 text-white bg-gradient-to-r from-purple-800 to-indigo-900">
      <div className="container px-4 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <Brand />
          <QuickLinks />
          <ContactUs />
          <Newsletter />
        </div>
        <Separator className="my-8 bg-white/20" />
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="text-sm">&copy; 2023 IBWTEAM. All rights reserved.</p>
          <nav className="mt-4 md:mt-0">
            <ul className="flex space-x-4">
              {["Privacy Policy", "Terms of Service", "Cookie Policy"].map(
                (policy) => (
                  <li key={policy}>
                    <a
                      href="#"
                      className="text-sm transition-colors hover:text-purple-300"
                    >
                      {policy}
                    </a>
                  </li>
                )
              )}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  );
}
