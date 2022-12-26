module.exports = {
  name: "Bkase Dev",
  type: "light",
  colors: {
    "editor.background": "#f7f7f9",
    "editor.foreground": "#fafafa",
    "activityBar.background": "#f7f7f9",
    "sideBar.background": "#1A2652",
    "editorGroupHeader.tabsBackground": "#ffffff",
    "sideBarSectionHeader.background": "#ffffff",
    "tab.activeBackground": "#f7f7f9",
    "tab.inactiveBackground": "#ffffff",
    "tab.border": "#1A2652",
    "input.background": "#ffffff1a",
    "panel.background": "#1A2652",
    "panel.border": "#1A2652",
    "editorWidget.background": "#0d0f2b",
    "editorWidget.foreground": "#ffffff4d",
    "editorWidget.border": "#0d0f2b",
    "list.hoverBackground": "#ffffff1a",
    "list.activeSelectionBackground": "#ffffff1a",
    "list.inactiveSelectionBackground": "#ffffff1a",
    "editor.hoverHighlightBackground": "#ffffff1a",
    "editor.selectionHighlightBackground": "#ffffff1a",
    "activityBarBadge.background": "#007acc",
    "sideBarTitle.foreground": "#bbbbbb",
    "statusBar.background": "#212d63"
  },
  tokenColors: [
    {
      "scope": "emphasis",
      "settings": {
        "fontStyle": "italic"
      }
    },
    {
      "scope": "strong",
      "settings": {
        "fontStyle": "bold"
      }
    },
    {
      "scope": "header",
      "settings": {
        "foreground": "#458588"
      }
    },
    {
      "scope": ["comment", "punctuation.definition.comment"],
      "settings": {
        "foreground": "#928374",
        "fontStyle": "italic"
      }
    },
    {
      "scope": ["constant", "support.constant", "variable.arguments"],
      "settings": {
        "foreground": "#8f3f71"
      }
    },
    {
      "scope": "constant.rgb-value",
      "settings": {
        "foreground": "#3c3836"
      }
    },
    {
      "scope": "entity.name.selector",
      "settings": {
        "foreground": "#427b58"
      }
    },
    {
      "scope": "entity.other.attribute-name",
      "settings": {
        "foreground": "#b57614"
      }
    },
    {
      "scope": ["entity.name.tag", "punctuation.tag"],
      "settings": {
        "foreground": "#427b58"
      }
    },
    {
      "scope": ["invalid", "invalid.illegal"],
      "settings": {
        "foreground": "#cc241d"
      }
    },
    {
      "scope": "invalid.deprecated",
      "settings": {
        "foreground": "#b16286"
      }
    },
    {
      "scope": "meta.selector",
      "settings": {
        "foreground": "#427b58"
      }
    },
    {
      "scope": "meta.preprocessor",
      "settings": {
        "foreground": "#af3a03"
      }
    },
    {
      "scope": "meta.preprocessor.string",
      "settings": {
        "foreground": "#79740e"
      }
    },
    {
      "scope": "meta.preprocessor.numeric",
      "settings": {
        "foreground": "#79740e"
      }
    },
    {
      "scope": "meta.header.diff",
      "settings": {
        "foreground": "#af3a03"
      }
    },
    {
      "scope": "storage",
      "settings": {
        "foreground": "#9d0006"
      }
    },
    {
      "scope": "storage.modifier",
      "settings": {
        "foreground": "#af3a03"
      }
    },
    {
      "scope": "string",
      "settings": {
        "foreground": "#79740e"
      }
    },
    {
      "scope": "string.tag",
      "settings": {
        "foreground": "#79740e"
      }
    },
    {
      "scope": "string.value",
      "settings": {
        "foreground": "#79740e"
      }
    },
    {
      "scope": "string.regexp",
      "settings": {
        "foreground": "#af3a03"
      }
    },
    {
      "scope": "string.escape",
      "settings": {
        "foreground": "#9d0006"
      }
    },
    {
      "scope": "string.quasi",
      "settings": {
        "foreground": "#427b58"
      }
    },
    {
      "scope": "string.entity",
      "settings": {
        "foreground": "#79740e"
      }
    },
    {
      "scope": "object",
      "settings": {
        "foreground": "#3c3836"
      }
    },
    {
      "scope": "module.node",
      "settings": {
        "foreground": "#076678"
      }
    },
    {
      "scope": "support.type.property-name",
      "settings": {
        "foreground": "#689d6a"
      }
    },
    {
      "scope": "keyword",
      "settings": {
        "foreground": "#9d0006"
      }
    },
    {
      "scope": "keyword.control",
      "settings": {
        "foreground": "#9d0006"
      }
    },
    {
      "scope": "keyword.control.module",
      "settings": {
        "foreground": "#427b58"
      }
    },
    {
      "scope": "keyword.control.less",
      "settings": {
        "foreground": "#d79921"
      }
    },
    {
      "scope": "keyword.operator",
      "settings": {
        "foreground": "#427b58"
      }
    },
    {
      "scope": "keyword.operator.new",
      "settings": {
        "foreground": "#af3a03"
      }
    },
    {
      "scope": "keyword.other.unit",
      "settings": {
        "foreground": "#79740e"
      }
    },
    {
      "scope": "metatag.php",
      "settings": {
        "foreground": "#af3a03"
      }
    },
    {
      "scope": "support.function.git-rebase",
      "settings": {
        "foreground": "#689d6a"
      }
    },
    {
      "scope": "constant.sha.git-rebase",
      "settings": {
        "foreground": "#79740e"
      }
    },
    {
      "name": "Types declaration and references",
      "scope": [
        "meta.type.name",
        "meta.return.type",
        "meta.return-type",
        "meta.cast",
        "meta.type.annotation",
        "support.type",
        "storage.type.cs",
        "variable.class"
      ],
      "settings": {
        "foreground": "#b57614"
      }
    },
    {
      "scope": ["variable.this", "support.variable"],
      "settings": {
        "foreground": "#8f3f71"
      }
    },
    {
      "scope": [
        "entity.name",
        "entity.static",
        "entity.name.class.static.function",
        "entity.name.function",
        "entity.name.class",
        "entity.name.type"
      ],
      "settings": {
        "foreground": "#b57614"
      }
    },
    {
      "name": "Function declarations",
      "scope": [
        "storage.type.function",
        "entity.function",
        "entity.name.function.static"
      ],
      "settings": {
        "foreground": "#427b58"
      }
    },
    {
      "scope": "entity.name.function.function-call",
      "settings": {
        "foreground": "#427b58"
      }
    },
    {
      "scope": "support.function.builtin",
      "settings": {
        "foreground": "#af3a03"
      }
    },
    {
      "scope": [
        "entity.name.method",
        "entity.name.method.function-call",
        "entity.name.static.function-call"
      ],
      "settings": {
        "foreground": "#689d6a"
      }
    },
    {
      "scope": "brace",
      "settings": {
        "foreground": "#504945"
      }
    },
    {
      "name": "variables",
      "scope": [
        "meta.parameter.type.variable",
        "variable.parameter",
        "variable.name",
        "variable.other",
        "variable",
        "string.constant.other.placeholder"
      ],
      "settings": {
        "foreground": "#076678"
      }
    },
    {
      "scope": "prototype",
      "settings": {
        "foreground": "#8f3f71"
      }
    },
    {
      "scope": "storage.type.class",
      "settings": {
        "foreground": "#9d0006"
      }
    },
    {
      "scope": ["punctuation"],
      "settings": {
        "foreground": "#7c6f64"
      }
    },
    {
      "scope": "punctuation.quoted",
      "settings": {
        "foreground": "#3c3836"
      }
    },
    {
      "scope": "punctuation.quasi",
      "settings": {
        "foreground": "#9d0006"
      }
    },
    {
      "name": "URL",
      "scope": ["*url*", "*link*", "*uri*"],
      "settings": {
        "fontStyle": "underline"
      }
    },
    // ----------------------------------------
    //            LANGUAGE SPECIFIC
    // ----------------------------------------
    // PYTHON ----------------------------------------
    {
      "name": "Python function",
      "scope": ["meta.function.python", "entity.name.function.python"],
      "settings": {
        "foreground": "#427b58"
      }
    },
    {
      "name": "Python Function and Class definition keywords",
      "scope": [
        "storage.type.function.python",
        "storage.modifier.declaration",
        "storage.type.class.python"
      ],
      "settings": {
        "foreground": "#9d0006"
      }
    },
    {
      "name": "Python Function Call",
      "scope": "meta.function-call.generic",
      "settings": {
        "foreground": "#076678"
      }
    },
    {
      "name": "Python Function Arguments",
      "scope": "meta.function-call.arguments",
      "settings": {
        "foreground": "#504945"
      }
    },
    {
      "name": "Python Function decorator",
      "scope": "entity.name.function.decorator",
      "settings": {
        "foreground": "#b57614",
        "fontStyle": "bold"
      }
    },
    {
      "name": "Python ALL CAPS",
      "scope": "constant.other.caps",
      "settings": {
        "fontStyle": "bold"
      }
    },
    // SHELL ----------------------------------------
    {
      "scope": "keyword.operator.logical",
      "settings": {
        "foreground": "#9d0006"
      }
    },
    {
      "scope": "punctuation.definition.logical-expression",
      "settings": {
        "foreground": "#af3a03"
      }
    },
    {
      "scope": "string.inperpolated.dollar.shell",
      "settings": {
        "foreground": "#af3a03"
      }
    },
    {
      "scope": [
        "string.interpolated.dollar.shell",
        "string.interpolated.backtick.shell"
      ],
      "settings": {
        "foreground": "#427b58"
      }
    },
    // C C++ ----------------------------------------
    {
      "scope": "keyword.control.directive",
      "settings": {
        "foreground": "#427b58"
      }
    },
    {
      "scope": "support.function.C99",
      "settings": {
        "foreground": "#b57614"
      }
    },
    // C# ----------------------------------------
    {
      "name": "C# functions & namespace",
      "scope": [
        "meta.function.cs",
        "entity.name.function.cs",
        "entity.name.type.namespace.cs"
      ],
      "settings": {
        "foreground": "#79740e"
      }
    },
    {
      "name": "C# Variables",
      "scope": [
        "keyword.other.using.cs",
        "entity.name.variable.field.cs",
        "entity.name.variable.local.cs",
        "variable.other.readwrite.cs"
      ],
      "settings": {
        "foreground": "#427b58"
      }
    },
    {
      "name": "C# This",
      "scope": ["keyword.other.this.cs", "keyword.other.base.cs"],
      "settings": {
        "foreground": "#8f3f71"
      }
    },
    // MAKEFILE ----------------------------------------
    {
      "scope": "meta.scope.prerequisites",
      "settings": {
        "foreground": "#b57614"
      }
    },
    {
      "scope": "entity.name.function.target",
      "settings": {
        "foreground": "#79740e",
        "fontStyle": "bold"
      }
    },
    // JAVA ----------------------------------------
    {
      "name": "coloring of the Java import and package identifiers",
      "scope": [
        "storage.modifier.import.java",
        "storage.modifier.package.java"
      ],
      "settings": {
        "foreground": "#665c54"
      }
    },
    {
      "scope": ["keyword.other.import.java", "keyword.other.package.java"],
      "settings": {
        "foreground": "#427b58"
      }
    },
    {
      "scope": "storage.type.java",
      "settings": {
        "foreground": "#b57614"
      }
    },
    {
      "scope": "storage.type.annotation",
      "settings": {
        "foreground": "#076678",
        "fontStyle": "bold"
      }
    },
    {
      "scope": "keyword.other.documentation.javadoc",
      "settings": {
        "foreground": "#427b58"
      }
    },
    {
      "scope": "comment.block.javadoc variable.parameter.java",
      "settings": {
        "foreground": "#79740e",
        "fontStyle": "bold"
      }
    },
    {
      "scope": [
        "source.java variable.other.object",
        "source.java variable.other.definition.java"
      ],
      "settings": {
        "foreground": "#3c3836"
      }
    },
    // LISP ----------------------------------------
    {
      "name": "Lisp optional function parameters",
      "scope": "meta.function-parameters.lisp",
      "settings": {
        "foreground": "#b57614"
      }
    },
    // MARKUP ----------------------------------------
    {
      "scope": "markup.underline",
      "settings": {
        "fontStyle": "underline"
      }
    },
    {
      "scope": "string.other.link.title.markdown",
      "settings": {
        "foreground": "#928374",
        "fontStyle": "underline"
      }
    },
    {
      "scope": "markup.underline.link",
      "settings": {
        "foreground": "#8f3f71"
      }
    },
    {
      "scope": "markup.bold",
      "settings": {
        "fontStyle": "bold",
        "foreground": "#af3a03"
      }
    },
    {
      "scope": "markup.heading",
      "settings": {
        "fontStyle": "bold",
        "foreground": "#af3a03"
      }
    },
    {
      "scope": "markup.italic",
      "settings": {
        "fontStyle": "italic"
      }
    },
    {
      "scope": "markup.inserted",
      "settings": {
        "foreground": "#79740e"
      }
    },
    {
      "scope": "markup.deleted",
      "settings": {
        "foreground": "#d65d0e"
      }
    },
    {
      "scope": "markup.changed",
      "settings": {
        "foreground": "#af3a03"
      }
    },
    {
      "scope": "markup.punctuation.quote.beginning",
      "settings": {
        "foreground": "#98971a"
      }
    },
    {
      "scope": "markup.punctuation.list.beginning",
      "settings": {
        "foreground": "#076678"
      }
    },
    {
      "scope": ["markup.inline.raw", "markup.fenced_code.block"],
      "settings": {
        "foreground": "#427b58"
      }
    },
    // JSON ----------------------------------------
    {
      "scope": "string.quoted.double.json",
      "settings": {
        "foreground": "#076678"
      }
    },
    {
      "name": "JSON Level 0",
      "scope": [
        "source.json meta.structure.dictionary.json support.type.property-name.json"
      ],
      "settings": {
        "foreground": "#79740e"
      }
    },
    {
      "name": "JSON Level 1",
      "scope": [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
      ],
      "settings": {
        "foreground": "#427b58"
      }
    },
    {
      "name": "JSON Level 2",
      "scope": [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
      ],
      "settings": {
        "foreground": "#8f3f71"
      }
    },
    {
      "name": "JSON Level 3",
      "scope": [
        "source.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json meta.structure.dictionary.value.json meta.structure.dictionary.json support.type.property-name.json"
      ],
      "settings": {
        "foreground": "#79740e"
      }
    },
    // CSS ----------------------------------------
    {
      "scope": "entity.other.attribute-name.css",
      "settings": {
        "foreground": "#af3a03"
      }
    },
    {
      "scope": "source.css meta.selector",
      "settings": {
        "foreground": "#3c3836"
      }
    },
    {
      "scope": "support.type.property-name.css",
      "settings": {
        "foreground": "#af3a03"
      }
    },
    {
      "scope": "entity.other.attribute-name.class",
      "settings": {
        "foreground": "#79740e"
      }
    },
    {
      "scope": [
        "source.css support.function.transform",
        "source.css support.function.timing-function",
        "source.css support.function.misc"
      ],
      "settings": {
        "foreground": "#9d0006"
      }
    },
    {
      "name": "CSS property value",
      "scope": [
        "support.property-value",
        "constant.rgb-value",
        "support.property-value.scss",
        "constant.rgb-value.scss"
      ],
      "settings": {
        "foreground": "#d65d0e"
      }
    },
    {
      "scope": ["entity.name.tag.css"],
      "settings": {
        "fontStyle": "normal"
      }
    },
    // HTML / XML ----------------------------------------
    {
      "scope": ["punctuation.definition.tag"],
      "settings": {
        "foreground": "#076678"
      }
    },
    {
      "scope": ["text.html entity.name.tag", "text.html punctuation.tag"],
      "settings": {
        "foreground": "#427b58",
        "fontStyle": "bold"
      }
    },
    // javascript ---------------------------------------
    {
      "scope": ["source.js variable.language"],
      "settings": {
        "foreground": "#af3a03"
      }
    },
    // typescript ---------------------------------------
    {
      "scope": ["source.ts variable.language"],
      "settings": {
        "foreground": "#af3a03"
      }
    },
    // golang --------------------------------------------
    {
      "scope": ["source.go storage.type"],
      "settings": {
        "foreground": "#b57614"
      }
    },
    {
      "scope": ["source.go entity.name.import"],
      "settings": {
        "foreground": "#79740e"
      }
    },
    {
      "scope": ["source.go keyword.package", "source.go keyword.import"],
      "settings": {
        "foreground": "#427b58"
      }
    },
    {
      "scope": ["source.go keyword.interface", "source.go keyword.struct"],
      "settings": {
        "foreground": "#076678"
      }
    },
    {
      "scope": ["source.go entity.name.type"],
      "settings": {
        "foreground": "#3c3836"
      }
    },
    {
      "scope": ["source.go entity.name.function"],
      "settings": {
        "foreground": "#8f3f71"
      }
    },
    // cucumber
    {
      "scope": ["keyword.control.cucumber.table"],
      "settings": {
        "foreground": "#076678"
      }
    },
    // REASONML ------------------------------------
    {
      "name": "ReasonML String",
      "scope": ["source.reason string.double", "source.reason string.regexp"],
      "settings": {
        "foreground": "#79740e"
      }
    },
    {
      "name": "ReasonML equals sign",
      "scope": ["source.reason keyword.control.less"],
      "settings": {
        "foreground": "#427b58"
      }
    },
    {
      "name": "ReasonML variable",
      "scope": ["source.reason entity.name.function"],
      "settings": {
        "foreground": "#076678"
      }
    },
    {
      "name": "ReasonML property",
      "scope": [
        "source.reason support.property-value",
        "source.reason entity.name.filename"
      ],
      "settings": {
        "foreground": "#af3a03"
      }
    },
    // POWERSHELL ------------------------------------
    {
      "name": "Powershell member",
      "scope": ["source.powershell variable.other.member.powershell"],
      "settings": {
        "foreground": "#af3a03"
      }
    },
    {
      "name": "Powershell function",
      "scope": ["source.powershell support.function.powershell"],
      "settings": {
        "foreground": "#b57614"
      }
    },
    {
      "name": "Powershell function attribute",
      "scope": ["source.powershell support.function.attribute.powershell"],
      "settings": {
        "foreground": "#665c54"
      }
    },
    {
      "name": "Powershell hashtable member",
      "scope": [
        "source.powershell meta.hashtable.assignment.powershell variable.other.readwrite.powershell"
      ],
      "settings": {
        "foreground": "#af3a03"
      }
    }
  ]
};

