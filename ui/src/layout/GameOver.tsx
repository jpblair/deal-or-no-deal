import { formatterUSD } from "../utils"

interface GameOverProps {
  dealAccepted: number | undefined
  userCaseValue: number
}

export const GameOver = ({ dealAccepted, userCaseValue }: GameOverProps) => {
  return (
    <div>
      <p className="text-lg sm:text-2xl">Game over.</p>
      {dealAccepted ? (
        <p className="text-sm sm:text-base">
          You accepted a deal of <b>{formatterUSD.format(dealAccepted)}</b>.
          Your case was worth <b>{formatterUSD.format(userCaseValue)}</b>.
        </p>
      ) : (
        <p className="text-sm sm:text-base">
          Your case was worth <b>{formatterUSD.format(userCaseValue)}</b>.
        </p>
      )}
    </div>
  )
}
