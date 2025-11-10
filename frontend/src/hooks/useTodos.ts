import { useEffect, useState } from 'react';
import { fetchTodos, createTodo, updateTodo, deleteTodo } from '../services/api';

const useTodos = () => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const loadTodos = async () => {
            try {
                const fetchedTodos = await fetchTodos();
                setTodos(fetchedTodos);
            } catch (err) {
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        loadTodos();
    }, []);

    const addTodo = async (todo) => {
        try {
            const newTodo = await createTodo(todo);
            setTodos((prevTodos) => [...prevTodos, newTodo]);
        } catch (err) {
            setError(err);
        }
    };

    const editTodo = async (id, updatedTodo) => {
        try {
            const updated = await updateTodo(id, updatedTodo);
            setTodos((prevTodos) =>
                prevTodos.map((todo) => (todo.id === id ? updated : todo))
            );
        } catch (err) {
            setError(err);
        }
    };

    const removeTodo = async (id) => {
        try {
            await deleteTodo(id);
            setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
        } catch (err) {
            setError(err);
        }
    };

    return { todos, loading, error, addTodo, editTodo, removeTodo };
};

export default useTodos;