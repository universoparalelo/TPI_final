export default function Searcher({ query, setQuery }) {
  const handleSearch = (e) => {
    setQuery(e.target.value);
  };

  return (
    <div className="p-4">
        <input type="text" value={query} onChange={handleSearch} placeholder="Buscar por nombre" className="w-full p-2 border border-gray-300 rounded"/>
    </div>
  );
}