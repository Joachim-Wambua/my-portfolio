const InvertedButton = ({ content }) => {
  return (
    <>
      <button className="before:ease relative h-12 w-40 overflow-hidden border border-white shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-white before:text-black before:transition-all before:duration-300 hover:text-black hover:shadow-slate-600 text-white hover:before:-rotate-180">
        <span className="relative z-10">{content}</span>
      </button>
    </>
  );
};

export default InvertedButton;
