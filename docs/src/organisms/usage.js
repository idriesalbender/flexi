import React from 'react';
import Heading from '../components/atoms/Heading';
import Paragraph from '../components/atoms/Paragraph';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { docco } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const CODE_STRINGS = {
  CDN_INSTALL: `<head>
  ...
  <link rel="stylesheet" type="text/css" href="https://unpkg.com/@idix/flexi/dist/flexi.min.css" />
</head>`,
  PM_INSTALL: {
    install: `npm install @idix/flexi
  
yarn add @idix/flexi`,
    include: `@import '~@idix/flexi/src/flexi';`,
  },
  SYNTAX: {
    basic: `<div class="grid">
  <div class="col-xs-12 col-md-6 col-xl-3">
    <!-- your content here -->
  </div>
</div>`,
    noGutter: `<div class="grid grid--no-gutter">
  <div class="col-xs-12 col-md-6 col-xl-3">
    <!-- your content here -->
  </div>
</div>`,
    nesting: `<div class="grid">
  <div class="col-xs-12">
    <div class="grid">
      <div class="col-xs-12">
        <!-- and on and on -->
      </div>
    </div>
  </div>
</div>`,
    auto: `<div class="grid">
  <div class="col-xs">
    <!-- your content here -->
  </div>
  <div class="col-xs">
    <!-- your content here -->
  </div>
</div>`,
    autoExample: `<div class="grid">
  <div class="col-xs col-md-4">
    <!-- your content here -->
  </div>
  <div class="col-xs col-md-8">
    <!-- your content here -->
  </div>
</div>`,
    alignGrid: `<div class="grid grid-md-align-items--middle">
  <div class="col-xs">
    <!-- your content here -->
  </div>
  <div class="col-xs">
    <!-- your content here -->
  </div>
</div>`,
    alignColumn: {
      self: `<div class="grid">
  <div class="col-xs col-lg-4">
    <!-- your content here -->
  </div>
  <div class="col-xs col-lg-6 col-lg-align-self--right">
    <!-- your content here -->
  </div>
</div>`,
      contents: `<div class="grid">
  <div class="col-xs col-lg-4">
    <!-- your content here -->
  </div>
  <div class="col-xs col-lg-6 col-lg-align-content--right">
    <!-- your content here -->
  </div>
</div>`,
    },
  },
};

const ALIGNMENT = {
  grid: {
    headings: ['Class', 'Description', 'Axis'],
    data: [
      {
        class: 'grid-[breakpoint]-align-items--top',
        description: 'Align all columns to the top',
        axis: 'block',
      },
      {
        class: 'grid-[breakpoint]-align-items--middle',
        description: 'Align all columns along the middle',
        axis: 'block',
      },
      {
        class: 'grid-[breakpoint]-align-items--bottom',
        description: 'Align all columns to the bottom',
        axis: 'block',
      },
      {
        class: 'grid-[breakpoint]-align-items--left',
        description: 'Justify all columns to the left',
        axis: 'inline',
      },
      {
        class: 'grid-[breakpoint]-align-items--center',
        description: 'Justify all columns to the center',
        axis: 'inline',
      },
      {
        class: 'grid-[breakpoint]-align-items--right',
        description: 'Justify all columns to the right',
        axis: 'inline',
      },
    ],
  },
  column: {
    self: {
      headings: ['Class', 'Description', 'Axis'],
      data: [
        {
          class: 'col-[breakpoint]-align-self--top',
          description: 'Align column to the top',
          axis: 'block',
        },
        {
          class: 'col-[breakpoint]-align-self--middle',
          description: 'Align column along the middle',
          axis: 'block',
        },
        {
          class: 'col-[breakpoint]-align-self--bottom',
          description: 'Align column to the bottom',
          axis: 'block',
        },
        {
          class: 'col-[breakpoint]-align-self--left',
          description: 'Justify column to the left',
          axis: 'inline',
        },
        {
          class: 'col-[breakpoint]-align-self--center',
          description: 'Justify column to the center',
          axis: 'inline',
        },
        {
          class: 'col-[breakpoint]-align-self--right',
          description: 'Justify column to the right',
          axis: 'inline',
        },
      ],
    },
    contents: {
      headings: ['Class', 'Description', 'Axis'],
      data: [
        {
          class: 'col-[breakpoint]-align-content--top',
          description: 'Align content to the top',
          axis: 'block',
        },
        {
          class: 'col-[breakpoint]-align-content--middle',
          description: 'Align content along the middle',
          axis: 'block',
        },
        {
          class: 'col-[breakpoint]-align-content--bottom',
          description: 'Align content to the bottom',
          axis: 'block',
        },
        {
          class: 'col-[breakpoint]-align-content--left',
          description: 'Justify content to the left',
          axis: 'inline',
        },
        {
          class: 'col-[breakpoint]-align-content--center',
          description: 'Justify content to the center',
          axis: 'inline',
        },
        {
          class: 'col-[breakpoint]-align-content--right',
          description: 'Justify content to the right',
          axis: 'inline',
        },
      ],
    },
  },
};

