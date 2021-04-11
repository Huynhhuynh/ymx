import { GraphQLClient } from 'graphql-request'
/**
 * 
 */

/**
 * Request API method
 * 
 * @param {*} query 
 * @param {*} variables 
 * @returns 
 */
export async function Request( query, variables = {} ) {
  const graphcms = new GraphQLClient( process.env.GRAPHCMS_ENDPOINTS_URL )
  return await graphcms.request( query, variables )
}

/**
 * Get all posts slug
 * @returns 
 */
export async function GetAllPostsSlug() {
  const query = `{
    posts(stage: PUBLISHED) {
      slug
    }
  }`

  return await Request( query )
}

/**
 * Get single post data 
 * 
 * @param {String} slug 
 * @returns 
 */
export async function GetPost( slug ) {
  const query = `query content_3a75c00989b343a49497b7e9b1c7e0a5_ckadrcx4g00pw01525c5d2e56($slug: String!) {
    values: post(where: {slug: $slug}, stage: PUBLISHED) {
      id
      stage
      updatedAt
      createdBy {
        entryId: id
        name
        picture
        kind
      }
      updatedBy {
        entryId: id
        name
        picture
        kind
      }
      author {
        id
        stage
        updatedAt
        title
        picture {
          url
        }
        name
      }
      content {
        html
      }
      coverImage {
        url
      }
      createdAt
      date
      id
      publishedAt
      seo {
        id
        stage
        updatedAt
        title
        documentInStages(includeCurrent: true) {
          id
          stage
          updatedAt
          publishedAt
        }
      }
      slug
      tags
      title
      updatedAt
      history_3a75c00989b343a49497b7e9b1c7e0a5_PUBLISHED: history(limit: 50, stageOverride: PUBLISHED) {
        id
        revision
        stage
        createdAt
      }
    }
  }`

  return Request( query, { slug } )
}