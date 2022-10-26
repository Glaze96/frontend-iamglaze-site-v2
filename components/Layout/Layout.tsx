interface LayoutProps {
  children: any;
}

const Layout = ({ children }: LayoutProps) => {
  return <div className="flex flex-col w-full h-full mx-auto">{children}</div>;
};

export default Layout;
