import { GameMove } from "@/types";
import { useState } from "react";
import { View, Text } from "react-native";
import { initialFEN } from "./lib/settings";
import { convertFENtoGame } from "./lib/fen";
import ChessBoard from "./GameBoard";

export default function ChessGame() {
  const [moves, setMoves] = useState<GameMove[]>([
    convertFENtoGame(initialFEN)!,
  ]);
  // const position = moves[0];
  const [position, setPosition] = useState(moves[0]);

  if (!position || !position.board) {
    return (
      <View className="bg-gray-200 flex w-full aspect-square border border-zinc-100 items-center justify-center">
        <Text>Could not display board</Text>
      </View>
    );
  }

  function addMove(newMove: GameMove) {
    setMoves([...moves, newMove]);
    setPosition(newMove);
  }

  return <ChessBoard position={position} addMove={addMove} />;
}
