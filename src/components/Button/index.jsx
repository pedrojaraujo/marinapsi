const Button = ({ text, scrollToRef }) => {
  const commonClasses = "font-bold 2xl:w-[200px] xl:w-[200px] lg:w-[180px] md:w-[180px] sm:w-[180px] h-[36px] lg:text-[16px] sm:text-[14px] font-trebuchet text-pcream bg-pred rounded-[8px]";

  const handleClick = () => {
    if (scrollToRef.current) {
      scrollToRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`button-header ${commonClasses}`}
    >
      {text}
    </button>
  );
};

export default Button;
