# @luminu/components

## Setup

-   npm run serve

## Deployment

-   npm login --scope=@luminu --registry=http://repo.luminu.net/repository/luminu-node/
-   npm run build
-   npm publish

## Documentation

### Button

#### Props

| Name | required/default | type   | description                             |
| :--- | :--------------- | :----- | :-------------------------------------- |
| text | true             | String | Sets the button's text                  |
| size | false / normal   | String | Sets the button's size (small, big)     |
| type | false / normal   | String | Sets the button's type (success, error) |

### Seperator

#### Props

| Name    | required/default | type   | description                             |
| :------ | :--------------- | :----- | :-------------------------------------- |
| mtop    | false / 5        | Number | Sets the top margin of the seperator    |
| mbottom | false / 5        | Number | Sets the bottom margin of the seperator |

### Notification

#### Props

| Name     | required/default | type    | description                                     |
| :------- | :--------------- | :------ | :---------------------------------------------- |
| message  | true             | String  | Sets the message that will be displayed         |
| active   | true             | Boolean | Sets it's activity state                        |
| timeout  | false / 2500     | Number  | Sets the timeout when it should fade out again  |
| fontSize | false / 24       | Number  | Sets the font size for the notification message |

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
