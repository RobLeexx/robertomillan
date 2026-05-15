const modal = document.querySelector<HTMLDialogElement>('[data-video-modal]');
let frame = modal?.querySelector<HTMLIFrameElement>('[data-video-frame]');
const title = modal?.querySelector<HTMLElement>('[data-video-title]');
const closeButton = modal?.querySelector<HTMLButtonElement>('[data-video-close]');
const triggers = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-video-trigger]'));

let lastTrigger: HTMLButtonElement | null = null;

const clearFrame = () => {
  if (frame) {
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

    if (!videoUrl || !frame) {
      return;
    }

    lastTrigger = trigger;

    if (title) {
      title.textContent = trigger.dataset.videoTitle ?? 'Project video';
    }

    frame.src = videoUrl;
    document.documentElement.classList.add('has-dialog-open');
    modal.showModal();
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
