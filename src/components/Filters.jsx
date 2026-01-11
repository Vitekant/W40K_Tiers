const filterOptions = [
  { value: 'all', label: 'All' },
  { value: 'characters', label: 'Characters' },
  { value: 'non-characters', label: 'Non-Characters' },
]

function Filters({ value, onChange }) {
  return (
    <div className="flex gap-2">
      {filterOptions.map(option => (
        <button
          key={option.value}
          onClick={() => onChange(option.value)}
          className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors min-h-[44px]
            ${value === option.value
              ? 'bg-amber-600 text-white'
              : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-gray-200'
            }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  )
}

export default Filters
