type ButtonProps = {
  children: React.ReactNode;
  variant?: "primary" | "outline";
};

export default function Button({
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "rounded-lg px-6 py-3 text-sm font-semibold transition";

  const styles =
    variant === "primary"
      ? "bg-blue-900 text-white hover:bg-blue-800"
      : "border border-blue-900 bg-white text-blue-900 hover:bg-blue-50";

  return (
    <button className={`${base} ${styles}`}>
      {children}
    </button>
  );
}