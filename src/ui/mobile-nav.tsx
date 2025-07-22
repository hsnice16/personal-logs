import NavPageLinks from "./nav-page-links";
import NavSocialLinks from "./nav-social-links";

type MobileNavProps = {
  closeNav: () => void;
};

export default function MobileNav({ closeNav }: MobileNavProps) {
  return (
    <nav className="fixed left-0 top-0 bottom-0 bg-neutral-100/70 z-10 backdrop-blur-md z-10 flex flex-col justify-between p-6 w-2xs">
      <NavPageLinks closeNav={closeNav} />
      <NavSocialLinks />
    </nav>
  );
}
