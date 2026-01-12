import { useState, useMemo } from 'react'
import ArmyTabs from './components/ArmyTabs'
import TierList from './components/TierList'
import SearchBar from './components/SearchBar'
import Filters from './components/Filters'
import spaceMarines from './data/space-marines.json'
import deathGuard from './data/death-guard.json'
import astraMilitarum from './data/astra-militarum.json'

const armies = [spaceMarines, deathGuard, astraMilitarum]

function App() {
  const [selectedArmy, setSelectedArmy] = useState(armies[0])
  const [searchQuery, setSearchQuery] = useState('')
  const [filter, setFilter] = useState('all') // 'all', 'characters', 'non-characters'

  const filteredTiers = useMemo(() => {
    return selectedArmy.tiers.map(tier => {
      const filteredUnits = tier.units.filter(unit => {
        const matchesSearch = unit.name.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesFilter =
          filter === 'all' ||
          (filter === 'characters' && unit.isCharacter) ||
          (filter === 'non-characters' && !unit.isCharacter)
        return matchesSearch && matchesFilter
      })
      return { ...tier, units: filteredUnits }
    }).filter(tier => tier.units.length > 0)
  }, [selectedArmy, searchQuery, filter])

  const hasActiveSearch = searchQuery.length > 0

  return (
    <div className="min-h-screen bg-gray-900">
      <header className="sticky top-0 z-50 bg-gray-900/95 backdrop-blur border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <h1 className="text-xl font-bold text-amber-500 mb-3">W40K Tier Lists</h1>
          <ArmyTabs
            armies={armies}
            selectedArmy={selectedArmy}
            onSelect={setSelectedArmy}
          />
          <div className="mt-3 flex flex-col sm:flex-row gap-3">
            <SearchBar value={searchQuery} onChange={setSearchQuery} />
            <Filters value={filter} onChange={setFilter} />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-6">
        <div className="mb-4 text-sm text-gray-400">
          Source: {selectedArmy.source} • Updated: {selectedArmy.lastUpdated}
        </div>
        <TierList tiers={filteredTiers} expandAll={hasActiveSearch} />
      </main>
    </div>
  )
}

export default App
