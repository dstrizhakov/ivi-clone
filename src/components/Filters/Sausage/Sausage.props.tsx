interface iSausage {
  id: number;
  title: string;
  enTitle: string;
}

export interface SausageProps {
  sausage: iSausage;
  //change after adding redux
  set: () => unknown;
}
