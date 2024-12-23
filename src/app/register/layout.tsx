import LayoutCentered from "../_components/LayoutCentered";
import SiteHeaderWithLogo from "../_components/SiteHeaderWithLogo";

export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <LayoutCentered>
      <SiteHeaderWithLogo />
      {children}
    </LayoutCentered>
  );
}
