import imageUrlBuilder from '@sanity/image-url';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { client } from '../../../../client';

export function getSanityImageUrl(source: SanityImageSource) {
  return imageUrlBuilder(client).image(source).url();
}
