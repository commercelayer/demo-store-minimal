import Image from "next/image"

type HeroBannerProps = {
  imageUrl: string
}

export function HeroBanner({ imageUrl }: HeroBannerProps) {
  return (
    <section className="overflow-hidden rounded-lg bg-white">
      <div className="relative h-55 sm:h-75 lg:h-97.5">
        <Image
          src={imageUrl}
          alt="Featured backpack hero image"
          fill
          priority
          className="object-cover"
        />
      </div>
    </section>
  )
}
