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

export async function GetPosts( params = {} ) {
  const query = `query content_view_10e288b277ac4150890da279d16ae8ff($first: Int, $skip: Int, $stage: Stage!, $where: PostWhereInput, $orderBy: PostOrderByInput) {
    page: postsConnection(first: $first, skip: $skip, stage: $stage, where: $where, orderBy: $orderBy) {
      edges {
        node {
          id
          stage
          updatedAt
          author {
            entryId: id
            name
          }
          coverImage {
            id
            handle
            fileName
            mimeType
            url
          }
          createdAt
          date
          id
          publishedAt
          publishedBy {
            entryId: id
            name
          }
          seo {
            entryId: id
            title
          }
          slug
          tags
          title
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
          documentInStages(includeCurrent: true) {
            id
            stage
            updatedAt
            publishedAt
          }
          content {
            html
          }
          excerpt
        }
      }
      aggregate {
        count
      }
    }
  }`
  return await Request( query, params )
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

export async function GetCategories() {
  const query = `query content_view_0377b275f34b4030b4607743bd07b73d($first: Int, $skip: Int, $stage: Stage!, $where: CategoryWhereInput, $orderBy: CategoryOrderByInput) {
    page: categoriesConnection(first: $first, skip: $skip, stage: $stage, where: $where, orderBy: $orderBy) {
      edges {
        node {
          id
          stage
          updatedAt
          color {
            hex
            css
            rgba {
              r
              g
              b
              a
            }
          }
          createdAt
          id
          image {
            id
            handle
            fileName
            mimeType
            url(transformation: {image: {resize: {fit: crop, height: 150, width: 150}}})
          }
          posts(first: 11) {
            entryId: id
          }
          publishedAt
          publishedBy {
            entryId: id
            name
          }
          slug
          title
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
          documentInStages(includeCurrent: true) {
            id
            stage
            updatedAt
            publishedAt
          }
        }
      }
      aggregate {
        count
      }
    }
  }
  `

  return Request( query, {
    first: 25,
    skip: 0,
    stage: "DRAFT",
    where: { "AND": [] },
    orderBy: null,
    locales: null
  } )
}