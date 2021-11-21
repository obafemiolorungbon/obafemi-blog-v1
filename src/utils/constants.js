export const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!) {
        user(username: "Obafemi") {
            publication {
                posts(page: $page) {
                    title
                    brief
                    slug
                    coverImage
                    contentMarkdown
                    followersCount
                    totalReactions
                    author {username, coverImage, photo }
                }
            }
        }
    }
`;
