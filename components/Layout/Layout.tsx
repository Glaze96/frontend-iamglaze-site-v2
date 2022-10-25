interface LayoutProps {
  children: any;
}

const Layout = ({ children }: LayoutProps) => {
  return <div className="flex flex-col w-full h-full lg:w-4/5 px-6 md:px-12 lg:px-24 mx-auto">{children}</div>;
};

export default Layout;
