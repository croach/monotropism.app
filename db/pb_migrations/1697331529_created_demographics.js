/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "bxu4n8wgozzr8c5",
    "created": "2023-10-15 00:58:49.204Z",
    "updated": "2023-10-15 00:58:49.204Z",
    "name": "demographics",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "u17nqw6m",
        "name": "submission",
        "type": "relation",
        "required": false,
        "unique": false,
        "options": {
          "collectionId": "69m51uzj362qt3l",
          "cascadeDelete": false,
          "minSelect": null,
          "maxSelect": 1,
          "displayFields": []
        }
      },
      {
        "system": false,
        "id": "to6vwz0b",
        "name": "version",
        "type": "text",
        "required": true,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": "^\\d+.\\d+.\\d+$"
        }
      },
      {
        "system": false,
        "id": "jyxdprua",
        "name": "gender",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": -1,
          "max": 4
        }
      },
      {
        "system": false,
        "id": "jfarrcsd",
        "name": "ethnicity",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": -1,
          "max": 8
        }
      },
      {
        "system": false,
        "id": "mbwv6upm",
        "name": "education_level",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": -1,
          "max": 6
        }
      },
      {
        "system": false,
        "id": "ifcrm4qz",
        "name": "autism_status",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": -1,
          "max": 5
        }
      },
      {
        "system": false,
        "id": "hyhxhsfp",
        "name": "adhd_status",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": -1,
          "max": 5
        }
      },
      {
        "system": false,
        "id": "pfvafbho",
        "name": "age",
        "type": "number",
        "required": true,
        "unique": false,
        "options": {
          "min": -1,
          "max": 130
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("bxu4n8wgozzr8c5");

  return dao.deleteCollection(collection);
})
