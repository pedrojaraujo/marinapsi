const Button = ({ text, scrollToRef }) => {
  const commonClasses = "2xl:w-[120px] xl:w-[120px] lg:w-[120px] md:w-[120px] sm:w-[120px] h-[36px] 2xl:text-[14px] xl:text-[14px] lg:text-[14px] sm:text-[12px] font-trebuchet text-pcream bg-pred rounded-[8px]";

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
