import clipboardCopy from 'clipboard-copy';
import { useCallback, useRef } from 'react';
import { useTimedToggle } from './useTimedToggle';

export interface ClipboardAPI {
  // readonly copied: boolean;
  // readonly target: React.RefObject<any>;
  // readonly copy: (text?: string | any) => void;
  readonly copied: boolean;
  readonly isSupported: () => boolean;
}

export function useClipboard(options= {}): ClipboardAPI {
  const [copied, toggleCopied] = useTimedToggle(false);

  function isSupported() {
    return (
      !!navigator.clipboard ||
      (typeof document.execCommand === 'function' &&
        typeof document.queryCommandSupported === 'function' &&
        document.queryCommandSupported('copy'))
    );
  }
  return {
    copied,
    isSupported,
  }
}