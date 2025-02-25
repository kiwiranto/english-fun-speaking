import { useState } from "react";
import { ChevronDown } from "lucide-react";
import "./styles.scss";

interface Option {
  label: string;
  value: string;
  disabled?: boolean;
}

interface DropdownProps {
  options?: Option[];
  onSelect: (option: Option) => void;
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = ({ options = [], onSelect, placeholder = "Select an option" }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<Option | null>(null);

  const handleSelect = (option: Option) => {
    if (!option.disabled) {
      setSelected(option);
      onSelect(option);
      setIsOpen(false);
    }
  };

  return (
    <div className="relative w-56">
      <button
        className="w-full p-2 border border-gray-300 rounded-lg flex justify-between items-center bg-black"
        onClick={() => setIsOpen(!isOpen)}
      >
        {selected ? selected.label : placeholder}
        <ChevronDown className="h-5 w-5" />
      </button>

      {isOpen && (
        <ul className="absolute left-0 w-full border border-gray-300 rounded-lg mt-1 shadow-lg max-h-60 overflow-y-auto">
          {options.length > 0 ? (
            options.map((option) => (
              <li
                key={option.value}
                className={`p-2 ${option.disabled ? 'text-gray-400 cursor-not-allowed' : 'bg-black hover:bg-gray-100 hover:text-black cursor-pointer'}`}
                onClick={() => handleSelect(option)}
              >
                {option.label}
              </li>
            ))
          ) : (
            <li className="p-2 text-gray-400 cursor-not-allowed">No options available</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
