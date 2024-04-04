### Rules:

- each push should be done with pull request to prevent merge conflicts or code breaking
- components should be all in components folder in this hierarchy:

```
  componentName  - componentName.component.js
                 - componentName.component.css
```

where componentName should be component name, and css related just for this component should be in this folder too

- in global-styles should be just css related to all application
- for js we will use camelCase notation (ex: nameVariable) and for css we will use snakeCase (ex: name_variable)
- commits messages should be clear and related with changes to prevent future bugs

### Commands:

- for project starting: npm run start
- for project building: npm run build
