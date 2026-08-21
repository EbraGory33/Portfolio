import { FooterNavColumn } from ".";
export function FooterNavigation() {
  return (
    <div className="flex w-full flex-col items-start px-4 py-6 text-xs lg:w-[56%] lg:px-16">
      <div className="flex w-full flex-wrap justify-between gap-8 md:gap-18">
        <FooterNavColumn column="General" />
        {/* <FooterNavColumn column="Specifics" />
        <FooterNavColumn column="More" /> */}
      </div>
    </div>
  );
}
