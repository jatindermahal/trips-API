Building a Web API

Working with MongoDB Sample Data provided in mongodb Atlas. This is just a simple project which is going to be used by another project "bike-trips" for retrieving data stored in our database. We will me using fetch API and getting our data from this project after it is hosted.

tripDb.js:

• db.initialize(): Establish a connection with the MongoDB server and initialize the "Trip" model with the "trips" collection

• db.addNewTrip(data): Create a new trip in the collection using the object passed in the "data" parameter

• db.getAllTrips(page, perPage): Return an array of all trips for a specific page (sorted by _id), given the number of items per page. For example, if page is 2 and perPage is 5, then this function would return a sorted list of trips (by _id), containing items 6 – 10. This will help us to deal with the large amount of data in this dataset and make paging easier to implement in the UI later.

• db.getTripById(Id): Return a single trip object whose "_id" value matches the "Id" parameter

• updateTripById(data,Id): Overwrite an existing trip whose "_id" value matches the "Id" parameter, using the object passed in the "data" parameter.

• deleteTripById(Id): Delete an existing trip whose "_id" value matches the "Id" parameter

Routes:

• POST /api/trips This route uses the body of the request to add a new "Trip" document to the collection and return the newly created trip object / fail message to the client.

• GET /api/trips This route must accept the numeric query parameters "page" and "perPage" ie: /api/trips?page=1&perPage=5. It will use these values to return all "Trip" objects for a specific "page" to the client.

• GET /api/trips/… This route must accept a route parameter that represents the _id of the desired trip object, ie: /api/trips/572bb8222b288919b68abf5a. It will use this parameter to return a specific "Trip" object to the client.

• PUT /api/trips/… This route must accept a route parameter that represents the _id of the desired trip object, ie: /api/trips/ 572bb8222b288919b68abf5a as well as read the contents of the request body. It will use these values to update a specific "Trip" document in the collection and return a success / fail message to the client.

• DELETE /api/trips/… This route must accept a route parameter that represents the _id of the desired trip object, ie: /api/trips/572bb8222b288919b68abf5a. It will use this value to delete a specific "Trip" document from the collection and return a success / fail message to the client.