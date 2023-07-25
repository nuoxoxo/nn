export interface InterfaceTodo {
  id: string;
  title: string;
  checked: boolean;
}

export interface InterfaceTodoList {
  todos: InterfaceTodo[];

}
