export interface Match {
  teamA: string;
  teamB: string;
  startTime: string;  // ISO datetime string
  round: string;
  gameNumber: string;
  field: string;
  score: [number, number][];  // array of sets, each like [25, 20]
  status: string;             // e.g., 'pending', 'in-progress', 'completed'
  level: string;              // e.g., 'sub15', 'sub17', 'seniores'
  gender: string;             // e.g., 'Feminino', 'Masculino', 'Misto'
}