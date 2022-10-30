interface SectionDividerProps {
  label: string;
}

const SectionDivider = ({ label }: SectionDividerProps) => {
  return (
    <div className="w-full flex place-items-center py-2 md:p-10">
      <h2 className="text-lg md:text-xl font-bold pr-5">
        {label}
      </h2>
      <div className="md:pl-12 w-full">
        <div className="flex-grow border-4 border-spacing-x-80"></div>
      </div>
    </div>
  );
};

export default SectionDivider;
