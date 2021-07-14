---
inject: true
to: src/store/index.ts
skip_if: <%= h.changeCase.camel(name) %>
after: "const reducer = {"
---
  <%= h.changeCase.camel(name) %>: <%= h.changeCase.camel(name) %>Reducer,