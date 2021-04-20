"\n  # isitdry\n\n\nClimbing Weather App - Python Flask application\n\nClimbing Weather Forecast application I built in order to learn the python flask web framework. It is pretty simple, but actually does tell the weather at various climbing destinations internationally. There are over 200 locations in the US and 300 internationally. \n\n\n***To deploy locally***\n\n-clone repository\n-start virtual environment using the following:\n\n        This will create a new 'env' environment folder in your directory\n\n            - python -m venv env   \n        \n        Build your dependencies from requirements.txt file:\n        \n            - pip3 install -r requirements.txt\n            \n        To start this virtual environment, run:\n        \n            - source env/bin/activate\n\n-set environment variables locally (available in Heroku dashboard)\n    - to run your own local instance, you'll need three API keys. All are free\n    \n        - Google Maps Javascript API: https://developers.google.com/maps/documentation/javascript/overview (to render Google basemap)\n        \n            -variable called GOOGLE_MAPS_JS_API_KEY\n        \n        - Open Weather Map: https://openweathermap.org/api (for weather forecast data)\n        \n            -variable called CLIMACELL_API_KEY\n        \n        - Climacell: https://www.climacell.co/ (for historical weather data)\n        \n            -variable called OPENWEATHERMAP_API_KEY\n        \n-lastly, set environment variables locally for each of the 3 API keys following this example:\n\n    - export GOOGLE_MAPS_JS_API_KEY='your api key'\n    \n    \n-Finally, to run the app locally:\n\n    - python app.py\n    \n        or\n        \n    - flask run\n        \n    \n\n"