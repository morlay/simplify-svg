// http://www.w3.org/TR/SVG/intro.html#Definitions
export const attrsGroups = {
  animationAddition: ["additive", "accumulate"],
  animationAttributeTarget: ["attributeType", "attributeName"],
  animationEvent: ["onbegin", "onend", "onrepeat", "onload"],
  animationTiming: ["begin", "dur", "end", "min", "max", "restart", "repeatCount", "repeatDur", "fill"],
  animationValue: ["calcMode", "values", "keyTimes", "keySplines", "from", "to", "by"],
  conditionalProcessing: ["requiredFeatures", "requiredExtensions", "systemLanguage"],
  core: ["id", "tabindex", "xml:base", "xml:lang", "xml:space"],
  graphicalEvent: [
    "onfocusin",
    "onfocusout",
    "onactivate",
    "onclick",
    "onmousedown",
    "onmouseup",
    "onmouseover",
    "onmousemove",
    "onmouseout",
    "onload",
  ],
  presentation: [
    "alignment-baseline",
    "baseline-shift",
    "buffered-rendering",
    "clip",
    "clip-path",
    "clip-rule",
    "color",
    "color-interpolation",
    "color-interpolation-filters",
    "color-profile",
    "color-rendering",
    "cursor",
    "direction",
    "display",
    "dominant-baseline",
    "enable-background",
    "fill",
    "fill-opacity",
    "fill-rule",
    "filter",
    "flood-color",
    "flood-opacity",
    "font-family",
    "font-size",
    "font-size-adjust",
    "font-stretch",
    "font-style",
    "font-variant",
    "font-weight",
    "glyph-orientation-horizontal",
    "glyph-orientation-vertical",
    "image-rendering",
    "kerning",
    "letter-spacing",
    "lighting-color",
    "marker-end",
    "marker-mid",
    "marker-start",
    "mask",
    "opacity",
    "overflow",
    "pointer-events",
    "shape-rendering",
    "solid-color",
    "solid-opacity",
    "stop-color",
    "stop-opacity",
    "stroke",
    "stroke-dasharray",
    "stroke-dashoffset",
    "stroke-linecap",
    "stroke-linejoin",
    "stroke-miterlimit",
    "stroke-opacity",
    "stroke-width",
    "paint-order",
    "text-anchor",
    "text-decoration",
    "text-overflow",
    "white-space",
    "text-rendering",
    "unicode-bidi",
    "vector-effect",
    "viewport-fill",
    "viewport-fill-opacity",
    "visibility",
    "white-space",
    "word-spacing",
    "writing-mode",
  ],
  xlink: ["xlink:href", "xlink:show", "xlink:actuate", "xlink:type", "xlink:role", "xlink:arcrole", "xlink:title"],
  documentEvent: ["onunload", "onabort", "onerror", "onresize", "onscroll", "onzoom"],
  filterPrimitive: ["x", "y", "width", "height", "result"],
  transferFunction: ["type", "tableValues", "slope", "intercept", "amplitude", "exponent", "offset"],
};

export const attrsGroupsDefaults = {
  core: { "xml:space": "preserve" },
  filterPrimitive: { x: "0", y: "0", width: "100%", height: "100%" },
  presentation: {
    clip: "auto",
    "clip-path": "none",
    "clip-rule": "nonzero",
    mask: "none",
    opacity: "1",
    "solid-color": "#000",
    "solid-opacity": "1",
    "stop-color": "#000",
    "stop-opacity": "1",
    "fill-opacity": "1",
    "fill-rule": "nonzero",
    fill: "#000",
    stroke: "none",
    "stroke-width": "1",
    "stroke-linecap": "butt",
    "stroke-linejoin": "miter",
    "stroke-miterlimit": "4",
    "stroke-dasharray": "none",
    "stroke-dashoffset": "0",
    "stroke-opacity": "1",
    "paint-order": "normal",
    "vector-effect": "none",
    "viewport-fill": "none",
    "viewport-fill-opacity": "1",
    display: "inline",
    visibility: "visible",
    "marker-start": "none",
    "marker-mid": "none",
    "marker-end": "none",
    "color-interpolation": "sRGB",
    "color-interpolation-filters": "linearRGB",
    "color-rendering": "auto",
    "shape-rendering": "auto",
    "text-rendering": "auto",
    "image-rendering": "auto",
    "buffered-rendering": "auto",
    "font-style": "normal",
    "font-variant": "normal",
    "font-weight": "normal",
    "font-stretch": "normal",
    "font-size": "medium",
    "font-size-adjust": "none",
    kerning: "auto",
    "letter-spacing": "normal",
    "word-spacing": "normal",
    "text-decoration": "none",
    "text-anchor": "start",
    "text-overflow": "clip",
    "writing-mode": "lr-tb",
    "glyph-orientation-vertical": "auto",
    "glyph-orientation-horizontal": "0deg",
    direction: "ltr",
    "unicode-bidi": "normal",
    "dominant-baseline": "auto",
    "alignment-baseline": "baseline",
    "baseline-shift": "baseline",
  },
  transferFunction: { slope: "1", intercept: "0", amplitude: "1", exponent: "1", offset: "0" },
};

// http://www.w3.org/TR/SVG/propidx.html
export const inheritableAttrs = [
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "cursor",
  "direction",
  "fill",
  "fill-opacity",
  "fill-rule",
  "font",
  "font-family",
  "font-size",
  "font-size-adjust",
  "font-stretch",
  "font-style",
  "font-variant",
  "font-weight",
  "glyph-orientation-horizontal",
  "glyph-orientation-vertical",
  "image-rendering",
  "kerning",
  "letter-spacing",
  "marker",
  "marker-end",
  "marker-mid",
  "marker-start",
  "pointer-events",
  "shape-rendering",
  "stroke",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke-width",
  "text-anchor",
  "text-rendering",
  "transform",
  "visibility",
  "white-space",
  "word-spacing",
  "writing-mode",
];

// http://www.w3.org/TR/SVG/single-page.html#types-DataTypeColor
export const colorsProps = ["color", "fill", "stroke", "stop-color", "flood-color", "lighting-color"];

// http://www.w3.org/TR/SVG/linking.html#processingIRI
export const referencesProps = [
  "clip-path",
  "color-profile",
  "fill",
  "filter",
  "marker-start",
  "marker-mid",
  "marker-end",
  "mask",
  "stroke",
  "style",
];