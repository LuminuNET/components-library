# @luminu/components

## Setup

-   npm run serve

## Deployment

-   npm login --scope=@luminu --registry=http://repo.luminu.net/repository/luminu-node/
-   npm run build
-   npm publish

## Documentation

### Seperator

#### Props

| Name    | required/default | type   | description                             |
| :------ | :--------------- | :----- | :-------------------------------------- |
| mTop    | false / 5        | Number | Sets the top margin of the seperator    |
| mBottom | false / 5        | Number | Sets the bottom margin of the seperator |

### Notification

#### Props

| Name    | required/default | type    | description                                    |
| :------ | :--------------- | :------ | :--------------------------------------------- |
| message | true             | String  | Sets the message that will be displayed        |
| active  | true             | Boolean | Sets it's activity state                       |
| timeout | false / 2500     | Number  | Sets the timeout when it should fade out again |

### Card

#### Props

| Name      | required/default | type    | description                   |
| :-------- | :--------------- | :------ | :---------------------------- |
| highlight | false / false    | Boolean | Marks the card as highlighted |

### StickyHeader

#### Props

| Name   | required/default | type         | description                    |
| :----- | :--------------- | :----------- | :----------------------------- |
| links  | true             | Array(TLink) | Sets the displayed links       |
| active | false / -1       | Number       | Sets which dropdown is pressed |

### Footer

#### Props

| Name     | required/default | type             | description                          |
| :------- | :--------------- | :--------------- | :----------------------------------- |
| partners | true             | Array(TPartners) | Sets the actively displayed partners |
