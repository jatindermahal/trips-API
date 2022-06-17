Building a Web API

Working with MongoDB Sample Data provided in mongodb Atlas. This is just a simple project which is going to be used by another project "https://github.com/jatindermahal/bike-trips" for retrieving data stored in our database. We will me using fetch API and getting our data from this project after it is hosted.



Routes:

• POST /api/trips This route uses the body of the request to add a new "Trip" document to the collection and return the newly created trip object / fail message to the client.

• GET /api/trips This route must accept the numeric query parameters "page" and "perPage" ie: /api/trips?page=1&perPage=5. It will use these values to return all "Trip" objects for a specific "page" to the client.

• GET /api/trips/… This route must accept a route parameter that represents the _id of the desired trip object, ie: /api/trips/572bb8222b288919b68abf5a. It will use this parameter to return a specific "Trip" object to the client.

• PUT /api/trips/… This route must accept a route parameter that represents the _id of the desired trip object, ie: /api/trips/ 572bb8222b288919b68abf5a as well as read the contents of the request body. It will use these values to update a specific "Trip" document in the collection and return a success / fail message to the client.

• DELETE /api/trips/… This route must accept a route parameter that represents the _id of the desired trip object, ie: /api/trips/572bb8222b288919b68abf5a. It will use this value to delete a specific "Trip" document from the collection and return a success / fail message to the client.
