export interface DropdownMenuProps {
  setCities: (value: string[]) => void;
  cities: string[];
  index: number;
}
export type UseDropdownMenuProps = Pick<
  DropdownMenuProps,
  'setCities' | 'index' | 'cities'
>;
