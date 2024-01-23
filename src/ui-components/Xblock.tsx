import React from 'react';

type XblockType = 
  | 'callout'
  | 'explore'
  | 'file'
  | 'image'
  | 'interactive'
  | 'learnosity'
  | 'listen'
  | 'ordered-list'
  | 'poll'
  | 'powerpoint'
  | 'references'
  | 'submit-and-compare'
  | 'table'
  | 'text'
  | 'unordered-list'
  | 'video'
  | 'wgu-level';

interface XblockProps {
    type: XblockType;
}

const typeToIconMap: { [key in XblockType]: { path: string, altText: string } } = {
    callout: { path: "/xblocks/callout.svg", altText: "Callout Icon" },
    explore: { path: "/xblocks/explore.svg", altText: "Explore Icon" },
    file: { path: "/xblocks/file.svg", altText: "File Icon" },
    image: { path: "/xblocks/image.svg", altText: "Image Icon" },
    interactive: { path: "/xblocks/interactive.svg", altText: "Interactive Icon" },
    learnosity: { path: "/xblocks/learnosity.svg", altText: "Learnosity Icon" },
    listen: { path: "/xblocks/listen.svg", altText: "Listen Icon" },
    'ordered-list': { path: "/xblocks/ordered-list.svg", altText: "Ordered List Icon" },
    poll: { path: "/xblocks/poll.svg", altText: "Poll Icon" },
    powerpoint: { path: "/xblocks/powerpoint.svg", altText: "Powerpoint Icon" },
    references: { path: "/xblocks/references.svg", altText: "References Icon" },
    'submit-and-compare': { path: "/xblocks/submit-and-compare.svg", altText: "Submit and Compare Icon" },
    table: { path: "/xblocks/table.svg", altText: "Table Icon" },
    text: { path: "/xblocks/text.svg", altText: "Text Icon" },
    'unordered-list': { path: "/xblocks/unordered-list.svg", altText: "Unordered List Icon" },
    video: { path: "/xblocks/video.svg", altText: "Video Icon" },
    'wgu-level': { path: "/xblocks/wgu-level.svg", altText: "WGU Level Icon" },
};

const Xblock: React.FC<XblockProps> = ({ type }) => {
    const { path, altText } = typeToIconMap[type];

    return (
        <div className="border border-accent-900 px-4 py-2 rounded flex justify-center">
            <img src={path} alt={altText} className="h-6 w-6" />
        </div>
    );
};

export default Xblock;
