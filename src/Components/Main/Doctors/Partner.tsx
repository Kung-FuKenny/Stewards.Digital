type Props = {
  doc: {
    img: string;
  };
};

const Partner = ({ doc }: Props) => {
  return (
    <div className="flex justify-center items-center">
      <div className="bg-[#FDFDFD] p-4 rounded-full overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105">
        <img className="w-24 h-24 object-cover" src={doc.img} alt="Partner" />
      </div>
    </div>
  );
};

export default Partner;

