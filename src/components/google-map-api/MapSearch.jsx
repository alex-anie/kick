'use client'

import React, { useState, useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import SearchIcon from '../svg-icons/SearchIcon';

const MapSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const mapRef = useRef(null);
  const searchBoxRef = useRef(null);
  const mapInstanceRef = useRef(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY',
      version: 'weekly',
      libraries: ['places']
    });

    loader.load().then(() => {
      const map = new google.maps.Map(mapRef.current, {
        center: { lat: 51.2072, lng: -121.9883 },
        zoom: 8,
      });

      mapInstanceRef.current = map;

      const searchBox = new google.maps.places.SearchBox(searchBoxRef.current);
      map.controls[google.maps.ControlPosition.TOP_LEFT].push(searchBoxRef.current);

      searchBox.addListener('places_changed', () => {
        const places = searchBox.getPlaces();

        if (places.length === 0) {
          return;
        }

        const bounds = new google.maps.LatLngBounds();
        places.forEach((place) => {
          if (!place.geometry || !place.geometry.location) {
            console.log("Returned place contains no geometry");
            return;
          }

          if (place.geometry.viewport) {
            bounds.union(place.geometry.viewport);
          } else {
            bounds.extend(place.geometry.location);
          }
        });
        map.fitBounds(bounds);
      });
    });
  }, []);

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (mapInstanceRef.current && searchBoxRef.current) {
      google.maps.event.trigger(searchBoxRef.current, 'focus');
      google.maps.event.trigger(searchBoxRef.current, 'keydown', {
        keyCode: 13,
        which: 13,
      });
    }
  };

  return (
    <section className="grid grid-cols-7 gap-4 mt-4">
      <aside className="col-span-2 w-full">
        <form onSubmit={handleSearchSubmit}>
          <label className="relative block">
            <span className="sr-only">Search</span>
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <SearchIcon width={18} height={18}/>
            </span>
            <input
              ref={searchBoxRef}
              type="search"
              name="search"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for station by name, location or landmark"
              className="placeholder:text-neutral-700 block bg-white w-full border border-neutral-800 rounded-md py-2 pl-8 pr-1 shadow-sm focus:outline-none focus:border-orange-500 focus:ring-orange-500 focus:ring-1 sm:text-[0.65em]"
            />
          </label>
        </form>
      </aside>
      <aside className="col-span-5">
        <h1 className="uppercase font-bold text-[0.875em]">Find the station close to you</h1>
        <div ref={mapRef} style={{ width: '100%', height: '450px' }}></div>
      </aside>
    </section>
  );
};

export default MapSearch;