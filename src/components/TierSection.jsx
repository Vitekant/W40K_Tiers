import { useState, useEffect } from 'react'
import UnitCard from './UnitCard'

const tierColors = {
  '1': 'border-amber-500 bg-amber-500/10',
  '2': 'border-lime-500 bg-lime-500/10',
  '2a': 'border-gray-400 bg-gray-400/10',
  '2b': 'border-gray-500 bg-gray-500/10',
  '3': 'border-amber-700 bg-amber-700/10',
  '4': 'border-orange-600 bg-orange-600/10',
  '5': 'border-red-400 bg-red-400/10',
  '6': 'border-pink-500 bg-pink-500/10',
}

const tierBadgeColors = {
  '1': 'bg-amber-500 text-black',
  '2': 'bg-lime-500 text-black',
  '2a': 'bg-gray-400 text-black',
  '2b': 'bg-gray-500 text-black',
  '3': 'bg-amber-700 text-white',
  '4': 'bg-orange-600 text-white',
  '5': 'bg-red-400 text-white',
  '6': 'bg-pink-500 text-white',
}

function TierSection({ tier, defaultExpanded, forceExpanded }) {
  const [isExpanded, setIsExpanded] = useState(defaultExpanded)

  useEffect(() => {
    if (forceExpanded) {
      setIsExpanded(true)
    }
  }, [forceExpanded])

  const colorClass = tierColors[tier.id] || tierColors['3']
  const badgeClass = tierBadgeColors[tier.id] || tierBadgeColors['3']

  return (
    <div className={`rounded-lg border-l-4 ${colorClass}`}>
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between p-4 min-h-[56px] hover:bg-white/5 transition-colors"
      >
        <div className="flex items-center gap-3">
          <span className={`px-2 py-1 rounded text-sm font-bold ${badgeClass}`}>
            T{tier.id.toUpperCase()}
          </span>
          <div className="text-left">
            <h2 className="font-semibold text-gray-100">{tier.name}</h2>
            {tier.description && (
              <p className="text-sm text-gray-400">{tier.description}</p>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-sm text-gray-500">{tier.units.length} units</span>
          <svg
            className={`w-5 h-5 text-gray-400 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </button>

      {isExpanded && (
        <div className="p-4 pt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
            {tier.units.map(unit => (
              <UnitCard key={unit.name} unit={unit} tierId={tier.id} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

export default TierSection
