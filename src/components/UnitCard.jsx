const tierBorderColors = {
  '1': 'border-amber-500/30 hover:border-amber-500/60',
  '2': 'border-lime-500/30 hover:border-lime-500/60',
  '2a': 'border-gray-400/30 hover:border-gray-400/60',
  '2b': 'border-gray-500/30 hover:border-gray-500/60',
  '3': 'border-amber-700/30 hover:border-amber-700/60',
  '3a': 'border-amber-600/30 hover:border-amber-600/60',
  '3b': 'border-amber-800/30 hover:border-amber-800/60',
  '4': 'border-orange-600/30 hover:border-orange-600/60',
  '5': 'border-red-400/30 hover:border-red-400/60',
  '6': 'border-pink-500/30 hover:border-pink-500/60',
}

function UnitCard({ unit, tierId }) {
  const borderClass = tierBorderColors[tierId] || tierBorderColors['3']

  const CardWrapper = unit.storeUrl ? 'a' : 'div'
  const wrapperProps = unit.storeUrl ? { href: unit.storeUrl, target: '_blank', rel: 'noopener noreferrer' } : {}

  // Handle local images with base path for GitHub Pages
  const getImageUrl = (url) => {
    if (!url) return null
    if (url.startsWith('http')) return url
    // Local images need the base path prepended
    const base = import.meta.env.BASE_URL || '/'
    return `${base}${url.startsWith('/') ? url.slice(1) : url}`
  }

  return (
    <CardWrapper
      {...wrapperProps}
      className={`block bg-gray-800 rounded-lg border ${borderClass} p-3 transition-all hover:bg-gray-750 active:scale-[0.98] ${unit.storeUrl ? 'cursor-pointer' : ''}`}
    >
      {unit.imageUrl ? (
        <img
          src={getImageUrl(unit.imageUrl)}
          alt={unit.name}
          className="w-full h-24 object-cover rounded mb-2 bg-gray-700"
        />
      ) : (
        <div className="w-full h-24 bg-gray-700 rounded mb-2 flex items-center justify-center">
          <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </div>
      )}

      <div className="flex items-start justify-between gap-2">
        <h3 className="font-medium text-gray-100 text-sm leading-tight">{unit.name}</h3>
        {unit.isCharacter && (
          <span className="shrink-0 px-1.5 py-0.5 bg-purple-600/30 text-purple-300 text-xs rounded font-medium">
            HQ
          </span>
        )}
      </div>

      <div className="flex items-center justify-between mt-1">
        {unit.points && (
          <p className="text-xs text-gray-400">{unit.points} pts</p>
        )}
        {unit.price && (
          <p className="text-xs text-green-400">{unit.price}</p>
        )}
      </div>
    </CardWrapper>
  )
}

export default UnitCard
