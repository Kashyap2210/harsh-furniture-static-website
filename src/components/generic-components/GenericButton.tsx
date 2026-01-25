export default function GenericButton({
  className,
  label,
  onClick,
}: {
  className: string;
  label: string;
  onClick?: () => void;
}) {
  return (
    <div className={`button cursor-pointer border-none bg-none ${className}`}>
      <button onClick={onClick}>{label}</button>
    </div>
  );
}
