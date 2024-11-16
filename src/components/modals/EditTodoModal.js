import { useState } from "react";
import { updateTodo } from "../../firebase";


export default function EditTodoModal ({ close, data }) {
    const [todo, setTodo] = useState(data.todo);
    const [done, setDone] = useState(data.done);

    const updateHandle = async () => {
        await updateTodo(data.id, { todo, done })
        close();
    }

    return (
       <>
       <div>
        <input
        type="text"
        checked={todo}
        onChange={(e) => setTodo(e.target.value)}
        /> 
        <label>
            <input
            type="checkbox"
            checked={done}
            onChange={(e) => setDone(e.target.checked)}
            /> Tamamlandı.
        </label>

        <br />
        <button
        onClick={updateHandle}
        >
            Kaydet
        </button>
       </div>
       </> 
    )
}