import Image from "next/image"
import Link from "next/link"

export const Logo = () => {
  return (
    <Link href="/" title="Página Inicial">
      <Image src="/logo.svg" alt='site' width={150} height={50}></Image>
    </Link>
  )
}