import Link from "next/link";
import Image from "next/image";

function WhereMyCarNav() {
  return (
    <nav className="container flex items-center justify-center py-5 sticky top-6 z-50 bg-background/70 backdrop-blur-sm rounded-full">
        <div className="flex items-center gap-2">
          <Link href="/apps/wheremycar" className="flex items-center gap-1">
            <Image 
              src="/assets/logo.svg" 
              alt="WhereMyCar" 
              width={40} height={40}
              />
            <span className="text-2xl font-semibold text-foreground">WhereMyCar</span>
          </Link>
        </div>
    </nav>
  )
}

export default WhereMyCarNav