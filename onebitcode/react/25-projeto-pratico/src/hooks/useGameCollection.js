import { useState, useEffect } from "react";

export default function useGameCollection() {
    const [games, setGames] = useState(() => {
        try {
            const storedGames = localStorage.getItem("obc-game-lib");
            if (!storedGames) return [];
            const parsed = JSON.parse(storedGames);
            return Array.isArray(parsed) ? parsed : [];
        } catch (error) {
            console.error("Erro ao ler do localStorage:", error);
            return [];
        }
    });

    useEffect(() => {
        const syncWithStorage = () => {
            try {
                const storedGames = localStorage.getItem("obc-game-lib");
                if (storedGames) {
                    const parsed = JSON.parse(storedGames);
                    if (Array.isArray(parsed)) {
                        setGames(parsed);
                    }
                }
            } catch (error) {
                console.error("Erro ao sincronizar com o localStorage:", error);
            }
        };

        window.addEventListener("storage", syncWithStorage);
        return () => window.removeEventListener("storage", syncWithStorage);
    }, []);

    const addGame = ({ title, cover }) => {
        if (!title || !cover) return;

        const id = Date.now() + Math.floor(Math.random() * 1000);
        const game = { id, title, cover };

        setGames(prev => {
            const updated = [...prev, game];
            localStorage.setItem("obc-game-lib", JSON.stringify(updated));
            return updated;
        });
    };

    const removeGame = (id) => {
        setGames(prev => {
            const updated = prev.filter(game => game.id !== id);
            localStorage.setItem("obc-game-lib", JSON.stringify(updated));
            return updated;
        });
    };

    return { games, addGame, removeGame };
}
