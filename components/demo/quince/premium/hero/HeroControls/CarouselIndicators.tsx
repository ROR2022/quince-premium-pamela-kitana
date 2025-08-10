type CarouselIndicatorsProps = {
  count: number
  currentIndex: number
  onSelect: (index: number) => void
}

export function CarouselIndicators({ count, currentIndex, onSelect }: CarouselIndicatorsProps) {
  if (count <= 0) return null
  
  return (
    <div className="absolute bottom-24 left-0 right-0 z-10 flex justify-center gap-2">
      {Array.from({ length: count }).map((_, index) => (
        <div 
          key={index}
          className={`w-2 h-2 rounded-full transition-all duration-300 ${
            currentIndex === index ? 'bg-rosa-gold-500 scale-125' : 'bg-white/50'
          }`}
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  )
}
