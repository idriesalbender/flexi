<p align="center">
  <img src="docs/images/full.svg" alt="Flexi" width="240">
</p>
<h6 align="center">
  A mobile-first, lightweight Flexbox grid system.
</h6>

![](https://img.shields.io/npm/dt/@idix/flexi.svg?style=flat) ![](https://img.shields.io/npm/v/@idix/flexi.svg?style=flat) ![](https://img.shields.io/npm/l/@idix/flexi.svg?style=flat) ![](https://img.shields.io/bundlephobia/minzip/@idix/flexi.svg?style=flat)

- [Introduction](#introduction)
- [Usage](#usage)
  - [Install](#install)
    - [CDN](#cdn)
    - [npm / yarn](#npm--yarn)
  - [Syntax](#syntax)
    - [Basic syntax](#basic-syntax)
    - [Remove gutters](#remove-gutters)
    - [Nesting grids](#nesting-grids)
    - [Auto-sizing columns](#auto-sizing-columns)
    - [Alignment](#alignment)
      - [At grid container level](#at-grid-container-level)
      - [At column level](#at-column-level)
    - [Offset](#offset)
- [Material Design specs](#material-design-specs)
- [Customizing](#customizing)
  - [Basic](#basic)
  - [Advanced](#advanced)
    - [Default settings](#default-settings)
    - [Setting a breakpoint's `width` and `gutter` values](#setting-a-breakpoints-width-and-gutter-values)
    - [Override default breakpoints](#override-default-breakpoints)
    - [Add new breakpoints](#add-new-breakpoints)

# Introduction

Flexi is a mobile-first, lightweight CSS grid system based on the flexbox spec.

In addition, it takes some cues from Material Design guidelines regarding breakpoints and grid spacing/gutters.

# Usage

## Install

### CDN

To get started quickly, simply include the built Flexi CSS file in your `<head>`.

**Link:** [https://unpkg.com/@idix/flexi/dist/flexi.min.css](https://unpkg.com/@idix/flexi/dist/flexi.min.css)

```html
<head>
  ...
  <link rel="stylesheet" type="text/css" href="https://unpkg.com/@idix/flexi/dist/flexi.min.css" />
</head>
```

### npm / yarn

To build Flexi yourself, add it to your dependencies using your favorite package manager.

```bash
# npm
npm install @idix/flexi

# yarn
yarn add @idix/flexi
```

Then, include it in your stylesheet.

```scss
@import '~@idix/flexi/src/flexi';
```

## Syntax

### Basic syntax

Flexi uses a very simple syntax. To get a basic grid going, this is all you need:

```html
<div class="grid">
  <div class="col-xs-12 col-md-6 col-xl-3">
    <!-- your content here -->
  </div>
</div>
```

Keep in mind that Flexi is a mobile-first grid: always provide an `xs` class. After, you can extend your layout with responsive classes for larger breakpoints.

### Remove gutters

Only want to use Flexi as a tool for placing layout objects, without the built-in gutters? Simply add the `--no-gutter` modifier to the grid container class:

```html
<div class="grid grid--no-gutter">
  <div class="col-xs-12 col-md-6 col-xl-3">
    <!-- your content here -->
  </div>
</div>
```

### Nesting grids

Flexi grids can easily be nested. Just start a new grid within a column in another grid (and another, and another...):

```html
<div class="grid">
  <div class="col-xs-12">
    <div class="grid">
      <div class="col-xs-12">
        <!-- and on and on -->
      </div>
    </div>
  </div>
</div>
```

### Auto-sizing columns

Don't want to bother with responsive classes? Flexi can take care of the layout for you. Simply omit the width modifier from the column class name:

```html
<div class="grid">
  <div class="col-xs">
    <!-- your content here -->
  </div>
  <div class="col-xs">
    <!-- your content here -->
  </div>
</div>
```

Auto-sizing columns can still be combined with responsive modifiers:

_**Example:** at `xs` breakpoint, auto-size; starting at `md` breakpoint, set specific width._

```html
<div class="grid">
  <div class="col-xs col-md-4">
    <!-- your content here -->
  </div>
  <div class="col-xs col-md-8">
    <!-- your content here -->
  </div>
</div>
```

### Alignment

#### At grid container level

To align all columns contained within a grid container, add one of the alignment classes to the grid container:

| Class                                   | Description                         | Axis   |
| --------------------------------------- | ----------------------------------- | ------ |
| `grid-[breakpoint]-align-items--top`    | Align all columns to the top.       | block  |
| `grid-[breakpoint]-align-items--middle` | Align all columns along the middle. | block  |
| `grid-[breakpoint]-align-items--bottom` | Align all columns to the bottom.    | block  |
| `grid-[breakpoint]-align-items--left`   | Justify all columns to the left.    | inline |
| `grid-[breakpoint]-align-items--center` | Justify all columns to the center.  | inline |
| `grid-[breakpoint]-align-items--right`  | Justify all columns to the right.   | inline |

_**Example:** at `lg` breakpoint, align all columns to the middle._

```html
<div class="grid grid-md-align-items--middle">
  <div class="col-xs">
    <!-- your content here -->
  </div>
  <div class="col-xs">
    <!-- your content here -->
  </div>
</div>
```

#### At column level

To align a specific column within a grid container, use one of the following alignment classes on the column object:

| Class                                 | Description                    | Axis   |
| ------------------------------------- | ------------------------------ | ------ |
| `col-[breakpoint]-align-self--top`    | Align column to the top.       | block  |
| `col-[breakpoint]-align-self--middle` | Align column along the middle. | block  |
| `col-[breakpoint]-align-self--bottom` | Align column to the bottom.    | block  |
| `col-[breakpoint]-align-self--left`   | Justify column to the left.    | inline |
| `col-[breakpoint]-align-self--center` | Justify column to the center.  | inline |
| `col-[breakpoint]-align-self--right`  | Justify column to the right.   | inline |

_**Example:** at `lg` breakpoint, justify single column to the right._

```html
<div class="grid">
  <div class="col-xs col-lg-4">
    <!-- your content here -->
  </div>
  <div class="col-xs col-lg-6 col-lg-align-self--right">
    <!-- your content here -->
  </div>
</div>
```

### Offset

To offset a column, use a breakpoint-specific offset class combined with the number of columns to offset by:

```html
<div class="grid">
  <div class="col-xs-4 col-xs-offset-8">
    <!-- your content here -->
  </div>
</div>
```

# Material Design specs

Flexi takes some cues from [Material Design recommendations](https://material.io/design/layout/responsive-layout-grid.html#breakpoints) regarding margins and gutters at specific breakpoints.

Specifically, the following breakpoints and margin/gutter recommendations are used in Flexi:

| Breakpoint range (px) | Responsive modifier | Gutter |
| --------------------- | ------------------- | ------ |
| 0 - 599               | xs                  | 16     |
| 600 - 1023            | sm                  | 24     |
| 1024 - 1439           | md                  | 24     |
| 1440 - 1919           | lg                  | 24     |
| 1920 +                | xl                  | 24     |


# Customizing

## Basic

When building Flexi yourself, you can customize a couple of straightforward things.

| Setting                  | SCSS variable                     | Description                                         | Default |
| ------------------------ | --------------------------------- | --------------------------------------------------- | ------- |
| Grid size                | `$flexi-grid-size`                | Sets the number of columns the grid should support. | `12`    |
| Grid container namespace | `$flexi-grid-container-namespace` | Sets the grid container class's prefix.             | `grid`  |
| Column namespace         | `$flexi-grid-column-namespace`    | Sets the column class's prefix.                     | `col`   |

## Advanced

You can also override the way the grid behaves. Specifically, you can:

- override existing breakpoints
- add your own breakpoints
- set a specific gutter size for each breakpoint

Do this by setting the **`$flexi-grid-breakpoints`** SCSS variable (map). This variable must have the following shape:

```scss
$flexi-grid-breakpoints: (
  [breakpoint-name]: (width: [int], gutter: [int]),
);
```

### Default settings

The default setting for this variable is as follows:

```scss
$flexi-grid-breakpoints-default: (
  xs: (
    width: 0,
    gutter: 16,
  ),
  sm: (
    width: 600,
    gutter: 24,
  ),
  md: (
    width: 1024,
    gutter: 24,
  ),
  lg: (
    width: 1440,
    gutter: 24,
  ),
  xl: (
    width: 1920,
    gutter: 24,
  ),
);
```

### Setting a breakpoint's `width` and `gutter` values

Use **simple integer values** for the pixel width you'd like. Behind the scenes, Flexi will transform the values into `em` (for media queries) and `rem` (for padding and margins).

_Want to know why? Check out [this article](https://engageinteractive.co.uk/blog/em-vs-rem-vs-px)._

### Override default breakpoints

To override the default breakpoints (`xs`, `sm`, `md`, `lg`, `xl`), simply add its key to the `$flexi-grid-breakpoints-default` map.

_**Example:** set the `md` breakpoint to start at `1080px`_
```scss
$flexi-grid-breakpoints-default: (
  md: (
    width: 1080,
    gutter: 24,
  ),
);
```

### Add new breakpoints

To add your own breakpoint, simply provide a unique key to the `$flexi-grid-breakpoints-default` map.

You will have access to it like you have access to Flexi's default responsive classes.

_**Example:** add an `mdl` breakpoint, starting at `1080px`_
```scss
$flexi-grid-breakpoints-default: (
  mdl: (
    width: 1080,
    gutter: 24,
  ),
);

// generates all classes for that breakpoint, e.g.: .col-mdl-12
```
