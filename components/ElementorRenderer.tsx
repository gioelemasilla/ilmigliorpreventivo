import React from 'react';
import { ElementorElement } from '@/types/wordpress';
import { replaceImageUrls } from '@/lib/data';

interface ElementorRendererProps {
  elements?: ElementorElement[];
}

export function ElementorRenderer({ elements }: ElementorRendererProps) {
  if (!elements || elements.length === 0) {
    return null;
  }

  return (
    <>
      {elements.map((element) => (
        <ElementorElementComponent key={element.id} element={element} />
      ))}
    </>
  );
}

// Section component (old Elementor structure)
const SectionElement = ({ element }: { element: ElementorElement }) => {
  const settings = element.settings || {};

  // Extract background settings
  const backgroundColor = settings.background_color;
  const backgroundImage = settings.background_image?.url;
  const backgroundSlideshow = settings.background_slideshow_gallery?.[0]?.url;

  // Extract padding
  const padding = settings.padding || {};

  const style: React.CSSProperties = {
    backgroundColor,
    backgroundImage: backgroundImage ? `url(${replaceImageUrls(backgroundImage)})` :
                     backgroundSlideshow ? `url(${replaceImageUrls(backgroundSlideshow)})` : undefined,
    backgroundSize: settings.background_size || 'cover',
    backgroundPosition: settings.background_position || 'center',
    paddingTop: padding.top ? `${padding.top}px` : undefined,
    paddingRight: padding.right ? `${padding.right}px` : undefined,
    paddingBottom: padding.bottom ? `${padding.bottom}px` : undefined,
    paddingLeft: padding.left ? `${padding.left}px` : undefined,
  };

  return (
    <section className="elementor-section" style={style}>
      <div className="container mx-auto">
        <div className="elementor-row flex flex-wrap">
          {element.elements && <ElementorRenderer elements={element.elements} />}
        </div>
      </div>
    </section>
  );
};

// Column component (old Elementor structure)
const ColumnElement = ({ element }: { element: ElementorElement }) => {
  const settings = element.settings || {};
  const columnSize = settings._column_size || 50;
  const inlineSize = settings._inline_size || columnSize;

  // Convert column size to Tailwind width classes
  let widthClass = 'w-full';
  if (inlineSize <= 25) widthClass = 'md:w-1/4';
  else if (inlineSize <= 33) widthClass = 'md:w-1/3';
  else if (inlineSize <= 50) widthClass = 'md:w-1/2';
  else if (inlineSize <= 66) widthClass = 'md:w-2/3';
  else if (inlineSize <= 75) widthClass = 'md:w-3/4';

  return (
    <div className={`elementor-column ${widthClass} px-4`}>
      <div className="elementor-column-wrap">
        {element.elements && <ElementorRenderer elements={element.elements} />}
      </div>
    </div>
  );
};

// Container component (new Elementor structure)
const ContainerElement = ({ element }: { element: ElementorElement }) => {
  const settings = element.settings || {};
  const flexDirection = settings.flex_direction || 'column';
  const width = settings.width?.size || 100;
  const widthUnit = settings.width?.unit || '%';

  const containerClasses = [
    'elementor-container',
    flexDirection === 'row' ? 'flex flex-row' : 'flex flex-col',
    settings.content_width === 'full' ? 'w-full' : 'container mx-auto',
  ].join(' ');

  const style: React.CSSProperties = {
    width: `${width}${widthUnit}`,
    gap: settings.flex_gap?.size || 0,
    justifyContent: settings.flex_justify_content,
    alignItems: settings.flex_align_items,
    minHeight: settings.min_height?.size ? `${settings.min_height.size}px` : undefined,
  };

  return (
    <div className={containerClasses} style={style}>
      {element.elements && <ElementorRenderer elements={element.elements} />}
    </div>
  );
};

// Widget components
const HeadingWidget = ({ element }: { element: ElementorElement }) => {
  const settings = element.settings || {};
  const title = settings.title || '';
  const headerSize = settings.header_size || 'h2';
  const align = settings.align || 'left';
  const color = settings.title_color || '#1C244B';

  const typography = settings.typography_typography === 'custom' ? {
    fontFamily: settings.typography_font_family,
    fontSize: settings.typography_font_size?.size ? `${settings.typography_font_size.size}px` : undefined,
    fontWeight: settings.typography_font_weight,
    lineHeight: settings.typography_line_height?.size,
    letterSpacing: settings.typography_letter_spacing?.size ? `${settings.typography_letter_spacing.size}px` : undefined,
    textTransform: settings.typography_text_transform as any,
  } : {};

  const style: React.CSSProperties = {
    textAlign: align as any,
    color,
    ...typography,
  };

  const className = `elementor-heading ${settings._animation || ''}`;

  return React.createElement(
    headerSize,
    {
      className,
      style,
      dangerouslySetInnerHTML: { __html: title },
    }
  );
};

