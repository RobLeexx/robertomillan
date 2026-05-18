const modal = document.querySelector<HTMLDialogElement>('[data-video-modal]');
let frame = modal?.querySelector<HTMLIFrameElement>('[data-video-frame]');
const title = modal?.querySelector<HTMLElement>('[data-video-title]');
const closeButton = modal?.querySelector<HTMLButtonElement>('[data-video-close]');
const fallback = modal?.querySelector<HTMLElement>('[data-video-fallback]');
const poster = modal?.querySelector<HTMLImageElement>('[data-video-poster]');
const fallbackLink = modal?.querySelector<HTMLAnchorElement>('[data-video-open-link]');
const triggers = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-video-trigger]'));
const mobileQuery = window.matchMedia('(max-width: 759px), (hover: none), (pointer: coarse)');

let lastTrigger: HTMLButtonElement | null = null;
let fallbackTimer = 0;

const setEmbedState = (visible: boolean) => {
  if (frame) {
    frame.hidden = !visible;
  }
};

const clearFallbackTimer = () => {
  if (fallbackTimer) {
    window.clearTimeout(fallbackTimer);
    fallbackTimer = 0;
  }
};

const setFallbackState = (trigger: HTMLButtonElement, visible: boolean) => {
  if (!fallback) {
    return;
  }

  fallback.hidden = !visible;
  setEmbedState(!visible);

  if (poster) {
    poster.src = trigger.dataset.videoThumbnail ?? '';
    poster.alt = trigger.dataset.videoTitle ?? 'Project video preview';
  }

  if (fallbackLink) {
    fallbackLink.href = trigger.dataset.videoWatchUrl ?? '#';
  }
};

const clearFrame = () => {
  clearFallbackTimer();

  if (frame) {
    frame.hidden = false;
    frame.src = 'about:blank';
    frame.removeAttribute('src');
    const freshFrame = frame.cloneNode(false) as HTMLIFrameElement;
    frame.replaceWith(freshFrame);
    frame = freshFrame;
  }
};

const closeModal = () => {
  if (!modal?.open) {
    return;
  }

  clearFrame();
  modal.close();
};

if (modal && frame && triggers.length > 0) {
  const openModal = (trigger: HTMLButtonElement) => {
    const videoUrl = trigger.dataset.videoUrl;
    const watchUrl = trigger.dataset.videoWatchUrl;

    if (!videoUrl || !watchUrl || !frame) {
      return;
    }

    lastTrigger = trigger;

    if (title) {
      title.textContent = trigger.dataset.videoTitle ?? 'Project video';
    }

    document.documentElement.classList.add('has-dialog-open');
    modal.showModal();

    const useFallbackOnly = mobileQuery.matches;
    setFallbackState(trigger, useFallbackOnly);

    if (useFallbackOnly) {
      clearFrame();
      return;
    }

    clearFallbackTimer();
    setEmbedState(true);

    frame.addEventListener(
      'load',
      () => {
        clearFallbackTimer();
      },
      { once: true }
    );

    frame.src = videoUrl;

    fallbackTimer = window.setTimeout(() => {
      setFallbackState(trigger, true);
    }, 2200);
  };

  triggers.forEach((trigger) => {
    trigger.addEventListener('click', () => openModal(trigger));
  });

  closeButton?.addEventListener('click', closeModal);

  modal.addEventListener('click', (event) => {
    if (event.target === modal) {
      closeModal();
    }
  });

  modal.addEventListener('close', () => {
    document.documentElement.classList.remove('has-dialog-open');
    if (fallback) {
      fallback.hidden = true;
    }
    setEmbedState(true);
    clearFrame();
    lastTrigger?.focus();
  });

  modal.addEventListener('cancel', () => {
    clearFrame();
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.open) {
      closeModal();
    }
  });
}

export {};
