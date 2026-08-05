# Developer Portfolio V3

## Philosophy

The portfolio is designed as a desktop application running in the browser.

Instead of traditional sections, the application is built around reusable UI components,
feature modules, and a shared layout system.

---

## Folder Structure

app/

components/

config/

hooks/

utils/

styles/

---

## Layers

Configuration

↓

Layout

↓

Features

↓

UI

---

## UI Components

Button

Badge

Card

Panel

Modal

Tooltip

---

## Feature Structure

feature/

Feature.jsx

components/

hooks/

constants.js

feature.motion.js

index.js

---

## Naming Convention

Components

PascalCase

Hooks

camelCase

Utilities

camelCase

Constants

UPPER_SNAKE_CASE

---

## Import Rules

Prefer

@/

instead of

../../../

---

## Principles

Single Responsibility

Composition over inheritance

Reusable before duplicated

Configuration over hardcoded values

Accessibility first

Mobile first

Animation should enhance, not distract
