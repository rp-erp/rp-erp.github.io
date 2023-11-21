import Image from "next/image";
import { assetPrefix } from "../config/constants";

export function Logo() {
  return (
    <Image
      src={`${assetPrefix}/logo.png`}
      alt="RP-ERP Knowledge Base homepage"
      width={30}
      height={30}
    />
  );
}
