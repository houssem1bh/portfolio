export function SectionHeading({
  heading,
  subheading,
  id,
}: {
  heading: string;
  subheading?: string;
  id?: string;
}) {
  return (
    <div className="max-w-2xl">
      <h2 id={id} className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {heading}
      </h2>
      {subheading ? (
        <p className="mt-3 text-base text-muted-foreground">{subheading}</p>
      ) : null}
    </div>
  );
}
