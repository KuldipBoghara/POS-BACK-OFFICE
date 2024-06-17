import React, { useState } from 'react';
import { InputPicker } from 'rsuite';

const NumberPicker: React.FC = () => {
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

  const handleSelect = (value: number | null) => {
    setSelectedNumber(value);
  };

  const numberOptions = Array.from({ length: 101 }, (_, i) => ({
    label: `${i}`,
    value: i
  }));

  return (
    <div>
      <InputPicker
        data={numberOptions}
        value={selectedNumber}
        onChange={handleSelect}
        placeholder="Select Age"
        style={{ width: 224 }}
      />
    </div>
  );
};

export default NumberPicker;
