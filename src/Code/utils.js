export const isMobile = () => document.documentElement.clientWidth && document.documentElement.clientWidth <= 768;
export const isDesktop = () => !isMobile();