import LoginUserForm from "./_components/LoginUserForm";

import LayoutCentered from "./_components/LayoutCentered";
import SiteHeaderWithLogo from "./_components/SiteHeaderWithLogo";

export default function Home() {
  return (
    <LayoutCentered>
      <SiteHeaderWithLogo />
      <LoginUserForm className="max-w-lg" />
    </LayoutCentered>
  );
}
