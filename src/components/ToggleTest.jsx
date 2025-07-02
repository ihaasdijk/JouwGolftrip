export default function ToggleTest() {
  return (
    <div className="flex items-center space-x-4">
      <label htmlFor="toggle" className="block font-medium">Test Toggle</label>
      <label className="inline-flex items-center cursor-pointer">
        <input id="toggle" type="checkbox" className="sr-only peer" />
        <div className="w-11 h-6 bg-gray-300 peer-checked:bg-green-500 rounded-full relative transition-colors duration-300">
          <div className="absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full transition-all duration-300 transform peer-checked:translate-x-5"></div>
        </div>
      </label>
    </div>
  );
}
