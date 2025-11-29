import Image from "next/image";

export function LocalHostBadge() {
  return (
    <section className="bg-brand-sand/30 pt-8 pb-2">
      <div className="container mx-auto px-4 flex justify-center">
        <Image
          src="/local host logo.png"
          alt="Local Host badge"
          width={100}
          height={100}
          className="object-contain drop-shadow-md"
        />
      </div>
    </section>
  );
}

export default LocalHostBadge;
