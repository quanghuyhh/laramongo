db.createUser(
    {
         user: "sail",
         pwd: "password",
         roles: [ { role: "dbOwner", db: "example_app" } ],
         mechanisms:[  
               "SCRAM-SHA-1"
         ]
    }
)