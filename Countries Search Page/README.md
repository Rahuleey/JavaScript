### Countries Search Page

Refer to the below image.
![Uploading image.png…]()


[https://assets.ccbp.in/frontend/content/dynamic-webapps/countries-search-page-output-v2.gif](https://assets.ccbp.in/frontend/content/dynamic-webapps/countries-search-page-output-v2.gif)


Instructions:

Add the id searchInput to the HTML input element
Add the id resultCountries to the HTML container element with the class name result-countries



Achieve the given functionality to the given prefilled code.

when the page is opened,
Make an HTTP GET Request using Fetch with URL https://apis.ccbp.in/countries-data
Loader should be displayed using the Bootstrap component spinner while making an HTTP request
Create HTML elements dynamically and append the created elements to the HTML container element with the id resultCountries
When the value is provided in the HTML input element with id searchInput,
Filter the HTTP response (Array of objects with keys flag, name, population) based on the value of the HTML input element
Create HTML elements dynamically with the filtered data and append the created elements to the HTML container element with the id resultCountries
