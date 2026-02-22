# Flochat

Professional Floating Social Contact Component for React Applications.

Flochat is a high-performance, customizable React component designed to integrate social media and contact links into web applications with a refined user experience. It provides a non-intrusive interface for users to connect via various platforms.

## Key Features

- **Configurable Layouts**: Supports Multiple expansion styles including Stack, Fan, and Grid.
- **Aesthetic Versatility**: Includes a curated set of professional gradients and support for custom branding.
- **Extensive Platform Support**: Pre-configured for major platforms including WhatsApp, LinkedIn, Twitter, Instagram, GitHub, and more.
- **Technical Excellence**: Optimized for performance, fully responsive, and compatible with both light and dark mode architectures.
- **Modern Stack**: Built with React, Framer Motion for fluid transitions, and Lucide React for iconography.

## Installation

Install the package and its required peer dependencies:

```bash
npm install @arewageek/flochat framer-motion lucide-react
```

## Quick Start

```tsx
import { Flochat } from "@arewageek/flochat";

const App = () => (
  <Flochat
    position="bottom-right"
    socialLinks={[
      {
        platform: "linkedin",
        url: "https://linkedin.com/in/...",
        label: "LinkedIn",
      },
      { platform: "whatsapp", url: "https://wa.me/...", label: "WhatsApp" },
      { platform: "email", url: "mailto:support@example.com", label: "Email" },
    ]}
  />
);

export default App;
```

## API Reference

### Flochat Props

| Property         | Type                                                    | Default          | Description                                                 |
| :--------------- | :------------------------------------------------------ | :--------------- | :---------------------------------------------------------- |
| `size`           | `'sm' \| 'md' \| 'lg' \| 'xl'`                          | `'md'`           | Specifies the dimensions of the component.                  |
| `position`       | `'bottom-right' \| 'bottom-left'`                       | `'bottom-right'` | Determines the anchored position on the viewport.           |
| `socialLinks`    | `SocialLink[]`                                          | `[]`             | Array of contact and social link objects.                   |
| `animationStyle` | `'fan' \| 'stack' \| 'grid'`                            | `'stack'`        | The animation pattern for menu expansion.                   |
| `color`          | `string`                                                | `'blue'`         | Preset gradient name or `'custom'`.                         |
| `showLabels`     | `boolean`                                               | `false`          | When enabled, displays text labels alongside icons.         |
| `toggleIcon`     | `'share' \| 'message' \| 'zap' \| 'sparkles' \| 'grid'` | `'share'`        | The primary button icon.                                    |
| `brandColors`    | `boolean`                                               | `false`          | If true, uses official platform colors for contact buttons. |
| `bottomOffset`   | `number`                                                | `32`             | Adjusts the vertical offset from the bottom.                |

### SocialLink Interface

```typescript
interface SocialLink {
  platform:
    | "instagram"
    | "twitter"
    | "facebook"
    | "linkedin"
    | "youtube"
    | "github"
    | "whatsapp"
    | "email"
    | "phone";
  url: string;
  label: string;
}
```

## Development and Build

Flochat is distributed as a tree-shakeable package. To integrate into your development workflow:

```bash
npm run build
```

## License

This project is licensed under the MIT License.
