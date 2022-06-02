import React from 'react'
import { Combobox, ComboboxInput, ComboboxList, ComboboxOption, ComboboxPopover } from '@reach/combobox';
import '@reach/combobox/styles.css';
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';

function SearchMap({ panTo, component, lat, lng }) {
    const { ready, value, suggestions: { status, data }, setValue, clearSuggestions } = usePlacesAutocomplete({
        requestOptions: {
          location: {
            lat: () => lat,
            lng: () => lng
          },
          radius: 500 * 1000, // 5 KM
        }
      });
      return (
        <div className={component === "HospitalProfile" ? "hospital-profile-map-search" : "map-search"}>
          <Combobox 
              onSelect={async (address) => { 
                setValue(address, false);
                clearSuggestions();
                try {
                  const results = await getGeocode({ address });
                  const { lat, lng } = await getLatLng(results[0]);
                  panTo({ lat, lng });
                } catch(error) {
                  console.log("error => ", error);
                }
              }}
            > 
            <ComboboxInput value={value} onChange={(e) => {
                setValue(e.target.value);
              }}
              disabled={!ready} 
              placeholder="Find location"
            />
            <ComboboxPopover style={{ zIndex: '100000' }}>
              <ComboboxList style={{ zIndex: '100000' }}>
                {status === "OK" && data.map(({ id, description }) => (
                  <ComboboxOption style={{ zIndex: '100000' }} key={id} value={description} />
                ))}
              </ComboboxList>
            </ComboboxPopover>
          </Combobox>
        </div>
      )
}

export default SearchMap
