/* eslint-disable camelcase */
import joi from '@hapi/joi';
import { ValidationErrorHandler } from './errorHandler';
export const validateMetadata = async (payload: any) => {

  const images = joi.object().keys({
    src: joi.string().required(),
    width: joi.number().required(),
    type: joi.string().required(),
  });
  const playlist = joi.object().keys({
    title: joi.string().required(),
    mediaid: joi.string().required(),
    link: joi.string().required(),
    image: joi.string().required(),
    images: joi.array().items(images),
    duration: joi.number().required(),
    pubdate: joi.number().required(),
    description: joi.string().required(),
    tags: joi.string().required(),
    sources: joi.array(),
    tracks: joi.array(),
    variations: joi.any(),
    smpte_ads: joi.any(),
    iconikAssetId: joi.any(),
    rating: joi.any(),
    genre: joi.any(),
    seriesTitle: joi.any(),
    episodeNumber: joi.any(),
    seasonNumber: joi.any(),
  });
  const schema = joi.object({
    title: joi.string().required(),
    description: joi.string().required(),
    kind: joi.string().required(),
    playlist: joi.array().items(playlist),
    feed_instance_id: joi.string().required(),
  });

  try {

    await schema.validateAsync(payload);
    return;

  } catch (error) {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const validationError = ValidationErrorHandler(error);

    throw { errorMsg: validationError.errorMessage };

  }

};
