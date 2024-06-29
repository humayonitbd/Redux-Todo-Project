import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";





const Todo = () => {
    return (
      <Container>
      <header className="my-10 font-semibold text-xl text-center">This is todo Header</header>
      <TodoContainer />
      </Container>
    );
};

export default Todo;