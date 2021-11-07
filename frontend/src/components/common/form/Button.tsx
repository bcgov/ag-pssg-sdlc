import './Button.scss';

import classnames from 'classnames';
import React, { CSSProperties, MouseEventHandler } from 'react';
import ButtonBase, { ButtonProps as ButtonPropsBase } from 'react-bootstrap/Button';
import Spinner from 'react-bootstrap/Spinner';

export type ButtonProps = ButtonPropsBase & {
  /** Adds a custom class to the button element of the <Button> component */
  className?: string;
  /** Allow for direct style overrides */
  style?: CSSProperties;
  /** Sets an icon before the text. Can be any icon from Evergreen or a custom element. */
  icon?: React.ReactNode;
  /** When true, the button is disabled. isLoading also sets the button to disabled. */
  disabled?: boolean;
  /** Button click handler */
  onClick?: MouseEventHandler<any>;
  /** Display a spinner when the form is being submitted */
  showSubmitting?: boolean;
  /** if true and showSubmitting is true, display the spinner */
  isSubmitting?: boolean;
  /** default button text value */
  defaultValue?: string | number | string[];
  /** overwrite type from React.HTMLAttributes */
  'aria-relevant'?: 'text' | 'all' | 'additions' | 'additions text' | 'removals';
};

export const Button: React.FC<ButtonProps & React.HTMLAttributes<HTMLElement>> = ({
  showSubmitting,
  isSubmitting,
  disabled,
  icon,
  children,
  className,
  ...rest
}) => {
  const classes = classnames({
    Button: true,
    'Button--disabled': disabled,
    'Button--icon-only': (children === null || children === undefined) && icon,
    [className!]: className,
  });
  return (
    <ButtonBase className={classes} disabled={disabled} {...rest}>
      {icon && <div className="Button__icon">{icon}</div>}
      {children && <div className="Button__value">{children}</div>}
      {showSubmitting && isSubmitting && (
        <Spinner
          animation="border"
          size="sm"
          role="status"
          as="span"
          style={{ marginLeft: '.8rem', padding: '.8rem' }}
        />
      )}
    </ButtonBase>
  );
};
