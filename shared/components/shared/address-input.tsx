'use client';

import React, { useEffect, useRef } from 'react';

declare global {
  interface Window {
    google: any;
  }
}

interface Props {
  onChange?: (value?: string) => void;
}

export const AddressInput: React.FC<Props> = ({ onChange }) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!window.google || !window.google.maps) {
      console.error('Google Maps API не загружен.');
      return;
    }

    const autocomplete = new window.google.maps.places.Autocomplete(inputRef.current!, {
      types: ['address'],
      componentRestrictions: {
        country: ['pl', 'de', 'fr', 'lt', 'lv', 'ee', 'cz', 'sk', 'it', 'es'],
      },
      fields: ['formatted_address', 'geometry'],
    });

    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (place?.formatted_address) {
        onChange?.(place.formatted_address);
      }
    });
  }, [onChange]);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder="Введите адрес"
      className="w-full border border-gray-300 rounded-md p-3 text-base focus:outline-none focus:ring-2 focus:ring-orange-500"
    />
  );
};
