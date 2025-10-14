type MapEmbedProps = {
  className?: string;
  title?: string;
};

const MAP_URL =
  "https://www.google.com/maps?q=Rudina%20Perinac%201,%20Aljma%C5%A1,%20Hrvatska&output=embed";

export function MapEmbed({ className, title }: MapEmbedProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl shadow-soft ${className ?? ""}`}
    >
      <iframe
        src={MAP_URL}
        width="100%"
        height="100%"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title={title ?? "Lokacija Panorama House Aljmaš"}
        className="h-[320px] w-full border-0 md:h-[380px]"
      />
    </div>
  );
}

export default MapEmbed;
