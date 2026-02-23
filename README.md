# Flochat 🚀

**Premium Floating Social Contact Component for modern React applications.**

Flochat is a high-performance, customizable React component designed to integrate social media and contact links into web applications with a refined user experience. It provides a non-intrusive yet high-impact interface for users to connect via various platforms.

[![NPM Version](https://img.shields.io/npm/v/@flochat/react?color=blue&style=flat-square)](https://www.npmjs.com/package/@flochat/react)
[![Bundle Size](https://img.shields.io/bundlephobia/minzip/@flochat/react?style=flat-square)](https://bundlephobia.com/package/@flochat/react)

---

## ✨ Features

- **Multiple Expansion Styles**: Support for **Stack**, **Fan**, and **Matrix Grid** layouts.
- **Visual Versatility**: 15+ curated professional gradients and custom branding support.
- **Universal Platform Support**: Pre-configured for WhatsApp, LinkedIn, Twitter, Instagram, GitHub, GitLab, and more.
- **Technical Excellence**: Built with Framer Motion for liquid transitions, fully responsive, and tree-shakeable.
- **Adaptive Theme**: Seamless compatibility with both light and dark mode architectures.

## 📦 Installation

```bash
# Using npm
npm install @flochat/react

# Using bun
bun add @flochat/react
```

## 🚀 Quick Start

```tsx
import { Flochat } from "@flochat/react";

const App = () => (
  <Flochat
    position="bottom-right"
    animationStyle="stack"
    color="blue"
    socialLinks={[
      { platform: "whatsapp", url: "https://wa.me/...", label: "WhatsApp" },
      {
        platform: "linkedin",
        url: "https://linkedin.com/in/...",
        label: "LinkedIn",
      },
      { platform: "email", url: "mailto:hello@example.com", label: "Email" },
    ]}
  />
);

export default App;
```

---

## 🛠️ API Reference

### Flochat Props

| Property         | Type                                                    | Default          | Description                                               |
| :--------------- | :------------------------------------------------------ | :--------------- | :-------------------------------------------------------- |
| `socialLinks`    | `SocialLink[]`                                          | `[]`             | **Required.** Array of contact and social link objects.   |
| `size`           | `'sm' \| 'md' \| 'lg' \| 'xl'`                          | `'md'`           | Dimensions of the component.                              |
| `position`       | `'bottom-right' \| 'bottom-left'`                       | `'bottom-right'` | Fixed position on the viewport.                           |
| `bottomOffset`   | `number`                                                | `32`             | Vertical offset from the viewport floor (pixels).         |
| `color`          | `string`                                                | `'blue'`         | Preset gradient name or `'custom'`.                       |
| `customColors`   | `object`                                                | `null`           | Primary, secondary, and hover colors for `'custom'` mode. |
| `animationStyle` | `'stack' \| 'fan' \| 'grid'`                            | `'stack'`        | The expansion pattern behavior.                           |
| `toggleIcon`     | `'share' \| 'message' \| 'zap' \| 'sparkles' \| 'grid'` | `'share'`        | The primary button icon variant.                          |
| `showLabels`     | `boolean`                                               | `false`          | Displays text labels alongside platform icons.            |
| `brandColors`    | `boolean`                                               | `false`          | Uses official platform branding colors for buttons.       |
| `isAbsolute`     | `boolean`                                               | `false`          | Sets position to `absolute` instead of `fixed`.           |

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
    | "phone"
    | "gitlab"
    | "link";
  url: string;
  label: string;
}
```
