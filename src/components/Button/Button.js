import React from "react";
import { FormattedMessage } from "react-intl";
import { PlusOutline } from "../AllSvgIcon";
import ButtonStyle, { SelectBtnStyle } from "./Button.style";

const Button = ({
  type,
  size,
  title,
  intlButtonId,
  colors,
  variant,
  icon,
  disabled,
  iconPosition,
  iconStyle,
  onClick,
  loader,
  loaderColor,
  isLoading,
  className,
  fullwidth,
  style,
  id,
  ...props
}) => {
  // Checking button loading state
  const buttonIcon =
    isLoading !== false ? (
      <>{loader ? loader : "loading...."}</>
    ) : (
      icon && (
        <span className="btn-icon" style={iconStyle}>
          {icon}
        </span>
      )
    );

  // set icon position
  const position = iconPosition || "right";

  return (
    <ButtonStyle
      type={type}
      id={id}
      className={`reusecore__button ${disabled ? "disabled" : ""} ${
        isLoading ? "isLoading" : ""
      } ${className ? className : ""}`.trim()}
      icon={icon}
      disabled={disabled}
      icon-position={position}
      onClick={onClick}
      colors={colors}
      variant={variant}
      fullwidth={fullwidth}
      style={style}
      size={size}
      {...props}
    >
      {position === "left" && buttonIcon}
      {title && !isLoading && (
        <span className="btn-text">
          <FormattedMessage
            id={intlButtonId ? intlButtonId : "intlButtonId"}
            defaultMessage={title}
          />
        </span>
      )}
      {position === "right" && buttonIcon}
    </ButtonStyle>
  );
};

Button.defaultProps = {
  disabled: false,
  isLoading: false,
  type: "button",
};

const SelectButton = ({
  disabled,
  onClick,
  className,
  selected,
  style,
  ...props
}) => {
  return (
    <SelectBtnStyle
      className={`reusecore__button ${disabled ? "disabled" : ""} ${
        selected ? "selected" : ""
      } ${className ? className : ""}`.trim()}
      disabled={disabled}
      onClick={onClick}
      style={style}
      {...props}
    >
      <PlusOutline width="14px" height="14px" />
    </SelectBtnStyle>
  );
};

export default Button;
export { SelectButton };