const TextEditorWidget = ({ element }: { element: ElementorElement }) => {
  const settings = element.settings || {};
  const content = replaceImageUrls(settings.editor || '');
  const align = settings.align || 'left';

  const style: React.CSSProperties = {
    textAlign: align as any,
  };

  return (
    <div
      className="elementor-text-editor prose max-w-none"
      style={style}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

const ImageWidget = ({ element }: { element: ElementorElement }) => {
  const settings = element.settings || {};
  const image = settings.image;

  if (!image || !image.url) {
    return null;
  }

  const imageUrl = replaceImageUrls(image.url);
  const alt = image.alt || '';

  return (
    <div className="elementor-image">
      <img
        src={imageUrl}
        alt={alt}
        className="w-full h-auto"
        loading="lazy"
      />
    </div>
  );
};

const ButtonWidget = ({ element }: { element: ElementorElement }) => {
  const settings = element.settings || {};
  const text = settings.text || 'Click Here';
  const link = settings.link?.url || '#';
  const bgColor = settings.btn_bg_color || '#FAB758';

  const typography = settings.btn_typography_typography === 'custom' ? {
    fontFamily: settings.btn_typography_font_family,
    fontSize: settings.btn_typography_font_size?.size ? `${settings.btn_typography_font_size.size}px` : undefined,
    letterSpacing: settings.btn_typography_letter_spacing?.size ? `${settings.btn_typography_letter_spacing.size}px` : undefined,
  } : {};

  const style: React.CSSProperties = {
    backgroundColor: bgColor,
    ...typography,
  };

  return (
    <a
      href={link}
      className="elementor-button inline-block px-6 py-3 rounded text-white hover:opacity-90 transition-opacity"
      style={style}
    >
      {text}
    </a>
  );
};

// Custom theme widgets
const LogoWidget = ({ element }: { element: ElementorElement }) => {
  const settings = element.settings || {};
  const logoImage = settings.logo_image;

  if (!logoImage || !logoImage.url) {
    return null;
  }

  const imageUrl = replaceImageUrls(logoImage.url);
  const width = settings.logo_width?.size || 200;

  return (
    <div className="site-logo">
      <a href="/">
        <img
          src={imageUrl}
          alt="Logo"
          style={{ width: `${width}px`, height: 'auto' }}
        />
      </a>
    </div>
  );
};

const MenuWidget = ({ element }: { element: ElementorElement }) => {
  // Simplified menu - add your actual menu items here
  const menuItems = [
    { title: 'Luce & Gas', url: '/luce-gas' },
    { title: 'Fibra & Telefonia', url: '/fibra-telefonia' },
    { title: 'Fotovoltaico', url: '/fotovoltaico' },
    { title: 'Pratiche GSE', url: '/pratiche-gse' },
    { title: 'Pratiche ENEA', url: '/pratiche-enea' },
  ];

  return (
    <nav className="site-nav">
      <ul className="flex gap-6">
        {menuItems.map((item, index) => (
          <li key={index}>
            <a
              href={item.url}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const SidePanelWidget = ({ element }: { element: ElementorElement }) => {
  // Simplified side panel trigger
  return (
    <button className="side-panel-trigger px-4 py-2 bg-blue-600 text-white rounded">
      Menu
    </button>
  );
};

// Widget dispatcher
const WidgetElement = ({ element }: { element: ElementorElement }) => {
  const widgetType = element.widgetType;

  switch (widgetType) {
    case 'heading':
      return <HeadingWidget element={element} />;
    case 'text-editor':
      return <TextEditorWidget element={element} />;
    case 'image':
      return <ImageWidget element={element} />;
    case 'ot-btn':
    case 'button':
      return <ButtonWidget element={element} />;
    // Custom theme widgets
    case 'ilogo':
      return <LogoWidget element={element} />;
    case 'imenu':
      return <MenuWidget element={element} />;
    case 'isidepanel':
      return <SidePanelWidget element={element} />;
    default:
      // For unsupported widgets, render nothing
      return null;
  }
};

// Main element component dispatcher
const ElementorElementComponent = ({ element }: { element: ElementorElement }) => {
  // Handle sections (old Elementor structure)
  if (element.elType === 'section') {
    return <SectionElement element={element} />;
  }

  // Handle columns (old Elementor structure)
  if (element.elType === 'column') {
    return <ColumnElement element={element} />;
  }

  // Handle containers (new Elementor structure)
  if (element.elType === 'container') {
    return <ContainerElement element={element} />;
  }

  // Handle widgets
  if (element.elType === 'widget') {
    return <WidgetElement element={element} />;
  }

  return null;
};
