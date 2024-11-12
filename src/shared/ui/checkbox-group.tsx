import cn from 'classnames';
import React from 'react';
import * as styles from './checkbox-group.css';

type CheckboxGroupRootElement = React.ElementRef<'div'>;
type CheckboxItemElement = React.ElementRef<'div'>;
type CheckboxInputElement = React.ElementRef<'input'>;
type CheckboxDescriptionElement = React.ElementRef<'div'>;

interface BaseCheckboxProps extends React.ComponentPropsWithoutRef<'div'> {
  children: React.ReactNode;
  className?: string;
}

interface CheckboxGroupRootProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>,
    BaseCheckboxProps {}

interface CheckboxItemProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>,
    BaseCheckboxProps {}

interface CheckboxInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {}

interface CheckboxDescriptionProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, 'children'>,
    BaseCheckboxProps {}

const CheckboxGroupRoot = React.forwardRef<
  CheckboxGroupRootElement,
  CheckboxGroupRootProps
>(({ children, className, ...props }, forwardRef) => {
  return (
    <div
      ref={forwardRef}
      className={cn(styles.checkboxGroup, className)}
      {...props}
    >
      {children}
    </div>
  );
});

const CheckboxItem = React.forwardRef<CheckboxItemElement, CheckboxItemProps>(
  ({ children, className, ...props }, forwardedRef) => (
    <div
      ref={forwardedRef}
      className={cn(styles.checkboxItem, className)}
      {...props}
    >
      {children}
    </div>
  ),
);

const CheckboxInput = React.forwardRef<
  CheckboxInputElement,
  CheckboxInputProps
>(({ className, ...props }, forwardedRef) => (
  <input
    type="checkbox"
    ref={forwardedRef}
    className={cn(styles.checkboxInput, className)}
    {...props}
  />
));

const CheckboxDescription = React.forwardRef<
  CheckboxDescriptionElement,
  CheckboxDescriptionProps
>(({ children, className, ...props }, forwardedRef) => (
  <div
    ref={forwardedRef}
    className={cn(styles.checkboxDescription, className)}
    {...props}
  >
    {children}
  </div>
));

export {
  CheckboxDescription as Description,
  CheckboxInput as Input,
  CheckboxItem as Item,
  CheckboxGroupRoot as Root,
};

export type {
  CheckboxDescriptionProps as DescriptionProps,
  CheckboxInputProps as InputProps,
  CheckboxItemProps as ItemProps,
  CheckboxGroupRootProps as RootProps,
};
