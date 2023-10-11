// components/Toggle.tsx
interface ToggleProps {
    enabled: boolean;
    onToggle: () => void;
    label?: string;  // New label prop
  }
  
  function Toggle({ enabled, onToggle, label }: ToggleProps) {
    return (
      <div className="flex items-center">
        <button 
          onClick={onToggle} 
          className={`relative w-12 h-6 transition rounded-full outline-none bg-gray-300 dark:bg-gray-600 focus:outline-none ${enabled ? 'bg-green-400' : ''}`}
        >
          <span
            className={`absolute left-1 top-1 w-4 h-4 transition-transform duration-300 rounded-full bg-white ${enabled ? 'translate-x-6' : ''}`}
          />
        </button>
        {label && <span className="ml-2 text-xs">{label}</span>}  {/* Conditionally render label */}
      </div>
    );
  }
  
  export default Toggle;
  