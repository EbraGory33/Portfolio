// TODO: UnderDevelopment
import { UnderDevelopment } from "@/components/pages";

const unFinshed = true;

export default function Page() {
  if (unFinshed) return <UnderDevelopment />;
  return <></>;
}
