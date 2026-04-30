import useTodo from "../../hooks/useTodo";

export default function Todo() {
      const {title} = useTodo();

      return(
        <div>
            <h1>{title}</h1>
        </div>
      )
}