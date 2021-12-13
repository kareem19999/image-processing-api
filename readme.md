## How to Use ##
1) Clone the repository from github.
2) Go to the folder in command line.
3) Run ```npm install -g```. Some packages might need to be installed globally to work.
4) To Run the application ```npm run start```.
5) To run the tests ```npm run test```.
6) To build the application and run it ```npm run build``` then .```node build/.```.
7) The storage location for the images is at ```assets -> org ```. The images are saved in ```assets -> thumb```. These are also stated in ```consts.ts``` at ``` src -> utilities ```.
8) In order to run the API, type in the browser ```http://localhost:8000/api/resize/imageName=IMGNAME&width=YOURWIDTH&height=YOURHEIGHT``` where ```IMGNAME``` is the image name and format. ```YOURWIDTH``` and ```YOURHEIGHT``` are the specified Width and Height. The resulting image will appear in the browser.

Exmple:```http://localhost:8000/api/resize/imageName=palmtunnel.jpg&width=150&height=150``` sets palmtunnel.jpg into width of 150px and height of 150px.