/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bxu4n8wgozzr8c5")

  // update
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "u17nqw6m",
    "name": "submission",
    "type": "relation",
    "required": true,
    "unique": false,
    "options": {
      "collectionId": "69m51uzj362qt3l",
      "cascadeDelete": true,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("bxu4n8wgozzr8c5")

  // update
  collection.schema.addField(new SchemaField({
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
  }))

  return dao.saveCollection(collection)
})
