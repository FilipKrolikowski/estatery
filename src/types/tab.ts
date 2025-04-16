export interface TabType {
  tab: {
    name: string;
    type: string;
  };
  isActive: boolean;
  onClick: (t: string) => void;
}
