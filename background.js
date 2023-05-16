// const query = `mutation CREATE_ENTRYSTORY(
//     $content: String
//     $text: String
//     $image: String
//     $sticker: ID
//     $stickerItem: ID
//     $cursor: String
//   ) {
//     createEntryStory(
//       content: $content
//       text: $text
//       image: $image
//       sticker: $sticker
//       stickerItem: $stickerItem
//       cursor: $cursor
//     ) {
//       warning
//       discuss {
//         id
//         title
//         content
//         seContent
//         created
//         commentsLength
//         likesLength
//         visit
//         category
//         prefix
//         groupNotice
//         user {
//           id
//           nickname
//           username
//           profileImage {
//             id
//             name
//             label {
//               ko
//               en
//               ja
//               vn
//             }
//             filename
//             imageType
//             dimension {
//               width
//               height
//             }
//             trimmed {
//               filename
//               width
//               height
//             }
//           }
//           status {
//             following
//             follower
//           }
//           description
//           role
//           mark {
//             id
//             name
//             label {
//               ko
//               en
//               ja
//               vn
//             }
//             filename
//             imageType
//             dimension {
//               width
//               height
//             }
//             trimmed {
//               filename
//               width
//               height
//             }
//           }
//         }
//         images {
//           filename
//           imageUrl
//         }
//         sticker {
//           id
//           name
//           label {
//             ko
//             en
//             ja
//             vn
//           }
//           filename
//           imageType
//           dimension {
//             width
//             height
//           }
//           trimmed {
//             filename
//             width
//             height
//           }
//         }
//         progress
//         thumbnail
//         reply
//         bestComment {
//           id
//           user {
//             id
//             nickname
//             username
//             profileImage {
//               id
//               name
//               label {
//                 ko
//                 en
//                 ja
//                 vn
//               }
//               filename
//               imageType
//               dimension {
//                 width
//                 height
//               }
//               trimmed {
//                 filename
//                 width
//                 height
//               }
//             }
//             status {
//               following
//               follower
//             }
//             description
//             role
//             mark {
//               id
//               name
//               label {
//                 ko
//                 en
//                 ja
//                 vn
//               }
//               filename
//               imageType
//               dimension {
//                 width
//                 height
//               }
//               trimmed {
//                 filename
//                 width
//                 height
//               }
//             }
//           }
//           content
//           created
//           removed
//           blamed
//           blamedBy
//           commentsLength
//           likesLength
//           isLike
//           hide
//           image {
//             id
//             name
//             label {
//               ko
//               en
//               ja
//               vn
//             }
//             filename
//             imageType
//             dimension {
//               width
//               height
//             }
//             trimmed {
//               filename
//               width
//               height
//             }
//           }
//           sticker {
//             id
//             name
//             label {
//               ko
//               en
//               ja
//               vn
//             }
//             filename
//             imageType
//             dimension {
//               width
//               height
//             }
//             trimmed {
//               filename
//               width
//               height
//             }
//           }
//         }
//         blamed
//         description1
//         description2
//         description3
//       }
//     }
//   }
//   `;
  
//   chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
//     if (request.contentScriptQuery == "post") {
//       fetch("https://playentry.org/graphql", {
//         headers: {
//           "content-type": "application/json",
//           "csrf-token": request.data.csrf,
//           "x-token": request.data.xToken,
//         },
//         referrerPolicy: "strict-origin-when-cross-origin",
//         body: JSON.stringify({
//           query,
//           variables: {
//             content: request.data.data,
//           },
//         }),
//         method: "POST",
//       })
//         .then((response) => response.json())
//         .then((response) => sendResponse(response))
//         .catch((error) => console.log("Error:", error));
//       return true;
//     }
//   });