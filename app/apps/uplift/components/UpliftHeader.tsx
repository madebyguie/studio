import Link from "next/link";
import Image from "next/image";

export default function UpliftHeader() {
  return (
    <header className="site-header">
      <div className="wrap">
        <Link href="/apps/uplift" className="wordmark">
          <Image src="/uplift/uplift-mark.png" alt="" width={28} height={28} />
          Uplift
        </Link>
        <a href="/apps/uplift#download" className="btn btn-primary btn-header">
          Download
        </a>
      </div>
    </header>
  );
}
