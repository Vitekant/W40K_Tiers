function ArmyTabs({ armies, selectedArmy, onSelect }) {
  return (
    <div className="flex gap-2 overflow-x-auto pb-1 -mx-4 px-4 sm:mx-0 sm:px-0">
      {armies.map(army => (
        <button
          key={army.id}
          onClick={() => onSelect(army)}
          className={`px-4 py-2 rounded-lg font-medium text-sm whitespace-nowrap transition-colors min-h-[44px]
            ${selectedArmy.id === army.id
              ? 'bg-amber-600 text-white'
              : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
            }`}
        >
          {army.army}
        </button>
      ))}
    </div>
  )
}

export default ArmyTabs
