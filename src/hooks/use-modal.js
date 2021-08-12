import { useState } from 'react';

/**
 * Create a sample modal state and basic utilities for a modal
 *
 * @returns {Object} The state for modal and utility function like open and close
 */
const useModal = () => {
  const [visible, setVisible] = useState(false);
  const open = () => setVisible(true);
  const close = () => setVisible(false);

  return { visible, open, close };
};

export default useModal;
