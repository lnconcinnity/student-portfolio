import { RenderAbout, RenderGallery, RenderProjects, RenderHeader } from "../sections/section.ts";

const Sections = [
    {
        id: 0,
        key: 'header',
        name: 'Header',
        hint: 'A header',
        ignoreAsLink: true,
        render: () => RenderHeader({id: 0, key: 'header'})
    },
    {
        id: 1,
        key: 'about',
        name: 'About me',
        hint: 'A short disclosure about myself!',
        ignoreAsLink: false,
        render: () => RenderAbout({id: 0, key: 'about'})
    },
    {
        id: 2,
        key: 'projects',
        name: 'Projects',
        hint: 'Some works of mine in my specialized field!',
        ignoreAsLink: false,
        render: () => RenderProjects({id: 1, key: 'projects'})
    },
    {
        id: 3,
        key: 'art',
        name: 'Gallery',
        hint: 'Some artistic illustrations/photos I\'ve drawn/captured!',
        ignoreAsLink: false,
        render: () => RenderGallery({id: 2, key: 'art'})
    },
]

export default Sections;