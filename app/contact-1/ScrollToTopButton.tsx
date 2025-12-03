'use client';

export default function ScrollToTopButton() {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a
      href="#"
      onClick={handleClick}
      className="inline-block px-8 py-4 bg-[#FAB758] text-white font-bold rounded-lg hover:bg-[#e5a647] transition-all hover:scale-105 shadow-lg"
    >
      Compila il Form Ora →
    </a>
  );
}
