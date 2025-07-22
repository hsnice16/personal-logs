import { clsx } from "clsx";
import NavPageLinks from "./nav-page-links";
import NavSocialLinks from "./nav-social-links";

type MobileNavProps = {
  show: boolean;
  closeNav: () => void;
};

export default function MobileNav({ show, closeNav }: MobileNavProps) {
  return (
    <nav
      className={clsx(
        "transition-all duration-500 w-2xs p-6 fixed left-0 top-0 bottom-0 bg-neutral-100/80 z-10 backdrop-blur-md z-10 flex flex-col justify-between",
        {
          "translate-x-0": show,
          "-translate-x-100": !show,
        }
      )}
    >
      <NavPageLinks closeNav={closeNav} />
      <NavSocialLinks />
    </nav>
  );
}
