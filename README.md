## API Routes

-   `https://ancient-chamber-28182.herokuapp.com/` : Base URL
-   `/api/v1/Tour/GET/tours` : to get all tours data

-   `/api/v1/Tour/GET/tours?page=2&limit=5` : to get pagination tours data

-   `/api/v1/Tour/GET/tours?fields=name` : to get only that fields data

-   `/api/v1/Tour/GET/tours?sort=fieldName` : to get sorted Tour data

-   `/api/v1/Tour/GET/tours/:ID` : to get a single tour by ID

-   `/api/v1/Tour/GET/tour/trending` : to get top 3 viewed tours

-   `/api/v1/Tour/GET/tour/cheapest` : to get top 3 cheapest tours

-   `/api/v1/Tour/POST/tours` : to add a new tour

-   `/api/v1/Tour/PATCH/tour/:ID` : to update a tour

-   `/api/v1/Tour/GET/tours/DETETE/tour/:ID` : to delete a tour
