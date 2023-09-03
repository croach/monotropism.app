/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "69m51uzj362qt3l",
    "created": "2023-09-03 20:56:35.607Z",
    "updated": "2023-09-03 20:56:35.607Z",
    "name": "submissions",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "6iw01dcr",
        "name": "submission",
        "type": "json",
        "required": false,
        "unique": false,
        "options": {}
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
  const collection = dao.findCollectionByNameOrId("69m51uzj362qt3l");

  return dao.deleteCollection(collection);
})
