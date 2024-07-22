type Props = {
  children: React.ReactNode;
};

const Button = ({ children }: Props) => {
  return (
    <button className="bg-primary transition hover:bg-[#a47855] px-8 py-1 shadow-lg rounded-3xl text-white">
      {children}
    </button>
  );
};

export default Button;
