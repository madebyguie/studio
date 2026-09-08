import Link from "next/link";
import Image from "next/image";

export default function UpliftFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <Link href="/apps/uplift" className="wordmark">
          <Image src="/uplift/uplift-mark.png" alt="" width={24} height={24} />
          Uplift
        </Link>
        <nav className="footer-links">
          <Link href="/apps/uplift/privacy">Privacy Policy</Link>
          <Link href="/apps/uplift/terms">Terms of Use</Link>
          <a href="mailto:madebyguie@gmail.com">madebyguie@gmail.com</a>
        </nav>
        <p className="footer-meta">&copy; 2026 Uplift</p>
      </div>
    </footer>
  );
}
