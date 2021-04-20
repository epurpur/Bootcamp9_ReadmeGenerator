// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) =>  {
  return `
  # isitdry


Climbing Weather App - Python Flask application

Climbing Weather Forecast application I built in order to learn the python flask web framework. It is pretty simple, but actually does tell the weather at various climbing destinations internationally. There are over 200 locations in the US and 300 internationally. 


***To deploy locally***

-clone repository
-start virtual environment using the following:

        This will create a new 'env' environment folder in your directory

            - python -m venv env   
        
        Build your dependencies from requirements.txt file:
        
            - pip3 install -r requirements.txt
            
        To start this virtual environment, run:
        
            - source env/bin/activate

-set environment variables locally (available in Heroku dashboard)
    - to run your own local instance, you'll need three API keys. All are free
    
        - Google Maps Javascript API: https://developers.google.com/maps/documentation/javascript/overview (to render Google basemap)
        
            -variable called GOOGLE_MAPS_JS_API_KEY
        
        - Open Weather Map: https://openweathermap.org/api (for weather forecast data)
        
            -variable called CLIMACELL_API_KEY
        
        - Climacell: https://www.climacell.co/ (for historical weather data)
        
            -variable called OPENWEATHERMAP_API_KEY
        
-lastly, set environment variables locally for each of the 3 API keys following this example:

    - export GOOGLE_MAPS_JS_API_KEY='your api key'
    
    
-Finally, to run the app locally:

    - python app.py
    
        or
        
    - flask run
        
    

`;
}

const markdown = (myInput) => {return myInput}



module.exports = {
  generateMarkdown: generateMarkdown
}
