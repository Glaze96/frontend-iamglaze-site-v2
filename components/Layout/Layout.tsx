interface LayoutProps {
  children: any;
}

const Layout = ({ children }: LayoutProps) => {
  return <div className="flex flex-col w-4/5 md:w-3/4 h-full mx-auto">{children}</div>;
};

export default Layout;
