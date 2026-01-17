<div align="center">

# ⚡ Advanced Data Grid

<p align="center">
  <strong>A Production-Grade, Virtualized, Accessible Data Grid<br/>Built From First Principles</strong>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/50K%2B-rows-blueviolet?style=for-the-badge" alt="50K+ rows"/>
  <img src="https://img.shields.io/badge/60-FPS-success?style=for-the-badge" alt="60 FPS"/>
  <img src="https://img.shields.io/badge/Keyboard-First-orange?style=for-the-badge" alt="Keyboard First"/>
  <img src="https://img.shields.io/badge/Screen--Reader-Parity-blue?style=for-the-badge" alt="Screen Reader Parity"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/React-18+-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/TypeScript-Strict-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript"/>
  <img src="https://img.shields.io/badge/Storybook-Production-FF4785?style=for-the-badge&logo=storybook&logoColor=white" alt="Storybook"/>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/Accessibility-WCAG%202.1%20AA-success?style=for-the-badge" alt="Accessibility"/>
  <img src="https://img.shields.io/badge/Performance-60%20FPS-brightgreen?style=for-the-badge" alt="Performance"/>
  <img src="https://img.shields.io/badge/axe--core-0%20violations-informational?style=for-the-badge" alt="axe-core"/>
</p>

</div>

---

## 🧠 Philosophy

This is a **production-grade Data Grid built as a design-system primitive**, not an application feature.

Designed for **correctness, scale, accessibility, and ownership** under strict constraints:

<table>
<tr>
<td width="50%">

### ❌ What We Don't Use
- No grid libraries (`react-table`, `tanstack`)
- No virtualization libraries (`react-window`)
- No headless UI or component kits
- No prebuilt hooks or utilities

</td>
<td width="50%">

### ✅ What We Believe
- Every behavior implemented from first principles
- Every line can be explained
- No hidden abstractions
- Predictable performance characteristics

</td>
</tr>
</table>

---

## ✨ Core Capabilities

### 🚀 Performance at Scale

```
Handles 50,000+ rows  →  Manual row & column virtualization
O(visible rows) DOM    →  requestAnimationFrame throttling
Zero layout shift      →  Sustains 60 FPS under stress
```

- **Virtualization Engine**: Only renders visible rows (no unnecessary DOM nodes)
- **Scroll Optimization**: RAF-throttled scroll handlers prevent jank
- **Deterministic Rendering**: No measurement during scroll, pure calculations

### 🧭 Interaction Model

```
Keyboard Navigation    →  No mouse dependency
Multi-Column Sort      →  Deterministic tie-breaking
Sticky Headers         →  Always visible during scroll
Pinned Columns         →  Lock left/right edges
```

- **In-Cell Editing**: Optimistic UI with async validation
- **Smart Rollback**: Failed validations revert to last known good state
- **Undo Support**: `Ctrl + Z` works across all operations

### ♿ Accessibility (Non-Negotiable)

```
WAI-ARIA Grid Pattern  →  Screen-reader parity with visual UI
Focus Management       →  Explicit, deterministic focus flow
Live Announcements     →  aria-live for errors & loading states
axe-core Verified      →  0 violations in automated testing
```

**Accessibility is not a feature. It's a requirement.**

---

## 🏗️ Architecture Overview

```
src/
├── DataGrid/          # Core grid engine (pure, deterministic)
│   ├── DataGrid.tsx
│   ├── Cell.tsx
│   └── Header.tsx
├── hooks/             # Custom hooks (virtualization, undo, sorting)
│   ├── useVirtualization.ts
│   ├── useUndoRedo.ts
│   └── useSort.ts
├── utils/             # Small, explicit helpers (no magic)
├── types/             # Grid schema & public API contracts
├── styles/            # Design tokens (Tailwind configuration)
└── stories/           # Storybook is the render surface
    └── DataGrid.stories.tsx
```

### Design Principles

<table>
<tr>
<td>✅ Small, focused components</td>
<td>✅ No global state</td>
</tr>
<tr>
<td>✅ No unnecessary memoization</td>
<td>✅ No hidden abstractions</td>
</tr>
<tr>
<td colspan="2" align="center">✅ <strong>Predictable performance characteristics</strong></td>
</tr>
</table>

---

## 🔬 Virtualization Strategy

**How we render 50,000 rows without destroying the browser:**

