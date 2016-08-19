# Entity Relationships
We are in the process of creating a diagram for the Entity Relationships in iPaaS. Below is what we currently have, which is pretty incomplete and likely out-of-date. Please feel free to edit this document as necessary.

## Models/Entities:
- Favorites
    - belongs to User
    - has many Integrations
    - has many Recipes
- Integrations
    - belongs to an Organisation (whether by using recipe or not?)
    - has many Tags (many-to-many)
- Organization
    - has many Recipes and Integrations
    - has many Users
    - has many Environments (Dev / Test / Staging / UAT)
- Recipes
    - belongs to Organization
    - has many Tags (many-to-many)
- Reports (if we want them persisted to a hard disk)
    - belongs to User
- Settings
    - belongs to Organization
    - belongs to User
- Tags
    - has many Integrations (many-to-many)
    - has many Recipes (many-to-many)
- User
    - belongs to Organization
    - has many Favorites
    - has many Integrations
    - has many Reports (or should this be under Integrations instead?)
    - has many Settings
- Environment (a place where integrations run)
    - has many Integration Runtime
- Integration Runtime (a collection of integration containers in an Environment)
    - has an Integration
    - has an Environment in which it runs
    - has many Containers (process instances)
    
 