import React, { useState } from 'react';
import { Icon } from '@astrojs/starlight/components';

const CardComponent = ({ icon, title, children }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleContent = () => {
	console.log("Toggle");
    setIsExpanded(!isExpanded);
  };

  return (
    <article className="card sl-flex">
      <p className="title sl-flex cursor-pointer" onClick={toggleContent}>
        {icon && <Icon name={icon} className="icon" size="1.333em" />}
        <span dangerouslySetInnerHTML={{ __html: title }} />
      </p>
      <div className={`body ${isExpanded ? 'expanded' : ''}`}>{children}</div>

      <style>
        {`
	.card {
		--sl-card-border: var(--sl-color-purple);
		--sl-card-bg: var(--sl-color-purple-low);
		border: 1px solid var(--sl-color-gray-5);
		background-color: var(--sl-color-black);
		padding: clamp(1rem, calc(0.125rem + 3vw), 2.5rem);
		flex-direction: column;
		gap: clamp(0.5rem, calc(0.125rem + 1vw), 1rem);
	}
	.card:nth-child(4n + 1) {
		--sl-card-border: var(--sl-color-orange);
		--sl-card-bg: var(--sl-color-orange-low);
	}
	.card:nth-child(4n + 3) {
		--sl-card-border: var(--sl-color-green);
		--sl-card-bg: var(--sl-color-green-low);
	}
	.card:nth-child(4n + 4) {
		--sl-card-border: var(--sl-color-red);
		--sl-card-bg: var(--sl-color-red-low);
	}
	.card:nth-child(4n + 5) {
		--sl-card-border: var(--sl-color-blue);
		--sl-card-bg: var(--sl-color-blue-low);
	}
	.title {
		font-weight: 600;
		font-size: var(--sl-text-h4);
		color: var(--sl-color-white);
		line-height: var(--sl-line-height-headings);
		gap: 1rem;
		align-items: center;
	}
	.card .icon {
		border: 1px solid var(--sl-card-border);
		background-color: var(--sl-card-bg);
		padding: 0.2em;
		border-radius: 0.25rem;
	}
	.card .body {
		margin: 0;
		font-size: clamp(var(--sl-text-sm), calc(0.5rem + 1vw), var(--sl-text-body));
	}
        `}
      </style>
    </article>
  );
};

export default CardComponent;