export default () => (
  <>
    <Heading size={2}>Usage</Heading>
    <Heading size={3}>Install</Heading>
    <Heading size={4}>CDN</Heading>
    <Paragraph>
      To get started quickly, simply include the built Flexi CSS file in your{' '}
      <code>{`<head>`}</code>.
    </Paragraph>
    <Paragraph>
      <strong>Link:</strong>{' '}
      <a href="https://unpkg.com/@idix/flexi/dist/flexi.min.css">
        https://unpkg.com/@idix/flexi/dist/flexi.min.css
      </a>
    </Paragraph>
    <Paragraph>
      <SyntaxHighlighter language="html" style={docco}>
        {CODE_STRINGS.CDN_INSTALL}
      </SyntaxHighlighter>
    </Paragraph>

    <Heading size={4}>Package manager</Heading>
    <Paragraph>
      To build Flexi yourself, add it to your dependencies using your favorite package manager.
    </Paragraph>
    <Paragraph>
      <SyntaxHighlighter language="shell" style={docco}>
        {CODE_STRINGS.PM_INSTALL.install}
      </SyntaxHighlighter>
    </Paragraph>
    <Paragraph>Then, include it in your stylesheet.</Paragraph>
    <Paragraph>
      <SyntaxHighlighter language="scss" style={docco}>
        {CODE_STRINGS.PM_INSTALL.include}
      </SyntaxHighlighter>
    </Paragraph>

    <Heading size={3}>Syntax</Heading>
    <Heading size={4}>Basics</Heading>
    <Paragraph>
      Flexi uses a very simple syntax. To get a basic grid going, this is all you need:
    </Paragraph>
    <Paragraph>
      <SyntaxHighlighter language="html" style={docco}>
        {CODE_STRINGS.SYNTAX.basic}
      </SyntaxHighlighter>
    </Paragraph>
    <Paragraph>
      Keep in mind that Flexi is a mobile-first grid: always provide an <code>xs</code> class.
      After, you can extend your layout with responsive classes for larger breakpoints.
    </Paragraph>

    <Heading size={4}>Remove gutters</Heading>
    <Paragraph>
      Only want to use Flexi as a tool for placing layout objects, without the built-in gutters?
      Simply add the --no-gutter modifier to the grid container class:
    </Paragraph>
    <Paragraph>
      <SyntaxHighlighter language="html" style={docco}>
        {CODE_STRINGS.SYNTAX.noGutter}
      </SyntaxHighlighter>
    </Paragraph>

    <Heading size={4}>Nesting grids</Heading>
    <Paragraph>
      Flexi grids can easily be nested. Just start a new grid within a column in another grid
      (and another, and another...):
    </Paragraph>
    <Paragraph>
      <SyntaxHighlighter language="html" style={docco}>
        {CODE_STRINGS.SYNTAX.nesting}
      </SyntaxHighlighter>
    </Paragraph>

    <Heading size={4}>Auto-sizing columns</Heading>
    <Paragraph>
      Don't want to bother with responsive classes? Flexi can take care of the layout for you.
      Simply omit the width modifier from the column class name:
    </Paragraph>
    <Paragraph>
      <SyntaxHighlighter language="html" style={docco}>
        {CODE_STRINGS.SYNTAX.auto}
      </SyntaxHighlighter>
    </Paragraph>
    <Paragraph>
      Auto-sizing columns can still be combined with responsive modifiers. For example:{' '}
      <em>
        at <code>xs</code> breakpoint, auto-size; starting at <code>md</code> breakpoint, set
        specific width.
      </em>
    </Paragraph>
    <Paragraph>
      <SyntaxHighlighter language="html" style={docco}>
        {CODE_STRINGS.SYNTAX.autoExample}
      </SyntaxHighlighter>
    </Paragraph>

    <Heading size={4}>Alignment</Heading>
    <Heading size={5}>At grid container level</Heading>
    <Paragraph>
      To align all columns contained within a grid container, add one of the alignment classes
      to the grid container:
    </Paragraph>
    <table className="c-table">
      <thead>
        <tr>
          {ALIGNMENT.grid.headings.map(h => (
            <th>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {ALIGNMENT.grid.data.map(r => (
          <tr>
            <td>
              <code>{r.class}</code>
            </td>
            <td>{r.description}</td>
            <td>{r.axis}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <Paragraph>
      <SyntaxHighlighter language="html" style={docco}>
        {CODE_STRINGS.SYNTAX.alignGrid}
      </SyntaxHighlighter>
    </Paragraph>
    <Heading size={5}>At column level</Heading>
    <Heading size={6}>Self</Heading>
    <Paragraph>
      To align a specific column within a grid container, use one of the following alignment
      classes on the column object:
    </Paragraph>
    <table className="c-table">
      <thead>
        <tr>
          {ALIGNMENT.column.self.headings.map(h => (
            <th>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {ALIGNMENT.column.self.data.map(r => (
          <tr>
            <td>
              <code>{r.class}</code>
            </td>
            <td>{r.description}</td>
            <td>{r.axis}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <Paragraph>
      <SyntaxHighlighter language="html" style={docco}>
        {CODE_STRINGS.SYNTAX.alignColumn.self}
      </SyntaxHighlighter>
    </Paragraph>
    <Heading size={6}>Contents</Heading>
    <Paragraph>
      To align the contents of a column, use one of the following alignment classes on the
      column object:
    </Paragraph>
    <table className="c-table">
      <thead>
        <tr>
          {ALIGNMENT.column.contents.headings.map(h => (
            <th>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {ALIGNMENT.column.contents.data.map(r => (
          <tr>
            <td>
              <code>{r.class}</code>
            </td>
            <td>{r.description}</td>
            <td>{r.axis}</td>
          </tr>
        ))}
      </tbody>
    </table>
    <Paragraph>
      <SyntaxHighlighter language="html" style={docco}>
        {CODE_STRINGS.SYNTAX.alignColumn.contents}
      </SyntaxHighlighter>
    </Paragraph>
  </>
);
