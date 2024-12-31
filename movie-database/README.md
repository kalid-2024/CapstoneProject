# MovieLovers :Movie Database Application

MovieLovers is a userfriendly and Responsive movie searching website with a search form functionality. which allows searching by entering a movies,Tv shows title or name.

This app fetches data from OMDb API. which is a RESTful web service to obtain movie information. The app uses useState and useEffect hooks for state and effects managment. the fetched data are stored in the state and rendered to the page dynamicaly from the state.

when the displayed result is clicked the app redirects to a new moviedetail page showing the selected item's  detail information . this process also involves fetching of  detail data from an api using useEffect hooks and axios methods. 

the header, mainsection, foote components are  designed with good userexperiance and responsiveness in mind.

the movie cards contain movie poster , movie title , movie year informations from the fetched api data.

the movie cards are styled in a userfriendly manner which are suitable for users experiance using tailwind css and some vanilla css for the darkmode/lightmode toggle features. sidebar activated when the hamburger menu is clicked also involves vanilla css with react code. 

the app also utilizes routing  between different pages. the pages in the app are namely:- about page ,FAQ, action,drama,comedy,sci-fi pages, favorites.




