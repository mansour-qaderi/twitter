interface TooltipProps {
  children: React.ReactNode;
  text: string;
  position?: "top" | "right" | "bottom" | "left";
}

export const Tooltip = ({
  children,
  text = "Tooltip Text",
  position = "bottom",
}: TooltipProps) => {
  return (
    <div className="tooltip-trigger">
      {children}
      <div className={`tooltip tooltip-${position}`}>{text}</div>
    </div>
  );
};
