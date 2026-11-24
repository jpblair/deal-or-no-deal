import { formatterUSD } from "../utils"

interface DealOfferProps {
  dealAmount: number
  onAccept: (amount: number) => void
  onReject: () => void
}

export const DealOffer = ({
  dealAmount,
  onAccept,
  onReject
}: DealOfferProps) => {
  return (
    <div className="flex justify-between gap-2 sm:gap-6">
      <div>
        <p className="text-lg sm:text-2xl">Deal or No Deal?</p>
        <p className="text-sm sm:text-base">
          Offer: <b>{formatterUSD.format(dealAmount)}</b>
        </p>
      </div>
      <div className="flex gap-3">
        <button
          className="bg-green-400 rounded-md px-2 py-1 sm:p-3 h-13 sm:w-32"
          onClick={() => onAccept(dealAmount)}
        >
          Deal
        </button>
        <button
          className="bg-red-400 rounded-md px-2 py-1 sm:p-3 h-13 sm:w-32"
          onClick={onReject}
        >
          No Deal
        </button>
      </div>
    </div>
  )
}
