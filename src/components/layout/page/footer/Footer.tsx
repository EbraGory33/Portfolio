import { FooterBottom, FooterBrand, FooterNavigation, FooterPattern } from ".";

export function Footer() {
  return (
    <footer className="container max-sm:px-1">
      <div className="relative border">
        <div className="flex flex-col lg:flex-row">
          <FooterBrand />
          <FooterNavigation />
        </div>
        <FooterBottom />
        <FooterPattern />
      </div>
    </footer>
  );
}
