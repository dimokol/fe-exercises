interface House {
  id: string;
  name: string;
  houseColours: string;
  founder: string;
  animal: string;
}

const HouseCard: React.FC<{ house: House }> = ({ house }) => {
  const { name, houseColours, founder, animal } = house;

  // Parse the house colors string into CSS colors
  const parseColors = () => {
    if (!houseColours) return 'white, black';
    
    // Split by "and" or commas to extract color names
    const colorNames = houseColours.split(/\s+and\s+|\s*,\s*/);
    
    // Create a temporary element to check if the colors are valid CSS colors
    const isValidCSSColor = (color: string) => {
      const tempElement = document.createElement('div');
      tempElement.style.color = color;
      return tempElement.style.color !== '';
    };
    
    // Check if ALL colors are valid CSS colors
    const allColorsValid = colorNames.every(color => isValidCSSColor(color.toLowerCase()));
    
    // If ALL colors are valid and we have at least one color, use them directly
    // Otherwise fall back to white/black
    return allColorsValid && colorNames.length > 0 
      ? colorNames.join(', ')
      : 'white, black';
  };

  const gradientColors = parseColors();

  return (
    <div className="house-card" style={{ fontFamily: 'Verdana', margin: '20px 0', padding: '15px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)' }}>
      <div className="house-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h2 style={{ fontWeight: 'bold', margin: 0 }}>{name}</h2>
        <span>{animal}</span>
      </div>
      <div
        className="gradient-bar"
        style={{
          background: `linear-gradient(to right, ${gradientColors})`,
          borderRadius: '8px',
          height: '10px',
          margin: '10px 0'
        }}
      />
      <p>
        Founder: <strong>{founder}</strong>
      </p>
    </div>
  );
}

export default HouseCard;