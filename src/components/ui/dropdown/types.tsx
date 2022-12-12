export interface DropdownMenuProps {
  setCities: (value: string[]) => void;
  cities: string[];
}
export type UseDropdownMenuProps = Pick<
  DropdownMenuProps,
  'setCities' | 'cities'
>;
