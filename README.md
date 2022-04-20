# Mother Base Homepage

Project built to serve as a personal-website/portfolio. 

## Stack

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Three.js](https://threejs.org/) - 3D library for JavaScript.
- [Github Pages](https://pages.github.com/) - Website Hosting.

## Tools

- [VS Code](https://code.visualstudio.com/) - Code Editor.
- [Blender](https://www.blender.org/) - 3D CG Toolset.
- [MagickaVoxel](https://ephtracy.github.io/) - Voxel Art Editor.
- [Figma](https://www.figma.com) - Web Based Prototyping Tool.

## Development

Below is the timeline for the development of this project in all aspects (Code, Art, etc).

### Mockups

To begin development I first created mockups to get a basic idea of the layout and look/feel of the site.

I drew up designs for both mobile and desktop.

#### Desktop Designs

![Image of Desktop Mockups](/READMEassets/DesktopMockup.PNG)

#### Mobile Designs

![Image of Mobile Mockups](/READMEassets/MobileMockup.PNG)

Some of the assets and designs of the final site differ pretty significantly from the mockups since these were mainly for a general idea.

### Voxel Modeling 

I wanted to create some sort of 3D art to showcase and act sort of as a logo for the website. I created a couple of models before deciding on a final selection.

![Image of Blender Donut Tutorial](/READMEassets/donut.PNG)

Before deciding on a voxel style I initally pursued the idea of creating a high-poly model.

Eventually I switched to using MagicaVoxel to create models in an art style I felt more of an affinity for.

Below is couple of screenshots of the modeling process.

![Image of MotherBase Model Creation Process 1](/READMEassets/MotherBaseBuild1.png)

![Image of MotherBase Model Creation Process 2](/READMEassets/MotherBaseBuild2.png)

![Image of MotherBase Model Creation Process 3](/READMEassets/MotherBaseBuild3.png)

![Image of MotherBase Model Creation Process 4](/READMEassets/MotherBaseBuild4.png)

![Image of MotherBase Model Creation Process 5](/READMEassets/motherbasebuild5.png)

The whole process of creating the model took about 3 days of on and off work. Below is a render of the final product.

![Image of MotherBase Model Creation Process Final](/READMEassets/finalbuild.png)

Here are the renders for the other models I made for the site

![Image of Muni Model](/READMEassets/MuniStation.png)

![Image of Room Model](/READMEassets/room.png)

### Coding 

For the coding portion of the website I used React since it's quick to get up and running and has plenty of open source libraries to play with.

Most of the website was pretty basic to create, mainly just text, links, and images.

I tried to keep things pretty modular, seperating large sections into individual components.

![Image of Navbar Component](/READMEassets/NavCode.PNG)

In order to add the voxel models to the site I used a library called three js.

To use the models they first need to be converted from gltf format into jsx components.

To convert the models I used the gltfjsx command-line tool.

![Image of Model Code](/READMEassets/ModelCode.PNG)

Once the models are converted we can add them as components into three js scenes on each page.

Each scene has specific lighting and camera properties.

![Image of Scene Code](/READMEassets/SceneCode.PNG)