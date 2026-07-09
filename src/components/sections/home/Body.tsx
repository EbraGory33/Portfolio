import { Divider } from "@/components/layout";

export function Body() {
  return (
    <div className="relative container flex flex-col max-sm:px-1">
      <div className="grid flex-1 grid-cols-[12px_1fr_12px] lg:grid-cols-[32px_1fr_32px]">
        <Divider />
        <div className="flex h-100 items-center justify-center p-4">
          <h1 className="text-2xl font-bold">Home</h1>
        </div>
        <Divider />
      </div>
    </div>
  );
}
