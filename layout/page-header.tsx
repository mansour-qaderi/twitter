interface PageHeaderProps {
  children: React.ReactNode;
  header: React.ReactNode;
}

export const PageHeader = ({ children, header }: PageHeaderProps) => {
  return (
    <div className="w-full">
      {header}
      {children}
    </div>
  );
};
