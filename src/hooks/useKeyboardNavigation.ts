import { useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

interface KeyboardNavigationOptions {
  onBack?: () => void;
  onForward?: () => void;
  onEscape?: () => void;
  onEnter?: () => void;
  enabled?: boolean;
  preventDefault?: boolean;
}

export function useKeyboardNavigation({
  onBack,
  onForward,
  onEscape,
  onEnter,
  enabled = true,
  preventDefault = true,
}: KeyboardNavigationOptions = {}) {
  const navigate = useNavigate();

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (!enabled) return;

      switch (event.key) {
        case 'ArrowLeft':
        case 'Backspace':
          if (preventDefault) event.preventDefault();
          if (onBack) {
            onBack();
          } else {
            navigate(-1);
          }
          break;

        case 'ArrowRight':
          if (preventDefault) event.preventDefault();
          if (onForward) {
            onForward();
          } else {
            navigate(1);
          }
          break;

        case 'Escape':
          if (preventDefault) event.preventDefault();
          if (onEscape) {
            onEscape();
          }
          break;

        case 'Enter':
          if (preventDefault) event.preventDefault();
          if (onEnter) {
            onEnter();
          }
          break;

        default:
          break;
      }
    },
    [enabled, preventDefault, onBack, onForward, onEscape, onEnter, navigate]
  );

  useEffect(() => {
    if (!enabled) return;

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown, enabled]);

  return {
    // You can return additional functions if needed
    triggerBack: () => {
      if (onBack) {
        onBack();
      } else {
        navigate(-1);
      }
    },
    triggerForward: () => {
      if (onForward) {
        onForward();
      } else {
        navigate(1);
      }
    },
  };
} 