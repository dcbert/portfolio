function getScrollParent(el) {
  let parent = el.parentElement;
  while (parent) {
    const style = window.getComputedStyle(parent);
    if (/(auto|scroll)/.test(style.overflow + style.overflowY)) {
      return parent;
    }
    parent = parent.parentElement;
  }
  return null;
}

export const scrollReveal = {
  mounted(el, binding) {
    const options = binding.value || {};
    const delay = options.delay || 0;
    const direction = options.direction || 'up';
    const duration = options.duration || 800;

    el.style.opacity = '0';
    el.style.willChange = 'opacity, transform';
    el.style.transition = `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`;

    const transforms = {
      up: 'translateY(30px)',
      down: 'translateY(-30px)',
      left: 'translateX(-30px)',
      right: 'translateX(30px)',
      scale: 'scale(0.95)',
    };

    el.style.transform = transforms[direction] || transforms.up;

    const root = getScrollParent(el);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            el.style.opacity = '1';
            el.style.transform = 'translateY(0) translateX(0) scale(1)';
            setTimeout(() => { el.style.willChange = 'auto'; }, duration + delay);
            observer.unobserve(el);
          }
        });
      },
      {
        root,
        threshold: 0.05,
        rootMargin: '0px 0px -30px 0px',
      },
    );

    observer.observe(el);
    el._revealObserver = observer;
  },
  unmounted(el) {
    if (el._revealObserver) {
      el._revealObserver.disconnect();
    }
  },
};
