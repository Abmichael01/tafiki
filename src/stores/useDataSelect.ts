import { create } from 'zustand';

interface DataSelectState {
  selectedIds: number[];
  selectAll: (ids: number[]) => void;
  unselectAll: () => void;
  toggleSelect: (id: number) => void;
  setSelected: (id: number, selected: boolean) => void;
  isSelected: (id: number) => boolean;
  isAllSelected: (totalIds: number[]) => boolean;
  getSelectedCount: () => number;
  clearSelection: () => void;
}

export const useDataSelect = create<DataSelectState>((set, get) => ({
  selectedIds: [],

  // Select all items
  selectAll: (ids: number[]) => {
    set({ selectedIds: [...new Set(ids)] });
  },

  // Unselect all items
  unselectAll: () => {
    set({ selectedIds: [] });
  },

  // Toggle selection of a single item
  toggleSelect: (id: number) => {
    set((state) => {
      const isCurrentlySelected = state.selectedIds.includes(id);
      if (isCurrentlySelected) {
        // Remove from selection
        return {
          selectedIds: state.selectedIds.filter(selectedId => selectedId !== id)
        };
      } else {
        // Add to selection
        return {
          selectedIds: [...state.selectedIds, id]
        };
      }
    });
  },

  // Set selection state for a single item (for checkbox compatibility)
  setSelected: (id: number, selected: boolean) => {
    set((state) => {
      if (selected) {
        // Add to selection if not already there
        if (!state.selectedIds.includes(id)) {
          return {
            selectedIds: [...state.selectedIds, id]
          };
        }
      } else {
        // Remove from selection
        return {
          selectedIds: state.selectedIds.filter(selectedId => selectedId !== id)
        };
      }
      return state; // No change needed
    });
  },

  // Check if an item is selected
  isSelected: (id: number) => {
    return get().selectedIds.includes(id);
  },

  // Check if all items are selected
  isAllSelected: (totalIds: number[]) => {
    const { selectedIds } = get();
    return totalIds.length > 0 && totalIds.every(id => selectedIds.includes(id));
  },

  // Get count of selected items
  getSelectedCount: () => {
    return get().selectedIds.length;
  },

  // Clear all selections
  clearSelection: () => {
    set({ selectedIds: [] });
  },
})); 