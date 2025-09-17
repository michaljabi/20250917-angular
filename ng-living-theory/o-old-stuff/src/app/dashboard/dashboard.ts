export interface Dashboard<E> {
  title: string;
  elements: Record<string, E>;
}
