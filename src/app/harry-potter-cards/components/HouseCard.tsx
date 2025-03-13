import React from 'react';

export interface House {
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
    <div className="font-['Verdana'] my-5 p-4 shadow-md border-2 rounded-lg max-w-lg mx-auto w-full">
      <div className="flex justify-between items-center">
        <h2 className="font-bold m-0 text-2xl">{name}</h2>
        <span>{animal}</span>
      </div>
      <div
        className="my-2 h-2.5 rounded-lg"
        style={{
          background: `linear-gradient(to right, ${gradientColors})`
        }}
      />
      <p>
        Founder: <strong>{founder}</strong>
      </p>
    </div>
  );
}

export default HouseCard;