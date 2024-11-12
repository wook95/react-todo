import * as RadixToast from '@radix-ui/react-toast';
import cn from 'classnames';
import * as styles from './toast.css';

const Toast = ({ children, className, ...props }: RadixToast.ToastProps) => {
  return (
    <RadixToast.Root {...props} className={cn(styles.toastRoot, className)}>
      {children}
    </RadixToast.Root>
  );
};

const ToastTitle = ({
  children,
  className,
  ...props
}: RadixToast.ToastTitleProps) => {
  return (
    <RadixToast.Title {...props} className={cn(styles.toastTitle, className)}>
      {children}
    </RadixToast.Title>
  );
};

const ToastDescription = ({
  children,
  className,
  ...props
}: RadixToast.ToastDescriptionProps) => {
  return (
    <RadixToast.Description {...props} className={className}>
      {children}
    </RadixToast.Description>
  );
};

const ToastAction = ({
  children,
  className,
  ...props
}: RadixToast.ToastActionProps) => {
  return (
    <RadixToast.Action {...props} className={className}>
      {children}
    </RadixToast.Action>
  );
};

const ToastClose = ({
  children,
  className,
  ...props
}: RadixToast.ToastCloseProps) => {
  return (
    <RadixToast.Close {...props} className={className}>
      {children}
    </RadixToast.Close>
  );
};

const Root = Toast;
const Title = ToastTitle;
const Description = ToastDescription;
const Action = ToastAction;
const Close = ToastClose;

export { Action, Close, Description, Root, Title };
