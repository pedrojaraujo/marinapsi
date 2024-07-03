const Button = ({ text }) => {

  const commonClasses = "2xl:w-[200px] xl:w-[200px] lg:w-[180px] md:w-[135px] sm:w-[135px] h-[36px] lg:text-[18px] sm:text-[14px] font-trebuchet text-pcream bg-pred rounded-[8px]";

  return (

    <button
      className={`button-header ${commonClasses}`}>
      {text}
    </button>

  );
};

export default Button;

