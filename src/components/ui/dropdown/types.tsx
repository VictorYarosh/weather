export interface DropdownMenuProps {
  setCities: (value: string[]) => void;
}
export type UseDropdownMenuProps = Pick<DropdownMenuProps, 'setCities'>;
