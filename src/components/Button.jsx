export const Button = ({ className="", onClick, size="default", children }) => {
  const baseClasses =
    "relative overflow-hidden rounded-full font-medium focus-visible:ring-2 focus-visible:ring-primary bg-highlight/80 text-primary-foreground hover:bg-highlight/90 ";
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;
  return (
    <button onClick={onClick} className={classes}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};
