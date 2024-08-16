export default function GameLog({ turns }) {
  return (
    <ol id="log">
      {turns.map((turn) => (
        <li 
        key={`${turn.square.row} ${turn.square.col}`}>
          {turn.player} to Square {turn.square.row } , {turn.square.col}
        </li>
      ))}
    </ol>
  );
}
