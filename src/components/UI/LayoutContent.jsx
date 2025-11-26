// eslint-disable-next-line react/prop-types
const LayoutContent = ({ children, className = "", reverse = false }) => {
  return (
    <div className={`layout-content ${className} ${reverse ? "reverse" : ""}`}>
      {/* {children} */}
      <div className="layout-text">{children[0]}</div>
      <div className="layout-image">{children[1]}</div>
    </div>
  );
};

export default LayoutContent;
