import { CheckboxGroup } from '@/shared/ui';

type TodoToggleProps = {
  id: string;
  isChecked: boolean;
  onToggle: (id: string) => void;
  className?: string;
};

export const TodoToggle = ({
  id,
  isChecked,
  onToggle,
  className,
}: TodoToggleProps) => {
  return (
    <CheckboxGroup.Input
      checked={isChecked}
      onChange={() => onToggle(id)}
      className={className}
    />
  );
};
