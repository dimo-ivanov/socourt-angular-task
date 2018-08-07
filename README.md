# socourt-angular-task

## Geting started
Open the server directory, install all its dependencies and run it. It is listening on port 5000. The server uses in-memory database so if you need to restart it for some reason, all the data will be lost and you will need to populate it again.

## Task 1: Create an Angular application and add authentication
Create an Angular application and prepare the initial project structure. Install Redux if you prefer (it is not necessary, you may skip it and create pure Angular application). Add authentication and make sure the register, login and logout functionalities work correctly. To register a user, you need to send a POST request to the server on ‘/auth/signup’ with ‘name’, ‘email’ and ‘password’ data (sent as JSON). To login a user, you need to send a POST request to the server on ‘/auth/login’ with ‘email’ and ‘password’ data (sent as JSON). You need to save the user token in your application state. Make sure you validate everything on the client application.

## Task 2: Add statistics
Show the total number of users and animals in the system on the home page. You need to make a GET request to ‘/stats’ in order to retrieve the data.

## Task 3: Add creating of animals
Add a form to create animals in the system. Each animal has ‘name’ as string, ‘age’ as number, ‘color’ as string, ‘type’ as string (type can be ‘Cat’, ‘Dog’, ‘Bunny’, ‘Exotic’ or ‘Other’), ‘price’ as number and ‘image’ as string URL. Make sure you validate everything on the client application. The data must be sent as POST request to the server on ‘/animals/create/’. This route is only for authenticated users so you need to send a header with `Authorization` name and value `bearer {token}` in order to pass the authentication checks.

## Task 4: Add listing of animals
Add a page where all animals are listed. You need to make a GET request to ‘/animals/all’ to receive an array of animals data. Link each animal to its details page. Don’t show every piece of information about the animal on this page. Leave something for the details page. You may add this functionality on the home page.

## Task 5: Add animal details
Add a page where all animal details are shown. You need to make a GET request to ‘/animals/details/{id}’ to retrieve information about the animal with the provided id. This route is only for authenticated users so you need to send a header with `Authorization` name and value `bearer {token}` in order to pass the authentication checks. Make sure your Angular application redirects to the login page, if the user tries to open the animal details page and he’s not logged in.

## Task 6: Add profile page
Add a profile page where all animals created by the current user are shown. You need to make a GET request to ‘/animals/mine/’ to receive an array of animals. The route is only for authenticated users so you need to send a header with `Authorization` name and value `bearer {token}` in order to pass the authentication checks.

## Task 7: Add option to delete animals
On the profile page, for each animal add a delete button to allow the user to remove a previously added animal from the system. To delete an animal, you need to make a POST request to ‘/animals/delete/{id}’. This route is only for authenticated users so you need to send a header with `Authorization` name and value `bearer {token}` in order to pass the authentication checks.
