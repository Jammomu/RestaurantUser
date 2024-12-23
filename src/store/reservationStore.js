import { create } from 'zustand';

export const useReservationStore = create((set) => ({
  reservations: [],
  setMyReservations: (reservations) => set({ reservations }),
}));