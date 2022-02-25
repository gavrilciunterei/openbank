export type User = {
  activePage: number;
  policyChecked: boolean;
  pages: Array<Page>;
  password: string;
  repeatPassword: string;
  track: string;
  responseApi: null | string;
};

export type Page = {
  done: boolean;
  text: string;
};