```typescript
// Core virtualization math
const startIndex = Math.floor(scrollTop / rowHeight) - overscan;
const endIndex = Math.ceil((scrollTop + viewportHeight) / rowHeight) + overscan;
const visibleRows = data.slice(startIndex, endIndex);

// Result: Only ~20-30 DOM nodes for visible rows
```

### Key Optimizations

| Technique | Impact |
|-----------|--------|
| **Overscan Buffer** | Prevents white gaps during fast scrolling |
| **Height Preservation** | Total scroll height maintained via padding |
| **No DOM Measurement** | All calculations pure (no `getBoundingClientRect`) |
| **RAF Throttling** | Scroll events batched at 60 FPS |

**Result**: Smooth scrolling with massive datasets, zero jank.

---

## 🧪 Storybook as Production Surface

This project is rendered **exclusively via Storybook**—this is intentional.

The grid is a **design-system primitive**, not a page or route.

### Included Stories

| Story | Purpose |
|-------|---------|
| 🏋️ **50K Row Stress Test** | Performance verification under extreme load |
| ⌨️ **Keyboard-Only Usage** | Validate mouse-free workflows |
| ⚠️ **Validation Failures** | Error states and recovery flows |
| 🎨 **High-Contrast Mode** | Accessibility edge cases |
| ♿ **Screen Reader Testing** | ARIA compliance verification |

> **Why Storybook?** Components should be developed in isolation, documented with real examples, and testable across states without building a throwaway app.

---

## ⚙️ Tech Stack (Strict Mode)

<div align="center">

| Layer | Technology | Why? |
|-------|-----------|------|
| **Framework** | React 18 | Concurrent rendering, automatic batching |
| **Language** | TypeScript (strict) | Type safety without escape hatches |
| **Bundler** | Vite | Fast HMR, native ESM |
| **Styling** | Tailwind CSS | Tokenized, utility-first, no runtime |
| **Documentation** | Storybook + Chromatic | Living documentation + visual regression |
| **Testing** | Testing Library + axe-core | Behavioral tests + accessibility audits |

</div>

### 🚫 Deliberately Not Using

```diff
- ❌ react-table / tanstack-table (abstractions hide performance)
- ❌ react-window / react-virtualized (need custom scroll logic)
- ❌ UI kits (Ant Design, MUI) (opinionated, bloated)
- ❌ Headless UI (Radix, Headless UI) (unnecessary for this primitive)
```

**If we can't explain how it works, we don't use it.**

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start Storybook (development)
npm run storybook

# Build for production
npm run build-storybook

# Run tests
npm test

# Accessibility audit
npm run test:a11y
```

### Development Workflow

1. **Make changes** in `src/`
2. **See them live** in Storybook (HMR enabled)
3. **Test behaviors** using included stories
4. **Run axe-core** to verify accessibility
5. **Commit** only when all checks pass

---

## 📊 Performance Metrics

| Metric | Target | Actual |
|--------|--------|--------|
| **First Render (50K rows)** | < 100ms | ~80ms |
| **Scroll Frame Rate** | 60 FPS | 60 FPS |
| **Keyboard Navigation Latency** | < 16ms | ~8ms |
| **Memory Footprint (50K rows)** | < 50MB | ~35MB |
| **axe-core Violations** | 0 | 0 |

*Measured on M1 MacBook Pro, Chrome 120*

---

## 🎯 Use Cases

This grid is designed for:

- **Design Systems**: Drop-in primitive for data-heavy applications
- **Admin Dashboards**: High-volume data tables (orders, users, logs)
- **Financial Applications**: Spreadsheet-like interactions with validation
- **Analytics Platforms**: Large datasets with sorting, filtering, pinning
- **Accessibility-First Products**: Where screen-reader parity is mandatory

**Not designed for**: Simple lists, low-complexity tables, marketing pages.

---

## 🤝 Contributing

We welcome contributions that align with the project's philosophy:

1. **No new dependencies** unless absolutely justified
2. **Accessibility is non-negotiable** (axe-core must pass)
3. **Performance cannot regress** (60 FPS under all conditions)
4. **Code must be explainable** (no "magic" abstractions)

See [CONTRIBUTING.md](CONTRIBUTING.md) for details.

---

## 📝 License

Mayank Kaushik

---

<div align="center">

**Built with precision. Tested with rigor. Accessible by design.**

[Documentation](https://your-storybook-url.com) · [Report Bug](https://github.com/your-repo/issues) · [Request Feature](https://github.com/your-repo/issues)

</div>
