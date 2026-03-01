import { useMemo, useState } from "react";

type Props = {
  allLocations: string[];
  onCitySelect: (city: string) => void;
};

export default function CitySearch({ allLocations, onCitySelect }: Props) {
  const [query, setQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);

  const suggestions = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return allLocations;

    return allLocations.filter((city) => city.toLowerCase().includes(q));
  }, [query, allLocations]);

  function handleSelect(city: string) {
    // “all” = shfaq evente nga të gjitha qytetet
    onCitySelect(city === "See all cities" ? "all" : city);
    setQuery(city === "See all cities" ? "" : city);
    setShowSuggestions(false);
  }

  return (
    <div>
      <label htmlFor="city-search">Search city:</label>
      <input
        id="city-search"
        type="text"
        value={query}
        placeholder="Type a city"
        onChange={(e) => {
          setQuery(e.target.value);
          setShowSuggestions(true);
        }}
        onFocus={() => setShowSuggestions(true)}
      />

      {showSuggestions && (
        <ul aria-label="city-suggestions">
          <li>
            <button type="button" onClick={() => handleSelect("See all cities")}>
              See all cities
            </button>
          </li>

          {suggestions.map((city) => (
            <li key={city}>
              <button type="button" onClick={() => handleSelect(city)}>
                {city}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}