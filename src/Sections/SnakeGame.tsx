import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { TerminalIcon } from "./icons"; // Adjust import based on your setup

const GRID_SIZE = 20;
const TILE_SIZE = 20;

type Position = { x: number; y: number };

export const SnakeGame = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

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

    // Draw functions
    const drawSnake = () => {
      ctx.fillStyle = "#4ade80";
      snake.forEach((segment) => {
        ctx.fillRect(
          segment.x * TILE_SIZE,
          segment.y * TILE_SIZE,
          TILE_SIZE,
          TILE_SIZE
        );
        ctx.strokeStyle = "#166534";
        ctx.strokeRect(
          segment.x * TILE_SIZE,
          segment.y * TILE_SIZE,
          TILE_SIZE,
          TILE_SIZE
        );
      });
    };

    const drawFood = () => {
      ctx.fillStyle = "#f87171";
      ctx.beginPath();
      ctx.arc(
        food.x * TILE_SIZE + TILE_SIZE / 2,
        food.y * TILE_SIZE + TILE_SIZE / 2,
        TILE_SIZE / 2,
        0,
        Math.PI * 2
      );
      ctx.fill();
    };

    const moveSnake = () => {
      const head: Position = { x: snake[0].x + dx, y: snake[0].y + dy };

      // Check wall collision
      if (
        head.x < 0 ||
        head.x >= GRID_SIZE ||
        head.y < 0 ||
        head.y >= GRID_SIZE
      ) {
        setGameOver(true);
        return;
      }

      // Check self collision
      if (snake.some((seg) => seg.x === head.x && seg.y === head.y)) {
        setGameOver(true);
        return;
      }

      snake.unshift(head);

      // Check if snake ate food
      if (head.x === food.x && head.y === food.y) {
        currentScore += 10;
        setScore(currentScore);
        generateFood();
      } else {
        snake.pop();
      }
    };

    const generateFood = () => {
      food = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };

      // Ensure food doesn't spawn on snake
      while (snake.some((seg) => seg.x === food.x && seg.y === food.y)) {
        food = {
          x: Math.floor(Math.random() * GRID_SIZE),
          y: Math.floor(Math.random() * GRID_SIZE),
        };
      }
    };

    const gameStep = () => {
      if (gameOver) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      moveSnake();
      drawSnake();
      drawFood();
    };

    // Keyboard controls
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowUp":
          if (dy !== 1) {
            dx = 0;
            dy = -1;
          }
          break;
        case "ArrowDown":
          if (dy !== -1) {
            dx = 0;
            dy = 1;
          }
          break;
        case "ArrowLeft":
          if (dx !== 1) {
            dx = -1;
            dy = 0;
          }
          break;
        case "ArrowRight":
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
  }, [gameOver]);

  const resetGame = () => {
    setScore(0);
    setGameOver(false);
  };

  return (
    <motion.div
      className="mt-8"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.9, duration: 1 }}
    >
      <div className="flex items-center gap-2 mb-4">
        <TerminalIcon className="w-5 h-5 text-green-400" />
        <span className="text-green-400 font-mono">snake_game.tsx</span>
      </div>
      <div className="bg-black/50 border border-green-400/30 rounded-lg p-4 font-mono text-sm text-green-300">
        {gameOver ? (
          <div className="flex flex-col items-center justify-center h-40">
            <p className="text-red-400 mb-2">Game Over!</p>
            <p className="mb-4">Score: {score}</p>
            <button
              onClick={resetGame}
              className="px-3 py-1 bg-green-700/50 border border-green-400/30 rounded hover:bg-green-600/50 transition"
            >
              Play Again
            </button>
          </div>
        ) : (
          <>
            <div className="flex justify-between mb-2">
              <span>Score: {score}</span>
              <span className="text-green-400/70">Use arrow keys to play</span>
            </div>
            <canvas
              ref={canvasRef}
              className="w-full h-40 bg-black/70 border border-green-400/20 rounded"
            />
          </>
        )}
      </div>
    </motion.div>
  );
};