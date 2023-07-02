import React from 'react';
import imageUrlBuilder from '@sanity/image-url';
import client from '../sanity'
const builder = imageUrlBuilder(client);

export default function urlFor(source) {
	return builder.image(source).url();
}
