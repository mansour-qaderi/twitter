interface PageHeaderProps {
  children: React.ReactNode;
}

export const PageHeader = ({ children }: PageHeaderProps) => {
  return (
    <div className="w-full">
      <h2>Page Header</h2>
      {children}
    </div>
  );
};
