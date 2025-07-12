import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TerminalIcon } from "./icons";

const GRID_SIZE = 20;
const TILE_SIZE = 20;

type Position = { x: number; y: number };

export const SnakeGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const gameStateRef = useRef<{
    snake: Position[];
    food: Position;
    dx: number;
    dy: number;
    currentScore: number;
    resetGame: () => void;
  } | null>(null);

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Game state
    let snake: Position[] = [{ x: 10, y: 10 }];
    let food: Position = { x: 5, y: 5 };
    let dx = 1;
    let dy = 0;
    let gameLoop: NodeJS.Timeout;
    let currentScore = 0;

    const drawSnake = () => {
      ctx.fillStyle = '#10b981';
      snake.forEach(segment => {
        ctx.fillRect(segment.x * TILE_SIZE, segment.y * TILE_SIZE, TILE_SIZE - 1, TILE_SIZE - 1);
      });
    };

    const drawFood = () => {
      ctx.fillStyle = '#ef4444';
      ctx.fillRect(food.x * TILE_SIZE, food.y * TILE_SIZE, TILE_SIZE - 1, TILE_SIZE - 1);
    };

    const generateFood = () => {
      food = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE)
      };
    };

    const gameStep = () => {
      if (gameOver) return;

      const head = { x: snake[0].x + dx, y: snake[0].y + dy };

      // Check wall collision
      if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
        setGameOver(true);
        return;
      }

      // Check self collision
      if (snake.some(segment => segment.x === head.x && segment.y === head.y)) {
        setGameOver(true);
        return;
      }

      snake.unshift(head);

      // Check food collision
      if (head.x === food.x && head.y === food.y) {
        currentScore += 10;
        setScore(currentScore);
        generateFood();
      } else {
        snake.pop();
      }

      // Clear canvas and redraw
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawSnake();
      drawFood();
    };

    const resetGame = () => {
      snake = [{ x: 10, y: 10 }];
      food = { x: 5, y: 5 };
      dx = 1;
      dy = 0;
      currentScore = 0;
      setScore(0);
      setGameOver(false);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawSnake();
      drawFood();
    };

    // Store resetGame function in ref for external access
    gameStateRef.current = { snake, food, dx, dy, currentScore, resetGame };

    const handleKeyDown = (e: KeyboardEvent) => {
      // Only handle keys when focused
      if (!isFocused) return;
      
      // Prevent default behavior for arrow keys
      if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
        e.preventDefault();
      }

      switch(e.key) {
        case 'ArrowUp':
          if (dy !== 1) {
            dx = 0;
            dy = -1;
          }
          break;
        case 'ArrowDown':
          if (dy !== -1) {
            dx = 0;
            dy = 1;
          }
          break;
        case 'ArrowLeft':
          if (dx !== 1) {
            dx = -1;
            dy = 0;
          }
          break;
        case 'ArrowRight':
          if (dx !== -1) {
            dx = 1;
            dy = 0;
          }
          break;
      }
    };

    // Initialize game
    canvas.width = GRID_SIZE * TILE_SIZE;
    canvas.height = GRID_SIZE * TILE_SIZE;
    window.addEventListener("keydown", handleKeyDown);
    gameLoop = setInterval(gameStep, 150);

    return () => {
      clearInterval(gameLoop);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [gameOver, isFocused]);

  // ... (keep rest of the component)

  return (
    <motion.div 
      className="mt-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 1 }}
    >
      <div className="flex items-center gap-2 mb-4">
        <TerminalIcon className="w-5 h-5 text-green-400" />
        <span className="text-green-400 font-mono">python_snake.py</span>
      </div>
      <div className="bg-black/50 border border-green-400/30 rounded-lg p-4 font-mono text-sm text-green-300">
        {gameOver ? (
          <div className="flex flex-col items-center justify-center h-40">
            <p className="text-red-400 mb-2">Game Over!</p>
            <p className="mb-4">Score: {score}</p>
            <button
              onClick={() => gameStateRef.current?.resetGame()}
              className="px-3 py-1 bg-green-700/50 border border-green-400/30 rounded hover:bg-green-600/50 transition"
            >
              Play Again
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-between mb-2">
              <span>Score: {score}</span>
              <span className={`${isFocused ? 'text-green-400' : 'text-green-400/70'}`}>
                {isFocused ? 'Playing...' : 'Click then use arrow keys'}
              </span>
            </div>
            <div 
              ref={containerRef}
              tabIndex={0}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              className="outline-none"
            >
              <canvas 
                ref={canvasRef} 
                className={`w-full h-40 bg-black/70 border ${isFocused ? 'border-green-400' : 'border-green-400/20'} rounded`}
              />
            </div>
          </>
        )}
      </div>
    </motion.div>
  );
};