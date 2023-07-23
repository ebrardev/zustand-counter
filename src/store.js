import create from 'zustand';

const useBearStore = create((set) => ({
  bears: 0,
  increment: (value) => set((state) => ({ bears: state.bears + value })),
  decrement: (value) => set((state) => ({ bears: state.bears - value })),
}));

export default useBearStore;
