export default function GenericButton({
  className,
  label,
}: {
  className: string;
  label: string;
}) {
  return (
    <div className={`button cursor-pointer border-none bg-none ${className}`}>
      {label}
    </div>
  );
}
