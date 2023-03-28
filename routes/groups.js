const router = require("express").Router();
const db = require("../configs/db.config");
// const { getUserById } = require('../db/queries/users');

router.get("/", (req, res) => {
  db.query(`SELECT * FROM groups`).then((results) => {
    res.json(results.rows);
  });
});

router.get("/message/:group", (req, res) => {
  const { group } = req.params;
  db.query(
    `SELECT * FROM (
      SELECT messages.*, groups.name, groups.id as group_id
      FROM messages
      JOIN groups ON group_id = groups.id
      WHERE groups.name = $1
      ORDER BY messages.id DESC
      LIMIT 20
    ) subquery
    ORDER BY subquery.id ASC;`,
    [group]
  ).then((results) => {
    res.json(results.rows);
  });
});

module.exports = router;

// module.exports = (db) => {
//   // all routes will go here
//

//   return router;
// };
