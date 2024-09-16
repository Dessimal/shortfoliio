// Define the props interface
interface SectionHeadingProps {
  mainHeading: string;
  subheading?: string;
  marginBottom?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  mainHeading,
  subheading,
  marginBottom,
}) => {
  return (
    <div className={`${marginBottom}|| mb-14`}>
      <h2 className="font-bold text-3xl text-slate-950">{mainHeading}</h2>
      <p className="text-gray-500 text-sm max-w-96">{subheading}</p>
    </div>
  );
};

export default SectionHeading;
