const Button = ({ text, width, height, href }) => {
  return (
    <a href={href}>
      <button
        style={{ width: width, height: height }}
        className="font-sans text-pcream bg-pred rounded-[8px]"
      >
        {text}
      </button>
    </a>
  );
};

export default Button;
