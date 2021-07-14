---
inject: true
to: src/store/index.ts
after: "import"
append: true
---
import { <%= h.changeCase.camel(name) %>Reducer } from '@store/slices/<%= h.changeCase.camel(name) %>';