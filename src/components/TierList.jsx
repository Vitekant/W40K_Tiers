import TierSection from './TierSection'

function TierList({ tiers, expandAll }) {
  return (
    <div className="space-y-4">
      {tiers.map((tier, index) => (
        <TierSection
          key={tier.id}
          tier={tier}
          defaultExpanded={expandAll || index === 0}
          forceExpanded={expandAll}
        />
      ))}
      {tiers.length === 0 && (
        <div className="text-center py-12 text-gray-500">
          No units match your search criteria
        </div>
      )}
    </div>
  )
}

export default TierList
