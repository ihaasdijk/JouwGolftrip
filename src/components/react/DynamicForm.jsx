
import { useState } from 'react';

export default function DynamicForm() {
  const [showDetails, setShowDetails] = useState(false);
  const [travelMethod, setTravelMethod] = useState('');
  const [accommodationTypes, setAccommodationTypes] = useState([]);
  const [otherAccommodation, setOtherAccommodation] = useState(false);

  const handleAccommodationChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      setAccommodationTypes([...accommodationTypes, value]);
    if (value.toLowerCase() === 'anders, namelijk:') setOtherAccommodation(true);
    } else {
      setAccommodationTypes(accommodationTypes.filter(item => item !== value));
      if (value.toLowerCase() === 'anders, namelijk:') setOtherAccommodation(false);
    }
  };

  return (
    <form className="space-y-6" method="POST" action="https://formspree.io/f/your-form-id">
      <div>
        <label className="block font-medium mb-1">Naam</label>
        <input type="text" name="naam" required className="w-full border rounded px-3 py-2" />
      </div>

      <div>
        <label className="block font-medium mb-1">E-mailadres</label>
        <input type="email" name="email" required className="w-full border rounded px-3 py-2" />
      </div>

      <div>
        <label className="block font-medium mb-1">Telefoonnummer (optioneel)</label>
        <input type="tel" name="telefoon" className="w-full border rounded px-3 py-2" />
      </div>

      <div>
        <label className="block font-medium mb-1">Aantal personen</label>
        <select name="aantal_personen" className="w-full border rounded px-3 py-2">
          {[...Array(12)].map((_, i) => (
            <option key={i+1} value={i+1}>{i+1}</option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block font-medium mb-1">Begindatum</label>
          <input type="date" name="begindatum" className="w-full border rounded px-3 py-2" />
        </div>
        <div>
          <label className="block font-medium mb-1">Einddatum</label>
          <input type="date" name="einddatum" className="w-full border rounded px-3 py-2" />
        </div>
      </div>

      <div>
        <label className="block font-medium mb-1">Budget per persoon (€)</label>
        <input type="number" name="budget" className="w-full border rounded px-3 py-2" />
      </div>

      <div>
        <label className="block font-medium mb-1">Algemene wensen of opmerkingen</label>
        <textarea name="algemene_wensen" className="w-full border rounded px-3 py-2" rows="3"></textarea>
      </div>

      <div>
        <label className="block font-medium mb-1">Wil je specifieke wensen opgeven?</label>
        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" onChange={(e) => setShowDetails(e.target.checked)} />
          <div className="w-11 h-6 bg-gray-300 peer-checked:bg-primary-500 rounded-full peer-focus:ring-2 peer-focus:ring-primary-500 transition-all duration-200 relative">
            <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full transform transition-transform duration-300 peer-checked:translate-x-5"></div>
          </div>
</label>

      </div>

      {showDetails && (
        <div className="space-y-6 border-t pt-6">
          <div>
            <label className="block font-medium mb-1">Bestemming of regio</label>
            <input type="text" name="bestemming" className="w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="block font-medium mb-1">Hoe wil je reizen?</label>
            <select name="reismethode" onChange={(e) => setTravelMethod(e.target.value)} className="w-full border rounded px-3 py-2">
              <option value="">Selecteer</option>
              <option value="auto">Eigen auto</option>
              <option value="vliegtuig">Vliegtuig</option>
            </select>
          </div>

          {travelMethod === 'vliegtuig' && (
            <>
              <div>
                <label className="block font-medium mb-1">Tickets meenemen in voorstel?</label>
                <select name="tickets" className="w-full border rounded px-3 py-2">
                  <option value="">Selecteer</option>
                  <option value="ja">Ja</option>
                  <option value="nee">Nee</option>
                </select>
              </div>
              <div>
                <label className="block font-medium mb-1">Huurauto meenemen in voorstel?</label>
                <select name="huurauto" className="w-full border rounded px-3 py-2">
                  <option value="">Selecteer</option>
                  <option value="ja">Ja</option>
                  <option value="nee">Nee</option>
                </select>
              </div>
            </>
          )}

          <div>
            <label className="block font-medium mb-1">Gewenst aantal golfrondes</label>
            <input type="number" name="golfrondes" className="w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="block font-medium mb-1">Voorkeur type golfbaan</label>
            <input type="text" name="type_golfbaan" className="w-full border rounded px-3 py-2" />
          </div>

          <div>
            <label className="block font-medium mb-1">Specifieke banen die je (niet) wilt spelen</label>
            <textarea name="specifieke_banen" className="w-full border rounded px-3 py-2" rows="2"></textarea>
          </div>

          <div>
            <label className="block font-medium mb-1">Type accommodatie</label>
            <div className="space-y-1">
              {['Hotel', 'Villa', '(Air)Bnb', 'Resort', 'Anders, namelijk:'].map(type => (
                <label key={type} className="block">
                  <input
                    type="checkbox"
                    value={type.toLowerCase()}
                    name="accommodatie[]"
                    onChange={handleAccommodationChange}
                    className="mr-2"
                  />
                  {type}
                </label>
              ))}
            </div>
          </div>

          {otherAccommodation && (
            <div>
              <label className="block font-medium mb-1">Toelichting bij 'Anders'</label>
              <input type="text" name="accommodatie_anders" className="w-full border rounded px-3 py-2" />
            </div>
          )}

          <div>
            <label className="block font-medium mb-1">Overige wensen of bijzonderheden</label>
            <textarea name="overige_wensen" className="w-full border rounded px-3 py-2" rows="3"></textarea>
          </div>
        </div>
      )}

      <div>
        <button type="submit" className="bg-primary-500 hover:bg-primary-700 text-white font-bold px-6 py-3 rounded-md transition-colors">
          Verstuur aanvraag
        </button>
      </div>
    </form>
  );
}
