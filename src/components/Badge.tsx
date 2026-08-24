type BadgeProps = {
  label: string;
  tone?: "success" | "warning" | "info";
};

export function Badge({ label, tone = "info" }: BadgeProps) {
  return (
    <span>
      {label} - {tone}
    </span>
  );
}