import NavPageLinks from "./nav-page-links";
import NavSocialLinks from "./nav-social-links";

export default function MainNav() {
  return (
    <nav className="hidden sm:block sm:w-[192px] lg:w-3xs pt-6 h-full">
      <div className="flex flex-col fixed justify-between">
        <NavPageLinks />
        <NavSocialLinks />
      </div>
    </nav>
  );
}
