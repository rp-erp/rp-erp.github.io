import Image from "next/image";

export function Logo() {
  return (
    <Image
      src={`/rp-logo.jpeg`}
      alt="RP-ERP Knowledge Base"
      width={30}
      height={30}
    />
  );
}
